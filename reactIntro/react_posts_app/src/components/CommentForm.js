import { useRef, useState } from 'react';
import Card from '../UI/Card';
import classes from './CommentForm.module.css'
import Button from '../UI/Button'

export default function CommentForm(props) {

    const text = useRef()

    function onSubmitHandler(e){
        e.preventDefault()
        if(text.current.value !== ''){
            
            const newComment = {
                id: new Date().getTime().toString(),
                text: text.current.value,
            }

            props.addComment(newComment)
        }

    }

    return (
        <Card>
            <form onSubmit={onSubmitHandler}>
                <textarea className={`${classes.input} ${classes.textarea}`} id='commentForm' rows='10' cols='70' ref={text}></textarea>
                <Button type='submit'>Submit Comment</Button>            
            </form>
        </Card>
    );
  }
  