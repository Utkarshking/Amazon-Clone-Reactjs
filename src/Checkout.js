import React from"react"
import "./Checkout.css"
import Subtotal from "./Subtotal"
function Checkout(){
    return(
        <div className="Checkout">
            <div className="Checkout__left">
                <img className="Checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21/T2/SABS/SABS_PC.jpg"
                alt="" />
                <div>
                    <h2 className="Checkout_Title">
                        Your Shopping Basket
                    </h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    </div> 
            </div>
            <div className="Checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}
export default Checkout;