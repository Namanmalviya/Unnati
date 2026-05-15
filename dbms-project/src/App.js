import Navigation from './pages/Navigation'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Jobs from './pages/Jobs'
import Schemes from './pages/Schemes'
import Organizations from './pages/Organizations'
import Competitions from './pages/Competitions'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Complain from './pages/complain'
import Form from './pages/Form'
import Description from './pages/description'
import Update from './pages/update'
import Register from './pages/Register'
import Dashboard from './company dashboard/dashboard'
import Companyprofile from './company dashboard/companyprofile'
import Postjob from './company dashboard/postjob'
import Postngo from './company dashboard/postngo'
import Postschemes from './company dashboard/postschemes'
import Postcompetition from './company dashboard/postcompetition'
import {BrowserRouter,Route,Routes,useLocation} from 'react-router-dom'
import { SearchProvider } from './pages/searchcontext'
import Applicants  from './company dashboard/applicants'
import Viewapplicants  from './company dashboard/viewapplicant'
import AdminDashboard from './admin dashboard/admindashboard'
import Details from './admin dashboard/details'
import Chatai from './pages/chat'
import { db } from './pages/sos'; // adjust path if your file is in src/

// then use db to add documents

import './App.css';

function AppContent() {
  const location = useLocation();

  // 🔒 Routes where navigation should be hidden
  const hideNavRoutes = [
    "/login",
    "/signup",
    "/register",
    "/form",
    "/postjob",
    "/update",
    "/complain",
    "/applicants",
    "/view-application",
    "/company-dashboard",
    '/admin-dashboard',
    '/details',
    '/description',
    '/chat',
    '/companyprofile'
  ];

  // Check if current route matches any path above
  const hideNavigation = hideNavRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavigation && <Navigation />}

      <Routes>
        {/* Auth & Registration */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chatai />} />

        {/* Main Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/profile" element={<Profile />} />
            

        {/* Company / Admin Area */}
        <Route path="/company-dashboard" element={<Dashboard />} />
        <Route path="/postjob" element={<Postjob />} />
        <Route path="/update" element={<Update />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/description" element={<Description />} />
        <Route path="/applicants" element={<Applicants />} />
        <Route path="/view-application" element={<Viewapplicants />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/details" element={<Details />} />
        <Route path="/companyprofile" element={<Companyprofile />} />

        {/* NGO / Posting Pages */}
        <Route path="/postngo" element={<Postngo />} />
        <Route path="/postschemes" element={<Postschemes />} />
        <Route path="/postcompetition" element={<Postcompetition />} />

        {/* Generic Form */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <AppContent />
      </SearchProvider>
    </BrowserRouter>
  );
}