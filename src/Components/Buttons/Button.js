
import './Button-styles.scss';



const Button_type_Classes = {
    google: 'google-sign-in',
    inverted: 'inverted',
    custom: 'rohan',
}



const Button = ({children , buttonType, ...otherProps})=>{
    return(
        <button className={`button-container ${Button_type_Classes[buttonType]}`}
        {...otherProps}
        >{children}</button>
    )
}
export default Button;