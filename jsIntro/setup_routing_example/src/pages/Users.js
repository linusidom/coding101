import data from '../store/data'
import {Link} from 'react-router-dom'
export default function Users() {

  // console.log(data)

  return (
    <>
    <h2>Users</h2>
    {data.map((user) => <li key={user.id}><Link to={`/userDetail/${user.id}`} >{user.name}</Link></li>)}
    </>
  );
}