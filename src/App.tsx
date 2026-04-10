/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import ServicePage from './pages/ServicePage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import ThankYou from './pages/ThankYou';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/:slug" element={<ServicePage />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/service-area/:citySlug" element={<ServiceAreaPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

