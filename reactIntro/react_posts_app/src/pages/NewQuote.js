import { useHistory } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";


export default function NewQuote() {

    const history = useHistory()

    // console.log(history)

    function addQuote(quote){
        console.log(quote)

        history.push('/quotes')
    }

    return (
    <>
        <h1>New Quote</h1>
        <QuoteForm addQuote={addQuote}/>
    </>
    );
  }
  