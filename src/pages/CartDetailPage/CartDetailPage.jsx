import { useEffect, useState } from "react";
import CategoryIndexPage from "../CategoryIndexPage/CategoryIndexPage";
import * as ordersApi from '../../utilities/orders-api';
import LineItem from "../../components/LineItem/LineItem";

export default function CartDetailPage() {
    const [cart, setCart] = useState(null);
    
    useEffect(function() {
        async function fetchData() {
            const cart = await ordersApi.getCart();
            console.log(cart)
            setCart(cart);
        }
        fetchData();
    }, [])
    
    if (!cart) return null;

    const lineItems = cart.lineItems.map(lineItem => <LineItem lineItem={lineItem} />)
    console.log(lineItems)

    return (
        <div>

            {
               cart.lineItems ? 
               lineItems
               :
               <h1>You don't have any items in your cart</h1>
            }
        </div>
    )
}

