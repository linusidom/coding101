import { useRef, useState } from 'react'
import { Prompt } from 'react-router-dom'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './QuoteForm.module.css'

export default function QuoteForm(props) {

    const [isEntering, setIsEntering] = useState(false)

    const text = useRef()
    const author = useRef()

    // const history = useHistory()

    function onClickHandler(){
        setIsEntering(false)
    }

    function onFocusHandler(){
        setIsEntering(true)
    }

    function onSubmitHandler(e){
        e.preventDefault()
        if(text.current.value !== '' && author.current.value !== ''){
            console.log('submitted')

            const newQuote = {
                id: new Date().getTime().toString(),
                text:text.current.value,
                author:author.current.value

            }
            props.addQuote(newQuote)

        }
    }

    return(
        <Card>
            <Prompt when={isEntering} message={(location) => `${location.pathname} Are you sure you want to leave?`}/>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.inputGroup}>
                    <label className={classes.label} htmlFor='author'>Author</label>
                    <input onFocus={onFocusHandler} className={classes.input} type='text' ref={author} id='author'/>
                </div>
                <div className={classes.inputGroup}>
                    <label className={classes.label} htmlFor='text'>Text</label>
                    <textarea onFocus={onFocusHandler} className={`${classes.input} ${classes.textarea}`} ref={text} id='text' rows='10' cols='70'></textarea>
                </div>

                <Button className={classes.buttonSubmit} type='submit' onClick={onClickHandler}>Submit</Button>
            </form>
        </Card>
    )

  
}
