
import { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

function SignIn() {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobilePhone, setMobilePhone] = useState('')
  const [password, setPassword] = useState('')
  const [sentForm, setSentForm] = useState(false)
  const [error, setError] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault()

    const newError = {}
    let isValid = true

    if (fullName.trim() === '') {
      newError.fullName = "Full name is required"
      isValid = false
    }

    if (email.trim() === '') {
      newError.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Email is invalid and must have @ ."
      isValid = false
    }

    if (mobilePhone.trim() === '') {
      newError.mobilePhone = "Mobile phone is required"
      isValid = false
    } else if (!/^\d+$/.test(mobilePhone)) {
      isValid = false
      newError.mobilePhone = "Phone number must contain only numbers"
    } else if (mobilePhone.length !== 9) {
      newError.mobilePhone = "Mobile Phone must be 9 characters"
      isValid = false
    }

    if (password.trim() === '') {
      newError.password = "Password is required"
      isValid = false
    } else if (password.length < 8) {
      newError.password = "Password must be at least 8 characters"
      isValid = false
    }

    setError(newError)
    if (isValid) {
      setFullName('')
      setEmail('')
      setMobilePhone('')
      setPassword('')
      setSentForm(true)       
    }  

    setTimeout(() => {
      if (isValid) 
        setSentForm(false)
    }, 3000)
  }
 
  
  return (
    <>
      <section>
        <h1>Create Account</h1>
        <p className='top-p'>It's free and easy to set up!</p>

        <form onSubmit={handleSubmit} noValidate>

          <label htmlFor="fullName" aria-invalid={!!error.fullName} aria-describedby={error.fullName ? "fullName-error" : undefined}>Full Name</label>
          <input type="text" id='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Enter your full name'/>
          {error.fullName && <p id='fullName-error' className="error" role='alert'>{error.fullName}</p>}

          <label htmlFor="email" aria-invalid={!!error.email} aria-describedby={error.email ? "email-error" : undefined}>Email</label>
          <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'/>
          {error.email && <p id='email-error' className='error' role='alert'>{error.email}</p>}

          <label htmlFor="mobilePhone" aria-invalid={!!error.mobilePhone} aria-describedby={error.mobilePhone ? "mobilePhone-error" : undefined}>Mobile Phone</label>
          <input type="tel" id='mobilePhone' value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)} placeholder='Enter your phone number'/>
          {error.mobilePhone && <p id='mobilePhone-error' className='error' role='alert'>{error.mobilePhone}</p>}

          <label htmlFor="password"  aria-invalid={!!error.password} aria-describedby={error.password ? "password-error" : undefined}>Password</label>
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'/>
          {error.password && <p id='password-error' className='error' role='alert'>{error.password}</p>}

          <button type='submit'>Sign Up</button>
          {sentForm && <p className='success' role='status'>Form succesfully completed</p>}
        </form>

        <p className='sign-up'>Already have an account? <Link to="/signin"> <button>Sign In</button> </Link></p>
      </section>
    </>
  )

}

export default SignIn
