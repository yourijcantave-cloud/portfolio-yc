import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import CustomCursor from './components/CustomCursor';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <CustomCursor />
        <AnimatePresence mode="wait">
          {!introComplete ? (
            <Intro key="intro" onComplete={() => setIntroComplete(true)} />
          ) : (
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/gallery/:category" element={<GalleryPage />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          )}
        </AnimatePresence>
      </Router>
    </LanguageProvider>
  );
};

export default App;
