import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CategoryIndexPage from "../CategoryIndexPage/CategoryIndexPage";
import * as ordersApi from '../../utilities/orders-api';
import LineItem from "../../components/LineItem/LineItem";
import './CartDetailPage.css'

export default function CartDetailPage() {
    const [cart, setCart] = useState(null);
    const history = useHistory();
    
    useEffect(function() {
        async function fetchData() {
            const cart = await ordersApi.getCart();
            console.log(cart)
            setCart(cart);
        }
        fetchData();
    }, [])

    async function handleCheckout() {
        await ordersApi.checkout();
        history.push('/orders/new');       
    }
    
    if (!cart) return null;

    const lineItems = cart.lineItems.map(lineItem => <LineItem lineItem={lineItem} />)
    console.log(lineItems)


    return (
        <div className="CartDetailPage">
            <div className="header">Your Items</div><div className="header">Price</div><div className="header">Quantity</div><div className="header">Total</div>

            {
               cart.lineItems.length ? 
               lineItems
               :
               <h1>You don't have any items in your cart</h1>
            }
            { cart.lineItems.length &&
                <>
                <span></span><span></span>
                <button className="order-btn" onClick={handleCheckout}>Place Order</button>
                {/* the toFixed()method is to add a decimal. the argument 2 means we are adding 2 numbers after the decimal */}
                <p>Order Total: <span>${cart.orderTotal.toFixed(2)}</span></p>
                </>
            }
        </div>
    )
}

