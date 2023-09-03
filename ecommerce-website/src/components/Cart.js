import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removeProduct, clearCart } from '../features/cartSlice';

function Cart() {

  const cart = useSelector((state)=> state.cart)
  const cartItems = cart.cartItem;
  const dispatch = useDispatch();

  const addItemToCart = (item) =>{
    dispatch(addToCart(item));
  }

  const removeItemFromCart = (item) =>{
    dispatch(removeFromCart(item))
  }

  const removeProductFromCart = (item) =>{
    dispatch(removeProduct(item))
  }

  const clearCartItems = () =>{
    dispatch(clearCart())
  }

  return (
    <div className='pt-16 overflow-y-auto h-50 md:overflow-scrol px-auto'>
        <h1 className='fixed w-full top-30 bg-white text-center text-base py-9 h-5 sm:text-3xl font-serif font-bold' >Shopping Cart</h1>
       {cart.cartItem.length === 0 ? (
        <div className='mt-20 text-center'>
          <p className='text-lg text-gray-600'>Your cart is currently empty</p>
          <div>
            <Link to="/"><span className='text-gray-600 text-center'><ArrowBackIcon />Start Shopping</span> </Link>
          </div>
        </div>
       ): (
        <div>
         <div className=''>
        <div className='invisible sm:visible mt-20 text-xs sm:mt-40 sm:text-base  flex flex-row font-serif font-bold'>
            <h3 className='w-3/12 text-left'>Product</h3>
            <h3 className='w-3/12 text-center'>Price</h3>
            <h3 className='w-3/12 text-center'>quantity</h3>
            <h3 className='w-3/12 text-center'>Total</h3>
        </div>
        <hr />
        <div className='px-1 sm:overflow-y-auto h-3/12'>
        {cartItems.map((item,index) =>{ 
              return(
                <div key={index}>
                  <div className='flex items-start flex-row py-5 mb-3 h-30 sm:items-center '> 
                    <div className='w-5/12 sm:w-3/12 flex flex-row'>
                      <div>
                       <img className='align-middle sm:w-auto md:h-20' src={item.image}/> 
                      </div>
                      <div className='w-5/12 sm:w-6/12 text-left ml-5'>
                        <h3 className='text-xs sm:text:base font-bold'>{item.name}</h3>
                        <h6 className='text-xs'>{item.desc}</h6>
                        <button onClick={()=>removeProductFromCart(item)} className='mt-5 text-xs'>Remove</button>
                      </div>
                    </div>
                      <h3 className='w-2/12 sm:w-3/12 text-xs sm:text:base text-center'>${item.price}</h3>
                      <div className='w-2/12 sm:w-3/12 text-center '>
                        <div className='text-xs sm:text:base rounded-lg border-2 border-gray-200 md:ml-20 md:mr-20'>
                        <button className='w-3/12' onClick={()=>removeItemFromCart(item)} >-</button><span className='w-3/12'>{item.quantity}</span><button onClick={()=>addItemToCart(item)} className='w-3/12'>+</button>
                        </div>
                      </div>
                      <h3 className='w-3/12 text-center text-xs sm:text:base font-bold'>${item.quantity * item.price}</h3>
                    </div>  
                  <hr />
                </div>
              )
          })}
           <hr />
        </div>
        <div className='px-1 h-2/6 fixed w-full bottom-0 bg-white flex flex-row'>
          <div className='sm:w-6/12 text-left'>
           <button className='h-10 w-20 text-sm sm:w-40 rounded-md bg-slate-400 text-white sm:text-lg mt-10' onClick={()=>clearCartItems()}> Clear Cart</button>
          </div>
          <div className='px-2 sm:w-6/12 sm:px-0 flex flex-col mt-10'>
            <div className='flex flex-row'>
                <span className='w-9/12 sm:w-6/12 font-bold text-sm sm:text-xl text-left'>Subtotal</span>
                <span className='w-2/12 sm:w-6/12 font-bold text-sm sm:text-xl text-center'>${cart.TotalCartAmount}</span>
            </div>
            <div className='sm:mt-4 text-left'>
              <p className='text-xs'>Taxes and shipping cost calculated at checkout</p>
              <button className='text-xs w-20 sm:h-10 sm:w-40 rounded-md sm:mt-3 bg-sky-600 text-white sm:text-lg'>checkout</button>
              <div className='sm:mt-2 sm:mb-10'>
                <Link to="/"><span className='text-gray-600 text-xs sm:text-sm'><ArrowBackIcon />Continue Shopping</span> </Link>
              </div>
           </div>
          </div> 
        </div > 
        <div>
        </div>
       </div>
        </div>
       )}
  
    </div>
  )
}
export default Cart