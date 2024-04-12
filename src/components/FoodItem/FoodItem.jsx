import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
const FoodItem = (props) => {

   const [itemCount,SetItemCount] = useState(0);


    return (
        <div className='food_item' id={props.id}>
            <div className="food_item_img_container">
                <img className='food_item_img' src={props.img} alt="" />
                {
                    !itemCount
                    ?<img className='add' onClick={()=>SetItemCount(itemCount+1)} src={assets.add_icon_white} alt="" />
                    : <div className='food_item_counter'>
                          <img src={assets.remove_icon_red} onClick={()=>SetItemCount(itemCount-1)} alt="" />
                          <p>{itemCount}</p>
                          <img src={assets.add_icon_green} onClick={()=>SetItemCount(itemCount+1)} alt="" />
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
