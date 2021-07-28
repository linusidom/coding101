import classes from './Button.module.css'

export default function Button(props) {


  return (
    <button className={`${classes.button} ${props.className}`} onClick={props.onClick} type={props.type}>{props.children}</button>
  );
}
