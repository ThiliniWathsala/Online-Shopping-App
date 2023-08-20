import {useGetAllProductsQuery, productsApi} from '../features/productsApi'

function Home() {

  // const {item, status} = useSelector(state => state.products)

 const {data, error, isFetching} = useGetAllProductsQuery();
 
  return (
    <div>
      {isFetching? <p>Loading</p>: error? <p>error occured</p>: 
        <>
        <h1 className='text-2xl font-bold font-sans font-serif '>New Arrivals</h1>
          {data?.map((product)=>{
            return(
              <div key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image}/>
                <div>
                  <span>{product.desc}</span>
                  <span>${product.price}</span>
                </div>
                <button>Add to cart</button>
              </div>
             
            )   
        })}
        </>
      }

    </div>
  )
}

export default Home