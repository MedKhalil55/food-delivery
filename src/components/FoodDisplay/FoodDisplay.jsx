import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);

  return (
    <div className='food_display' id='food_display'> 
      <h2>Top dishes near you</h2>
      <div className="food_display_list">
        {food_list.map((item,index)=>{
            return(
                <FoodItem key={index} id={item._id} img={item.image} name={item.name} description={item.description} price={item.price} />
            )

        })}
      </div>


      
    </div>
  )
}

export default FoodDisplay
