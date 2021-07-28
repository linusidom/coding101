import { useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/Comments";
import QuoteItem from "../components/QuoteItem";


export default function QuoteDetail() {

    const params = useParams()
    
    
    const DUMMY_DATA = [
        {
            id: 1,
            text:'This is great',
            author:'Mark Twain'
        },
        {
            id: 2,
            text:'This is awesome',
            author:'Shakespeare'
        },
    ]


    const quote = DUMMY_DATA.find((quote) => quote.id === parseInt(params.quoteID))

    const [showCommentButton, setShowCommentButton] = useState(true)



    return (
      <>
        <h1>Quote Detail</h1>
        {/* <h3>{params.quoteID}</h3> */}
        {quote ? <QuoteItem quote={quote}/> : 'No Quote Found'}
        <Route path={`/quotes/${params.quoteID}`} exact>
            <div className='showCommentButton'>
                <Link className='button' to={`/quotes/${params.quoteID}/comments`} >Show Comments</Link> 
            </div>  
        </Route>
            
        <Route path={`/quotes/${params.quoteID}/comments`}>
            <Comments/>
        </Route>
    </>
    );
  }
  