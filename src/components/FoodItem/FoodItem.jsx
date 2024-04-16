import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = (props) => {

   
   const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


    return (
        <div className='food_item' id={props.id}>
            <div className="food_item_img_container">
                <img className='food_item_img' src={props.img} alt="" />
                {
                    !cartItems[props.id]
                    ?<img className='add' onClick={()=>addToCart(props.id)} src={assets.add_icon_white} alt="" />
                    : <div className='food_item_counter'>
                          <img src={assets.remove_icon_red} onClick={()=>removeFromCart(props.id)} alt="" />
                          <p>{cartItems[props.id]}</p>
                          <img src={assets.add_icon_green} onClick={()=>addToCart(props.id)} alt="" />
                    </div>
                }
            </div>

            <div className='food_item_info'>

                <div className="food_item_name_rating">
                    <p>{props.name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>

                <div className='food_item_desc'>{props.description}</div>
                <div className='food_item_price'>${props.price}</div>
            </div>


        </div>
    )
}

export default FoodItem
