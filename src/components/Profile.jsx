import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'

const Profile = () =>
{
  const { user, isAuthenticated } = useAuth0()
  return (
    isAuthenticated &&
    <div>
      {/* {JSON.stringify(user)} */}
      <img src={user.picture} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.email}</p>
      <JSONPretty data={user} />
      {/* <pre>{JSON.stringify(user)}</pre> */}
    </div>
  )
}

export default Profile
