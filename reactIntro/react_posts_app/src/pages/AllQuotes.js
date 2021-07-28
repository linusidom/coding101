import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Quotes from "../components/Quotes";
import Button from "../UI/Button";

export default function AllQuotes() {


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


    const [quotes, setQuotes] = useState(DUMMY_DATA)

    function sortQuotes(quoteList, asc){
      return quoteList.sort((A, B) => {
        
        // Ascending Order
        if(asc){
          return A.id > B.id ? 1 : -1;
        }

        // Descending Order
        else{
          return A.id < B.id ? 1 : -1;
        }
      })
    }


    // Change the URL to append parameters
    const history = useHistory()

    // Get the parameters
    const location = useLocation()

    // Parse the results
    const locationSearch = new URLSearchParams(location.search)

    // extract the parsed results
    const searchParams = locationSearch.get('sort')

    // Check if it is ascending or not
    const isSortAsc = searchParams === 'asc'

    const sortedQuotes = sortQuotes(quotes, isSortAsc)

    function sortHandler(){
      history.push('/quotes?sort=' + (isSortAsc ? 'desc' : 'asc'))
    }

    return (
      <>
      <h1>All Quotes</h1>
      <Button onClick={sortHandler}>Sort {isSortAsc ? 'Descending' : 'Ascending'}</Button>
      <Quotes quotes={sortedQuotes} />
      </>
    );
}
