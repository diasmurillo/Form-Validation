
import { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'

function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault()

    const newError = {}

    if (email.trim() === '') 
      newError.email = "Email is required"

    if (password.trim() === '') 
      newError.password = "Password is required"
    
    setError(newError)
  }
  
  return (
    <>
      <section>
        <h1>Login</h1>

        <form onSubmit={handleSubmit} noValidate>

          <label htmlFor="email" aria-invalid={!!error.email} aria-describedby={error.email ? "email-error" : undefined}>Email</label>
          <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'/>
          {error.email && <p id='email-error' className='error' role='alert'>{error.email}</p>}

          <label htmlFor="password"  aria-invalid={!!error.password} aria-describedby={error.password ? "password-error" : undefined}>Password</label>
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'/>
          {error.password && <p id='password-error' className='error' role='alert'>{error.password}</p>}

          <button type='submit'>Sign In</button>
        </form>

        <p className='bottom-p'>Don't have an account <Link to="/"> <button>Sign Up</button> </Link></p>
      </section>
    </>
  )

}

export default SignUp
