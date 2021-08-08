import { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './PostForm.module.css'
export default function PostForm(props){

    const title = useRef()
    const body = useRef()

    function onSubmitHandler(e){
        e.preventDefault()
        let textTitle = title.current.value
        let textBody = body.current.value
        props.addPost({
            title: textTitle,
            body: textBody
        })


    }

    return(
        <Card>
            <form onSubmit={onSubmitHandler}>
                <input className={classes.formInput} type='text' placeholder='Enter Title' ref={title}/>
                <textarea className={classes.formTextArea} type='text' placeholder='Enter Body' ref={body} rows='10' cols='70'></textarea>
                <Button type='submit'>Submit</Button>
            </form>
        </Card>
    )


}