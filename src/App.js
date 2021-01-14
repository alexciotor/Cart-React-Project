 import {useState,useEffect, useReducer} from 'react'
 import Nav from './nav'
import {Loading} from './loading'
import {FiLock} from 'react-icons/fi'
import Cart from './cart'
import Footer from './footer'
 const url = 'https://course-api.com/react-useReducer-cart-project'

 const reducer = (state,action ) =>{

}

const initialState = {
  count:1,
  total:0,
  price:0

}

function App() {
const [loading, IsLoading ] = useState(false)
const [data, setData] = useState ([])

const [state, dispatch] =useReducer(reducer,initialState )


  const getData = async() =>{
    IsLoading(true)
    try{
const response = await fetch(url);
const data = await response.json()
setData(data)
console.log(data);
IsLoading(false)
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
getData()
  },[])
  if(loading){
    return <Loading/>

  }
  return (
    <div>
     <Nav/>
     <div className="title"><h1>
     Your Bag
     </h1></div>
     <Cart data = {data} state={state}/>
     <Footer state={state}/>
    </div>
  );
}

export default App;
