import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import { IMG_URL } from '../utils/constants';
import { useState } from "react";


const Cart = () =>{

    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)
    // console.log(items)

    const handleClear = () =>{
        dispatch(clearItem())
    }
    const handleQuantity = (action) => {
        if (action ==='inc'){
            console.log('inc callled')
            setQuantity((prev) => prev+1);
        } else{
            console.log('dec callled')
            if(quantity>0){
                setQuantity((prev)=>prev-1)
            }else{
                setQuantity(0);
            }
        }
    }

    return (
        <div className="w-6/12 h-min-[600px] pb-2 m-auto">
            <div className="flex justify-between">
            <h1 className="text-center text-[32px] text-red-500 font-bold m-4">
                Shopping Basket
            </h1>
            <button className="border font-bold text-white rounded-md p-2 bg-gray-400 m-4" onClick={handleClear}>
                Clear Cart
            </button>
            </div>
           
            <div className="border-2 p-4 rounded-lg mb-3 border-gray-500">
            {items.map((item,i)=>(
        <div data-testid = 'cartItems' key={i} className='border-b-2 pb-4 border-red-400 mb-4 flex justify-between'>
            <div className='w-9/12 pr-2 flex flex-col gap-4'>
                <span className='text-[#02060CBF] font-bold text-[19px]'>{item.card.info.name}</span>
                <span className='text-[#dd5b1e] font-[500] dark:text-red-700'>Rs: {(item.card.info.price )/100}</span>
                <p className='text-[rgba(2, 6, 12, 0.6)] text-[16px] dark:text-teal-950'>
                    {item.card.info.description}
                </p>
                <div className="border-2 flex items-center gap-4 font-bold px-4 border-yellow-400 rounded-2xl w-[100px]">
                <button className="text-[20px]" onClick={()=>handleQuantity('dec')}>-</button>
                <span data-testid = 'qty' className="text-[14px]">{quantity}</span>
                <button className="text-[20px]" onClick={()=>handleQuantity('inc')}>+</button>
                </div>
               
            </div>
            <div className='w-3/12 p-2 flex flex-col relative items-center dark:bg-gray-200'>
                <img className='w-[100%] h-[150px] rounded-lg' src={IMG_URL+item.card.info.imageId} alt="foods" />
               
            </div>
        </div>
      )) }
                <div data-testid ='emptyCart' className="text-red-700 font-bold text-center text-xl">{items.length ===0 && <div>Your cart is empty<br/>
                    You can go to home page to view more restaurants</div>}</div>
            </div>
            <div className="text-right">
                <button className="border bg-orange-400 rounded-full text-red-800 font-bold p-3">Proceed to check out</button>
                <p className="font-bold text-[20px] p-2">Total Amount :  ₹ 1234</p>
            </div>
        </div>
    )
}

export default Cart;