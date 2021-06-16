import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import {Container, Spinner} from 'react-bootstrap'
import './index.css'
import Tours from './components/Tours'

function App() {


  // Is designed to be called only once
  // Based on it's dependency, the empty array at the end
  // This is where useEffect looks for changes
  useEffect(() => {
    getTours()
  },[])

  function getTours(){
    setIsLoading(true)
    const url = 'https://course-api.com/react-tours-project'
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setIsLoading(false)
      setTours(data)
    })
  }

  // If we call it this way, we get an infinite Loop!
  // getTours()

  const [tours, setTours] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  function deleteTour(tourID){
    setTours(prevTours => prevTours.filter((tour) => tour.id !== tourID ))
  }


  return (

    <>
    {isLoading ? 

      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
      :
      <Container>
      <h1 className='text-center title'>Our Tours</h1>
      <div className='line'></div>
      {tours.length < 1 && <div className='text-center'>
        <button className='refreshButton' onClick={getTours}>Refresh</button>
      </div>}
      <Tours tours={tours} deleteTour={deleteTour}/>
    </Container>}
    </>
  );
}

export default App;
