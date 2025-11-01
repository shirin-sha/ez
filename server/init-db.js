// Script to initialize admin user in MongoDB
// Run this once to create the admin user: node server/init-db.js

require('dotenv').config();
const { MongoClient } = require('mongodb');

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
    console.error('MONGODB_URI is not defined in environment variables');
    process.exit(1);
}

async function initAdmin() {
    const client = await MongoClient.connect(mongoUri);
    const dbName = process.env.MONGODB_DB_NAME || (() => {
        const match = mongoUri.match(/\/\/(?:[^/]+@)?[^/]+\/([^?]+)/);
        return match && match[1] ? match[1] : 'ezlogistics';
    })();
    const db = client.db(dbName);

    try {
        // Check if admin already exists
        const existingAdmin = await db.collection('admins').findOne({ username: 'admin' });
        
        if (existingAdmin) {
            console.log('Admin user already exists.');
            await client.close();
            return;
        }

        // Create admin user
        const admin = {
            username: 'admin',
            password: 'admin123', // Change this to your desired password
            role: 'administrator',
            createdAt: new Date()
        };

        await db.collection('admins').insertOne(admin);
        console.log('Admin user created successfully!');
        console.log('Username: admin');
        console.log('Password: admin123');
        console.log('Please change the password in MongoDB after first login.');
    } catch (error) {
        console.error('Error initializing admin:', error);
    } finally {
        await client.close();
    }
}

initAdmin();

