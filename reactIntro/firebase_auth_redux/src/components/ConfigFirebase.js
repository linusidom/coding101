import { Card } from "../UI/Card"
import { Link } from "react-router-dom"
export const ConfigFirebase = () => {
    return(
        <Card>
            <h4>This app won't work from Netlify because the backend Fireabase project has been removed</h4>
            <br/>
            <p>If you want to watch how to make this, please visit <Link to={{pathname: 'https://www.youtube.com/watch?v=sXxDRDaNmFc'}} target="_blank">YouTube</Link></p>
            <p>If you want the GitHub Source code for this project, please visit <Link to={{pathname: 'https://github.com/linusidom/coding101/tree/main/reactIntro/firebase_auth_redux'}} target='_blank'>GitHub</Link></p>
        </Card>
    )
}