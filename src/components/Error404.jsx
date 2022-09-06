import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='notFound'>
      <div>
      <h2>error 404</h2>
      <h3>page not found</h3>
      <Link to={"/"}><h2>Back home</h2></Link>
      </div>
    </div>
  );
}
