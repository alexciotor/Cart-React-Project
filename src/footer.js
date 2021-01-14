const Footer = ({state})=>{
    return (
        <div className="foot-cont">
        <div className="total">
        <h4>Total</h4>
        <h4>${state.price}</h4>
        </div>
        <div className="cart-btn">
        <button className="btn2">Clear Cart</button>
        </div>
        </div>
    )
}


export default Footer