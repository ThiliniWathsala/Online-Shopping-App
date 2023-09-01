import {useGetAllProductsQuery} from '../features/productsApi'
import {ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import {useNavigate} from 'react-router-dom'

function Home() {

  // const {item, status} = useSelector(state => state.products)

 const {data, error, isFetching} = useGetAllProductsQuery();
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleAddToCart = (product) =>{
   dispatch(addToCart(product));
   navigate('/cart');
 }
 
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      {isFetching? <p>Loading</p>: error? <p>error occured</p>: 
        <div className='w-full'>
        <h1 className='text-3xl font-bold font-sans font-serif mb-10 mt-10'>New Arrivals</h1>
        <div  className='relative flex flex-row space-x-40 mt-30 align-middlec'>
            {data?.map((product)=>{
            return(
              <div className='shadow-lg shadow-gray-400 rounded-lg w-full md:w-auto flex flex-col justify-between'>
                 <div className='' key={product.id}>
                    <h3 className='h-2/12'>{product.name}</h3>
                    <img className='h-6/12 w-80' src={product.image}/>
                    <div className='flex flex-row justify-between px-5 h-2/12'>
                      <span>{product.desc}</span>
                      <span className='text-lg font-bold'>${product.price}</span>
                    </div>
                 </div>
                 <button onClick={()=>handleAddToCart(product)} className=' bg-blue-300 hover:bg-blue-500 h-2/12 text-white text-base font-bold py-2 px-4 rounded flex flex-row items-end py-4'>Add to <span><ShoppingCartIcon className='h-6 align-middle items-center ml-4'/></span></button>
              </div>       
            )   
        })}
        </div>
 
        </div>
      }

    </div>
  )
}

export default Home