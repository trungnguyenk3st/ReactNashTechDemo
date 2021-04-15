import React,{useState} from 'react';
import TopBanner from './Components/TopBanner';
import {
    Container
} from 'reactstrap';
import Header from './Components/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Containers/Home'
import Cart from './Containers/Cart'
import Product from './Containers/Product'


function App() {


    const [itemSelect, setSelect] = useState(null);
    const [cartItem, setCartItem] = useState(0);

    const [bookItem, setBookItem] = useState(null);


    
    React.useEffect(()=>{
        fetch('./productItems.json')
        .then(resp => resp.json())
        .then(data => setBookItem(data));   
           
    },[]);
    
    function handlerAddCart (item){
      setCartItem(cartItem + 1);
      setSelect(item);
    };

    return (
      <BrowserRouter>
        <div>
            <Header  cartItem ={cartItem}></Header>
            <TopBanner></TopBanner>
            <Container fluid="true"></Container>
        </div>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/product">
          <Product onAddToCart={handlerAddCart} data={bookItem}></Product>
        </Route>
        <Route path="/cart">
          <Cart item={itemSelect} />
        </Route>
      </BrowserRouter>
    )
}

export default App;