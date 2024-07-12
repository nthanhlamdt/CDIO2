import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/Signup/Signup'
import Login from './pages/Login/login'
import Home from './pages/home/home'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/authContext';
import './App.css'
function App() {
  // eslint-disable-next-line no-unused-vars, no-undef
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center h-screen bg-zinc-700'>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/login'/>} />
        <Route path='/signup' element={authUser ? <Navigate to='/'/> : <SignUp />} />
        <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
