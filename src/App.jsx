import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./CommenComponets/Navbar";
import Footer from "./CommenComponets/Footer";
import "./index.css";

import ScrollToTop from "./CommenComponets/ScrollToTop";
import ScrollNavigator from "./CommenComponets/ScrollNavigator";
import Loader from "./CommenComponets/Loader";
import FloatingActions from "./CommenComponets/FloatingActions";
import TopHeader from "./CommenComponets/TopHeader";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);

    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col min-h-screen"
      >
        <TopHeader />
        <Navbar />

        <ScrollToTop />
        <ScrollNavigator />
        <main className="flex-grow relative">
          <Outlet />
        </main>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <Footer />
        </motion.div>

        <FloatingActions />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
