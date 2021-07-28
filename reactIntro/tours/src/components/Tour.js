import { useState } from 'react'
import {Card, Row, Col} from 'react-bootstrap'

export default function Tour({tour, deleteTour}){
    
    // console.log(tour)
    const [showMoreLess, setShowMoreLess] = useState(false)

    return(
        <Card className='my-4 shadow' key={tour.id}>
          <Card.Header className='p-0'>
            <img src={tour.image} alt='test'></img>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col><p>{tour.name}</p></Col>
              <Col><p>{tour.price}</p></Col>
            </Row>
            <p>
              {showMoreLess ? tour.info : tour.info.substring(0,100)}
              <button className='showMoreLessButton' onClick={() => setShowMoreLess(!showMoreLess)}>{showMoreLess ? 'show less' : 'show more'}</button>
            </p>
            <div className='text-center'>
            <button className='notInterested' onClick={() => deleteTour(tour.id)}>Not Interested</button>
            </div>
          </Card.Body>
        </Card>)
}