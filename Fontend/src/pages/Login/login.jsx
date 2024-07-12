/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";


function Login() {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const { login } = useLogin()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(formData);
      if (success) {
        console.log('Login successful!');
      } else {
        console.log('Login failed!');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='w-96 h-auto rounded-sm bg-white px-6 py-5'>
      <h1 className='text-center w-full my-9 font-bold text-4xl'>LOGIN</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          className="input input-bordered w-full mb-5"
          value={formData.userName}
          onChange={e => setFormData({ ...formData, userName: e.target.value })}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input input-bordered w-full mb-2"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <Link to='/signup' className="underline text-sky-500 self-start text-sm">Don't have an account?</Link>
        <button 
          type="submit"
          className="btn btn-active btn-neutral px-6 block align-middle my-6 text-lg mx-auto"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
