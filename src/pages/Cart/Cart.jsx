import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Home/components/Header/Header";
import { useSelector, useDispatch } from 'react-redux';
import { changeQuantity, removeFromCart } from "../../store/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const totalAmount = cart.reduce((total, item) => total + item.passengersCount * item.quantity, 0);

    const handleQuantityChange = (item, quantity) => {
        dispatch(changeQuantity({ item, quantity }));
    };

    return (
        <div>
            <Header />
            <h1 style={{ margin: "50px 0", textAlign: 'center'}} className="title">Shopping Cart</h1>
            
            {cart.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-around', border:'1px solid #000', padding: '20px'}}>
                    <h2 style={{fontSize:'24px', fontWeight:"700"}} className="text">Name: {item.name}</h2>
                    <h2 style={{fontSize:'24px', fontWeight:"700"}} className="text">Max speed: {item.maxSpeed}</h2>
                    <div style={{display:'flex'}}>
                        <button onClick={() => handleQuantityChange(item, item.quantity - 1)} disabled={item.quantity === 0} style={{border:'2px solid #000', padding:'10px 20px', borderRadius:'5px', backgroundColor:'#fff'}}>-</button>
                        <p style={{fontWeight:"500", fontSize:'24px', margin:'40px'}}>{item.quantity}</p>
                        <button onClick={() => handleQuantityChange(item, item.quantity + 1)} style={{border:'2px solid #000', padding:'10px 20px', borderRadius:'5px', backgroundColor:'#fff'}}>+</button>
                        <button onClick={() => dispatch(removeFromCart(item))} className="button" style={{marginLeft: '40px'}} >Delete</button>
                    </div>
                    <p style={{fontWeight:"500", fontSize:'24px'}}>Passengers count: {item.passengersCount * item.quantity}</p>
                </div>
            ))}

            <h2 style={{ margin: "30px 0 100px 1500px"}} className="text">Total Passengers Count: {totalAmount.toFixed(2)}</h2>
            <Link to="/catalog" className="button" style={{marginLeft: '30px'}}>Back to catalog</Link>          
        </div>
    );
};


export default Cart;
