import { useState } from 'react';
import classes from './Comments.module.css'
import CommentForm from './CommentForm'
import Button from '../UI/Button';
import Card from '../UI/Card';

export default function Comments() {

    const [showAddCommentForm, setShowAddCommentForm] = useState(false)
    const [comments, setComments] = useState([])

    function addCommentHandler(comment){
        setShowAddCommentForm(false)
        setComments(prevComments => prevComments.concat(comment))
    }

    return (
        <div className={classes.commentSection}>
            <h1 className={classes.commentTitle}>User Comments</h1>
            {!showAddCommentForm && <Button onClick={() => setShowAddCommentForm(true)}>Add Comments</Button>}
            {showAddCommentForm && <CommentForm addComment={addCommentHandler}/>}
            {comments.length > 0 ? comments.map((comment) => <Card key={comment.id} className={classes.commentCard}><p  className={classes.commentText}>{comment.text}</p></Card>)
            : <p>No Comments</p>}
        </div>
    );
  }
  