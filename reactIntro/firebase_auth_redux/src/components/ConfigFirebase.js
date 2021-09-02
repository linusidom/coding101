import { Card } from "../UI/Card"
import { Link } from "react-router-dom"
export const ConfigFirebase = () => {
    return(
        <Card>
            <h1>This app won't work from Netlify because the backend Fireabase project has been removed</h1>
            <br/>
            <p>If you want to watch how to make this, please visit <Link to='/'>YouTube</Link></p>
            <p>If you want the GitHub Source code for this project, please visit <Link to='/'>GitHub</Link></p>
        </Card>
    )
}