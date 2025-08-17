import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react';

const RestaurantCategory = ({data}) => {

    const [showItems,setShowItems] = useState(false);

  const handleClick =()=>{
    setShowItems(!showItems);
  }
  return (
    <div>
    <div className="w-6/12 bg-gray-100 shadow-lg p-4  m-auto mt-2 mb-2 border-black">
    <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
      <span className='font-bold text-lg ' >{data.title}({data.itemCards.length})</span>
      <span>🔽 </span>
    </div>
    {showItems && <ItemList items={data.itemCards}/>}
    </div>

    </div>
  )
}

export default RestaurantCategory
