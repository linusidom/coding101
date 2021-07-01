import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import {Container, Button} from 'react-bootstrap'
import Huggy from './assets/huggypuddles.mp4'
import './index.css'

function App() {

  const [displayText, setDisplayText] = useState('')
  const [displayGIF, setDisplayGIF] = useState(false)

  useEffect(() => {
    setDisplayGIF(false)
    let curIndex = -1
    const phrases = ['Meep','' ,'Meep','', 'MEEEEEEEEEEEEP','', 'This is HuggyPuddles!!']

    let colorIndex = -1
    const colors = ['#0A1045', '#00C2D1', '#56E39F', '#F6AF65', '#ED33B9']

    const intervalPhrase = setInterval(() => {
      curIndex++
      if(curIndex === phrases.length){
        clearInterval(intervalPhrase)
        setDisplayGIF(true)
        setDisplayText(phrases[phrases.length - 1])
      }
      else{
        setDisplayText(phrases[curIndex])
      }

    }, 2000);

    const intervalBG = setInterval(() => {
      colorIndex++
      document.body.style.background = colors[colorIndex]
      if(colorIndex === colors.length){
        colorIndex = 0;
      }
    }, 3000)

  }, []);


  

  return (
    
    
    <Container style={{margin: '100px auto 0 auto'}}>

    <h1 className='text-center my-5 text-white'>{displayText}</h1>
    
    {displayGIF && <video src={Huggy} type="video/mp4" width="100%" autoPlay loop controls></video>}

    </Container>
    
  );
}

export default App;
