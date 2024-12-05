import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';

// Restaurant Catergory -  Accordian from Scratch

const RestaurantCatergoryMaual = ({category,showItems,setShowIndex}) => {
   
   
  const handleIndex = ()=>{
    
    setShowIndex();
  }

  return (
    <div className='bg-white dark:bg-yellow-300 dark:text-orange-700'>
      <div className=' shadow-lg rounded px-4 py-2 my-3'>
        <div className='flex justify-between dark:text-rose-600 font-bold cursor-pointer text-[20px]' onClick={handleIndex}>
            <span>{category.title} ({category.itemCards.length})</span>
            <span>{showItems?<FontAwesomeIcon icon={faAngleUp}/> :<FontAwesomeIcon icon={faAngleDown}/> }</span>
        </div>
        <div className='mt-4'>{showItems && <ItemList items={category.itemCards}/>}</div>
      </div>
      
    </div>
  )
}

export default RestaurantCatergoryMaual;
