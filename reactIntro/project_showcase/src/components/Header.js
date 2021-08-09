import classes from './Header.module.css'

export default function Header(props){
    return(
        <div className={classes.header}>
            <h1 className={classes.logo}>SpotSkillz</h1>
        </div>
    )
}