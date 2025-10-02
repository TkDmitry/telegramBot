import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import StartPage from './pages/StartPage';
import ProfilePage from './pages/ProfilePage';
import SocionicsModule from './pages/SocionicsModule';
import SocionicsTest from './pages/SocionicsTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout active="home">
              <StartPage />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout active="profile">
              <ProfilePage />
            </Layout>
          }
        />
        <Route
          path="/socionics"
          element={
            <Layout active="socionics">
              <SocionicsModule />
            </Layout>
          }
        />
        <Route
          path="/socionics/test"
          element={
            <Layout active="socionics">
              <SocionicsTest />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
