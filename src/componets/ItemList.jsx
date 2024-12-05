import React, { useState } from 'react'
import { IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {

  const dispatch = useDispatch();
  const handleAddItems = (item) =>{
      dispatch(addItem(item));
  }
    
  return (
    <div>
      {items.map((item,i)=>(
        <div data-testid = 'foodItems' key={item.card.info.id} className='border-b-2 pb-4 border-red-400 mb-4 flex justify-between'>
            <div className='w-9/12 pr-2 flex flex-col gap-4'>
                <span className='text-[#02060CBF] font-bold text-[19px]'>{item.card.info.name}</span>
                <span className='text-[#dd5b1e] font-[500] dark:text-red-700'>Rs: {(item.card.info.price)/100}</span>
                <p className='text-[rgba(2, 6, 12, 0.6)] text-[16px] dark:text-teal-950'>
                    {item.card.info.description}
                </p>
            </div>
            <div className='w-3/12 p-2 flex flex-col relative items-center dark:bg-gray-200'>
                <img className='w-[100%] h-[150px] rounded-lg' src={IMG_URL+item.card.info.imageId} alt="foods" />
                <button className='border-gray-400 border 
                w-24 rounded-md absolute bottom-[-10px] text-center  dark:bg-gray-200
                 dark:text-gray-500 p-2 bg-gray-500 text-white font-bold' onClick={()=>handleAddItems(item)}>Add</button>
            </div>
        </div>
      )) }
    </div>
  )
}

export default ItemList;
