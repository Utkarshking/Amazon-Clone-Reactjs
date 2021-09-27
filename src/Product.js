import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product({id,title,image,price,rating}){
    const [state,dispatch]=useStateValue();
const addtoBasket=()=>{
  //dispatch the item into the data layer
  dispatch({
    type: 'ADD_TO_BASKET',
    item : {
        id:id,
        title: title,
        image :image,
        price :price,
        rating: rating,
    },
  });
};
function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.ratings).fill(1).map((el,i)=>(
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img
        src={props.image}
        alt="lean startup book img"
      />
      <button onClick={addtoBasket}>Add to basket</button>
    </div>
  );
}
}
export default Product;
