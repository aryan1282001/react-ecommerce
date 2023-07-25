
import React, { useState ,useRef } from 'react';
import './ProductCard.css';
import { products } from '../../products';  

const ProductCard = ({ addToCart }) => {
  const [search, setSearch] = useState('');
  const [history , setHistory] = useState([])
  const [ hisbtn , setHisbtn] = useState('none')
  

  const cartBtn = (product) => {
    addToCart(product); 
  };

  const refElement = useRef("")
  const hisRef = useRef('')
 

  function reset(){
    
    setSearch('');
    refElement.current.focus()
    setHistory([...history , search])
    

  }

  function his(e){
    e.preventDefault()
   
    if(hisbtn== 'none'){
      setHisbtn('flex');

   
    }
    else {setHisbtn('none')}


  
   

    hisRef.current.style.display= hisbtn;
 
  }
  function hisItemDelete(index){
    const newHisList = history.filter(( item, i)=> i!== index);  
    setHistory(newHisList)

  }


  return (
    <>
      <div className="pro">
        <form className="search-box form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            // type="search"
            onChange={(e) => setSearch(e.target.value)}
            ref={refElement}
            placeholder="Search"
            aria-label="Search"
            value={search}
          />
          <p className="clear" onClick={reset}>Clear</p>
          <button className="history" onClick={his}>History</button>
          <div className="historyList" ref={hisRef}>

            {
            history.length == 0 ? (<p>No items to show</p>) : 
            (history.map((item, index) => (
              <>
              
              <p key={index}>{item} <h4 onClick={()=>hisItemDelete(index)}>x</h4> </p>
              </>
            )))}
          </div>
        </form>
        {products
          .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <>
            <div className="product-card" key={product.id}>
              <img className="product-image" src={product.image} alt="Product Image" />
              <div className="product-details">
                <h5 className="product-title">{product.name}</h5>
                <div className="product-footer">
                  <p className="product-price">${product.price}</p>
                  <button className="add-to-cart-button" onClick={() => cartBtn(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div> 
</>
          ))}
      </div>
    </>
  );
};

export default ProductCard;