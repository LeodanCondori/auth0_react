import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import { useAuth0 } from "@auth0/auth0-react"

// import { useAuth0 } from '@auth0/auth0-react'

function App()
{
  // const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0()

  // console.log(isLoading);
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className='App'>
      <h1>Application</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
      {/* <button onClick={() => loginWithRedirect()}>Login</button> */}

    </div>
  )
}

export default App
