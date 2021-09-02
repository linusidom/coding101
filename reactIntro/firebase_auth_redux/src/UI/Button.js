import css from './Button.module.css'

export const Button = (props) => {
    
    const {children, className, ...otherProps} = props
    
    return(
        <button className={`${className} ${css.button}`} {...otherProps}>{children}</button>
    )
}