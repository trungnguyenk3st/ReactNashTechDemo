import React,{useState} from 'react';
import TopBanner from './Components/TopBanner';
import {
    Container
} from 'reactstrap';
import ProductList from './Components/ProductList';
import Header from './Components/Header';


function App() {
    const [cartItem, setCartItem] = useState(0);
    
    const [bookItem, setBookItem] = useState(null);

    React.useEffect(()=>{
        fetch('./productItems.json')
        .then(resp => resp.json())
        .then(data => setBookItem(data));   
           
    },[]);
    
    const handlerAddCart = ()=> setCartItem(cartItem+1);

    return (
        <div>
            <Header onChangeCart ={() => setCartItem(cartItem+1)} cartItem ={cartItem}></Header>
            <TopBanner></TopBanner>
            <Container fluid="true"></Container>
            <ProductList data={bookItem} onAddToCart={handlerAddCart}></ProductList>
        </div>
    )
}

export default App;