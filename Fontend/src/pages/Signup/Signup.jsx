import CheckBox from "./Checkbox"
import { useState } from "react"
import { Link } from "react-router-dom"
import useSignup from "../../hooks/useSignup"

function Signup() {
  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [dataSignUp, setDataSignUp] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { signup } = useSignup()
  const handleCheckboxGender = (gender) => {
    setDataSignUp({ ...dataSignUp, gender: gender })
  }

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      const success = await signup(dataSignUp);
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
    <div className=' w-96 h-auto rounded-sm bg-white px-6'>
      <h1 className='text-center w-full my-9 font-bold text-4xl' >SIGN UP</h1>
      <form onSubmit={handleSubmitSignup}>
        <div className="flex w-full space-x-4 mb-5 justify-between">
          <input
            type="text"
            placeholder="First Name"
            className='input input-bordered w-40'
            value={dataSignUp.firstName}
            onChange={
              e => {
                setDataSignUp({ ...dataSignUp, firstName: e.target.value })
              }
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-40"
            value={dataSignUp.lastName}
            onChange={
              e => {
                setDataSignUp({ ...dataSignUp, lastName: e.target.value })
              }
            }
          />
        </div>

        <input
          type="text"
          placeholder="Phone Number"
          className='input input-bordered w-full mb-5'
          value={dataSignUp.phoneNumber}
          onChange={
            e => {
              setDataSignUp({ ...dataSignUp, phoneNumber: e.target.value })
            }
          }
        />
        <input
          type="text"
          placeholder="Username"
          className='input input-bordered w-full mb-5'
          value={dataSignUp.userName}
          onChange={
            e => {
              setDataSignUp({ ...dataSignUp, userName: e.target.value })
            }
          }
        />
        <input
          type="password"
          placeholder="Password"
          className='input input-bordered w-full mb-5'
          value={dataSignUp.password}
          onChange={
            e => {
              setDataSignUp({ ...dataSignUp, password: e.target.value })
            }
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className='input input-bordered w-full mb-1'
          value={dataSignUp.confirmPassword}
          onChange={
            e => {
              setDataSignUp({ ...dataSignUp, confirmPassword: e.target.value })
            }
          }
        />
        <CheckBox selectGender={handleCheckboxGender} getGender={dataSignUp.gender} />
        <Link to='/login' className="underline text-sky-500 self-start text-sm">Already have an account?</Link>
        <button className='btn btn-active btn-neutral block align-middle my-6 text-lg mx-auto'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
