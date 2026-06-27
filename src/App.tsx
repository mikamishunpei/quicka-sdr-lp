import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Clinic from './pages/Clinic';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Legal from './pages/Legal';
import ZoomGuide from './pages/ZoomGuide';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clinic />} />
        <Route path="/clinic" element={<Navigate to="/" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/zoom-guide" element={<ZoomGuide />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
