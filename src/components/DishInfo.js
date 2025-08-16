import React from 'react'

const DishInfo = (props) => {
  return (
        <div className="bg-orange-100 hover:bg-orange-300 m-3 p-3 h-[500px] w-80 rounded-lg">
            {/* <img className="border-solid border-yellow-500 h-60 w-80 rounded-lg" src={url} alt="res-image" /> */}
            <h3 className="font-bold text-lg text-pretty m-3">{props.name}</h3>
            <h5 className="font-bold text-lg text-pretty m-3">Rs-{props.price/100}</h5>
        </div>
  )
}

export default DishInfo
