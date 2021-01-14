import {FaArrowAltCircleDown, FaArrowCircleUp} from 'react-icons/fa'
import {FaArrowCircleDown} from 'react-icons/fa'

const Cart = ({data,state})=>{
    console.log(state);
return ( 
    <>
    {data.map(item=>{
        const {id,img,price,title} = item
return <article key={id} className="article">
    <header className="header">
    <div className="content">
<div className="left">
<img className='image' src={img} alt=""/>
</div> 
   <div className="right"> 
    <h4>{title}</h4>
    <p>{price}</p>

    <button className="btn">Remove</button>
    </div>
    </div>
    </header>
    <footer className="footer">
    <FaArrowCircleUp/>
    <p>{state.count}</p>
    <FaArrowAltCircleDown/>
    
    </footer>
    </article>
    })}
    </>
)
    
}

export default Cart