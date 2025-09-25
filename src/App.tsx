import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  Dashboard,
  Consultation,
  HealthTracker,
  HealthAssessment,
  Profile,
  About
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="tracker" element={<HealthTracker />} />
          <Route path="assessment" element={<HealthAssessment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
