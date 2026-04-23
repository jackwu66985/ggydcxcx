/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import SustainableFurniture from './pages/SustainableFurniture';
import SmartHomeHub from './pages/SmartHomeHub';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project/vertical-reading-pod" element={<ProjectDetail />} />
        <Route path="/project/sustainable-furniture" element={<SustainableFurniture />} />
        <Route path="/project/smart-home-center" element={<SmartHomeHub />} />
      </Routes>
    </Router>
  );
}
