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
    <div className='px-10 overflow-y-auto h-50 md:overflow-scrol px-auto text'>
      {isFetching? <p>Loading</p>: error? <p>error occured</p>: 
        <div className=''>
        <h1 className='text-sm sm:text-xs md:text-2xl lg:text-3xl font-bold font-sans font-serif mb-10 mt-10 text-center'>New Arrivals</h1>
        <div  className='relative grid justify-items-center gap-8  grid-flow-row-dense items-center grid-cols-1 grid-rows-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {data?.map((product)=>{
            return(
              <div className='shadow-lg shadow-gray-400 rounded-lg mb-10 w-auto h-auto md:w-auto flex flex-col justify-between'>
                 <div className='h-auto w-auto' key={product.id}>
                    <h3 className='h-2/12 text-center'>{product.name}</h3>
                    <img className='h-45 sm:h-80 w-auto' src={product.image}/>
                    <div className='flex flex-row justify-between px-5 h-2/12'>
                      <span className='text-sm sm:text-base'>{product.desc}</span>
                      <span className='text-sm sm:text-lg font-bold'>${product.price}</span>
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