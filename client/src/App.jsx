import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Hospitals from './pages/Dashboard/Hospitals';
import OrgnisationPage from './pages/Dashboard/OrgnisationPage';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytics';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
      <Route path='/analytics' element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
      <Route path='/donation' element={
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>
        } />
      <Route path='/consumer' element={
          <ProtectedRoute>
            <Consumer />
          </ProtectedRoute>
        } />
      <Route path='/orgnaisation' element={
          <ProtectedRoute>
            <OrgnisationPage />
          </ProtectedRoute>
        } />
      <Route path='/hospital' element={
          <ProtectedRoute>
            <Hospitals />
          </ProtectedRoute>
        } />
      <Route path='/donar' element={
          <ProtectedRoute>
            <Donar />
          </ProtectedRoute>
        } />
        <Route path='/' element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>} />
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>} />
      </Routes>
    </>
  )
}

export default App
