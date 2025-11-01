require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.BACKEND_PORT || process.env.PORT || 5000;

console.log('Starting server...');
console.log('PORT:', PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Middleware
// CORS configuration - allow all origins in development, specific in production
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? (process.env.FRONTEND_URL || 'http://localhost:3000')
        : true, // Allow all origins in development
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
let db;
let client;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
    console.error('WARNING: MONGODB_URI is not defined in environment variables');
    console.error('MongoDB-dependent endpoints will not work until MongoDB is configured');
} else {
    // Use database name from env or extract from URI
    const dbName = process.env.MONGODB_DB_NAME || (() => {
        const match = mongoUri.match(/\/\/(?:[^/]+@)?[^/]+\/([^?]+)/);
        return match && match[1] ? match[1] : 'ezlogistics';
    })();

    MongoClient.connect(mongoUri)
        .then(connectedClient => {
            client = connectedClient;
            db = client.db(dbName);
            console.log(`Connected to MongoDB - Database: ${dbName}`);
        })
        .catch(error => {
            console.error('WARNING: MongoDB connection error:', error);
            console.error('MongoDB-dependent endpoints will not work until MongoDB is accessible');
        });
}

// Admin login endpoint
app.post('/api/admin/login', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ 
                success: false, 
                error: 'Database not available. Please check MongoDB connection.' 
            });
        }

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Username and password are required' 
            });
        }

        // Find admin user in MongoDB
        const admin = await db.collection('admins').findOne({ username });

        if (!admin) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid username or password' 
            });
        }

        // Simple password comparison (no encryption as requested)
        if (admin.password !== password) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid username or password' 
            });
        }

        // Success - return user data (without password)
        res.json({
            success: true,
            user: {
                username: admin.username,
                role: admin.role || 'administrator'
            },
            token: 'admin-token-' + Date.now()
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Server error. Please try again later.' 
        });
    }
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ 
                success: false, 
                error: 'Database not available. Please check MongoDB connection.' 
            });
        }

        const { fullName, companyName, mobile, email, services, message } = req.body;

        // Validation
        if (!fullName || !companyName || !mobile || !email) {
            return res.status(400).json({ 
                success: false, 
                error: 'Full Name, Company Name, Mobile, and Email are required' 
            });
        }

        // Prepare contact data
        const contactData = {
            fullName: fullName.trim(),
            companyName: companyName.trim(),
            mobile: mobile.trim(),
            email: email.trim(),
            services: Array.isArray(services) ? services : (services ? [services] : []),
            message: message ? message.trim() : '',
            status: 'new', // new, read, replied
            createdAt: new Date(),
            updatedAt: new Date()
        };

        // Save to MongoDB
        const result = await db.collection('contacts').insertOne(contactData);

        if (result.insertedId) {
            res.json({
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.',
                id: result.insertedId
            });
        } else {
            throw new Error('Failed to save contact form');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Unable to submit form. Please try again later.' 
        });
    }
});

// Get all contact form submissions (Admin only - should add auth check in production)
app.get('/api/contacts', async (req, res) => {
    try {
        if (!db) {
            return res.status(503).json({ 
                success: false, 
                error: 'Database not available. Please check MongoDB connection.' 
            });
        }

        const contacts = await db.collection('contacts')
            .find({})
            .sort({ createdAt: -1 }) // Newest first
            .toArray();
        
        res.json({
            success: true,
            contacts: contacts,
            count: contacts.length
        });
    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Unable to fetch contacts' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', mongodb: db ? 'connected' : 'disconnected' });
});

// Serve static files from React app build directory
const buildPath = path.join(__dirname, '../build');
console.log('Serving static files from:', buildPath);

// Check if build directory exists
const fs = require('fs');
if (fs.existsSync(buildPath)) {
    console.log('Build directory found, serving static files');
    app.use(express.static(buildPath));

    // Serve React app for all non-API routes
    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });
} else {
    console.warn('WARNING: Build directory not found at:', buildPath);
    app.get('*', (req, res) => {
        if (req.path.startsWith('/api')) {
            return res.status(404).json({ error: 'Not found' });
        }
        res.status(500).send('Build directory not found. Please run npm run build first.');
    });
}

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

