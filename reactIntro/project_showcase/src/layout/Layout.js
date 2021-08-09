import Footer from "../components/Footer";
import Header from "../components/Header";
import classes from './Layout.module.css'

export default function Layout(props){
    return(
        <div>
            <Header/>
            <div className={classes.container}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}