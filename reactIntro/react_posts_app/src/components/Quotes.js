import QuoteItem from './QuoteItem'

export default function Quotes(props) {


  return props.quotes.map((quote)=> <QuoteItem key={quote.id} quote={quote}/>)
}
