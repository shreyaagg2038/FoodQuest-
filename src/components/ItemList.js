import { div } from 'framer-motion/client';
import React from 'react'

const ItemList = ({items}) => {
    console.log({items});
  return (
    <div className="m-4 p-4">
      {items.map((item)=>{
        return (
            <div className="text-left m-4 p-4 border-b-4 w-12/12 bg-white rounded-lg" key={item.card.info.id}>
                <div className='flex justify-between'>
                <div>{item.card.info.name}</div>
                <img className="w-20 rounded-lg"src = {`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}.JPG`}></img>
                </div>
                <div>Rs-{item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                
            </div>
        )
      })}
    </div>
  )
}

export default ItemList
