import { useState } from "react";
import Loader from "./globals/elements/loader";
import ScrollToTop from "./globals/scroll-to-top";
import RootLayout from "./layouts/root-layout";
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <AuthProvider>
      {isLoading && <Loader />}
      <ScrollToTop />
      <RootLayout />
    </AuthProvider>
  );
}

export default App;
