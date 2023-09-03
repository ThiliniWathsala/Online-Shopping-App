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
    <div className='px-10 text-center'>
       <h1 className='py-9 text-3xl font-serif font-bold' >Shopping Cart</h1>
       {cart.cartItem.length === 0 ? (
        <div>
          <p className='text-lg text-gray-600'>Your cart is currently empty</p>
          <div>
            <Link to="/"><span className='text-gray-600'><ArrowBackIcon />Start Shopping</span> </Link>
          </div>
        </div>
       ): (
        <div>
         <div>
        <div className='relative flex flex-row font-serif font-bold'>
            <h3 className='w-3/12 text-left'>Product</h3>
            <h3 className='w-3/12'>Price</h3>
            <h3 className='w-3/12'>quantity</h3>
            <h3 className='w-3/12'>Total</h3>
        </div>
        <hr />
        <div className='overflow-y-auto h-45'>
        {cartItems.map((item,index) =>{ 
              return(
                <div>
                  <div className='relative flex flex-row py-5 mb-3 h-30  items-center '> 
                    <div className='w-3/12 flex flex-row'>
                      <div>
                      <img className='h-20 align-middle' src={item.image}/> 
                      </div>
                      <div className='w-6/12 text-left ml-5'>
                        <h3>{item.name}</h3>
                        <h6 className='text-xs'>{item.desc}</h6>
                        <button onClick={()=>removeProductFromCart(item)} className='mt-5 text-xs'>Remove</button>
                      </div>
                    </div>
                      <h3 className='w-3/12'>${item.price}</h3>
                      <div className='w-3/12 '>
                        <div className='ml-20 mr-20 rounded-lg border-2 border-gray-200'>
                        <button className='w-3/12' onClick={()=>removeItemFromCart(item)} >-</button><span className='w-3/12'>{item.quantity}</span><button onClick={()=>addItemToCart(item)} className='w-3/12'>+</button>
                        </div>
                      </div>
                      <h3 className='w-3/12'>${item.quantity * item.price}</h3>
                    </div>  
                  <hr />
                </div>
                
              )
          })}
           <hr />
        </div>
        <div className='relative flex flex-row mt-7'>
          <div className='w-6/12 text-left'>
           <button className='h-10 w-40 rounded-md bg-slate-400 text-white text-lg' onClick={()=>clearCartItems()}> Clear Cart</button>
          </div>
          <div className='w-6/12 relative flex flex-col'>
            <div className='flex flex-row'>
                 <span className='w-6/12 font-bold text-xl text-left'>Subtotal</span>
                <span className='w-6/12 font-bold text-xl'>${cart.TotalCartAmount}</span>
            </div>
            <div className='mt-4 text-left'>
              <p className='text-sm'>Taxes and shipping cost calculated at checkout</p>
              <button className='h-10 w-40 rounded-md mt-3 bg-sky-600 text-white text-lg'>checkout</button>
              <div className='mt-2 mb-10'>
                <Link to="/"><span className='text-gray-600 text-sm'><ArrowBackIcon />Continue Shopping</span> </Link>
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