import React, { useState, createContext, useContext } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import LegalProcess from './pages/LegalProcess';
import Consultation from './pages/Consultation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

/* =========================
   Toast Context
========================= */

type ToastType = 'success' | 'info';

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

/* =========================
   App Component
========================= */

const App: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <HelmetProvider>
      <ToastContext.Provider value={{ showToast }}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/process" element={<LegalProcess />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>

          {/* =========================
              Global Toast
          ========================= */}
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 50, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: 20, x: '-50%' }}
                className="fixed bottom-10 left-1/2 z-[300] w-max max-w-[90vw]"
              >
                <div
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border ${
                    toast.type === 'success'
                      ? 'bg-white border-green-100 text-slate-900'
                      : 'bg-[#0a1128] border-white/10 text-white'
                  }`}
                >
                  {toast.type === 'success' ? (
                    <CheckCircle2 className="text-green-500" size={20} />
                  ) : (
                    <Info className="text-[#c5a059]" size={20} />
                  )}

                  <p className="text-sm font-bold uppercase tracking-wider">
                    {toast.message}
                  </p>

                  <button
                    onClick={() => setToast(null)}
                    className="ml-2 opacity-50 hover:opacity-100"
                  >
                    <X size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Router>
      </ToastContext.Provider>
    </HelmetProvider>
  );
};

export default App;
