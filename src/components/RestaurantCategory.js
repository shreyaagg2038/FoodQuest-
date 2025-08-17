import React from 'react'

const RestaurantCategory = ({data}) => {
  return (
    <div>
    <div className="w-6/12 bg-gray-100 shadow-lg p-4 flex justify-between m-auto mt-2 mb-2 ">
      <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
      <span>🔽 </span>
    </div>
    </div>
  )
}

export default RestaurantCategory
