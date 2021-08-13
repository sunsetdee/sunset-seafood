import { useEffect, useState } from "react";
import * as itemsApi from '../../utilities/items-api';
import * as ordersApi from '../../utilities/orders-api';
import ItemCard from '../../components/ItemCard/ItemCard';
import './CategoryIndexPage.css';


export default function CategoryIndexPage() {
    const [items, setItems] = useState([]);
    const [shrimps, setShrimps] = useState([]);
    const [crabs, setCrabs] = useState([]);
    const [fishes, setFishes] = useState([]);
    const [shellFishes, setShellFishes] = useState([]);
    const [snakes, setSnakes] = useState([]);
    const [insects, setInsects] = useState([]);
    const [hotPots, setHotPots] = useState([]);
    const [beefs, setBeefs] = useState([]);
    const [porkAndChickens, setPorkAndChickens] = useState([]);
    const [vegetables, setVegetables] = useState([]);
    const [snacks, setSnacks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [cart, setCart] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(function() {
        async function fetchData() {
            // anytime we are querying a mongo database, it will return a promimse
            // itemsApi will have all the functions inside items-api
            const items = await itemsApi.getAll();
            const shrimps = filterItems(items, 'Shrimps');
            const crabs = filterItems(items, 'Crab and Lobster');
            const fishes = filterItems(items, 'Fish');
            const shellFishes = filterItems(items, 'Shell Fish');
            const snakes = filterItems(items, 'Snake');
            const insects = filterItems(items, 'Insects');
            const hotPots = filterItems(items, 'Hot Pot');
            const beefs = filterItems(items, 'Beef');
            const porkAndChickens = filterItems(items, 'Pork and Chicken');
            const vegetables = filterItems(items, 'Vegetable');
            const snacks = filterItems(items, 'Snacks');
            setItems(items);
            setShrimps(shrimps);
            setCrabs(crabs);
            setFishes(fishes);
            setShellFishes(shellFishes);
            setSnakes(snakes);
            setInsects(insects);
            setHotPots(hotPots);
            setBeefs(beefs);
            setPorkAndChickens(porkAndChickens);
            setVegetables(vegetables);
            setSnacks(snacks);
            const cart = await ordersApi.getCart();
            setCart(cart);
        }
        fetchData();
    }, []) 

    
    function filterItems(items, category) {
        return items.filter(function(item) {
            if (item.category) {
                return item.category.name === category
            }
        })
    }
    
    async function handleAddToCart() {
        const updatedCart = await ordersApi.setItemQty(selectedItem._id, qty);
        setCart(updatedCart);
        setShowModal(false);
        setQty(1); 
    }

    function handleChangeQty(changeAmt) {
        if (qty === 0 && changeAmt === -1) return; 
        setQty(qty + changeAmt);
    }

    // below code is for when clicking on an item, it will set the showmodal to true and open up that item's modal page
    function handleShowItem(item) {
        setSelectedItem(item)
        setShowModal(true)
    }

    return (
        <>
        <div className="CategoryIndex">
            <h2 id="shrimp">Shrimp</h2>
            <div>
                {
                    shrimps.map(shrimp => (
                        <ItemCard item={shrimp} key={shrimp._id} handleShowItem={handleShowItem} />
                    ))
                }
            </div>
            <h2 id="crab">Crab</h2>
            <div>
                {
                    crabs.map(crab => (
                        <ItemCard item={crab} key={crab._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h2 id="fish">Fish</h2>
            <div>
                {
                    fishes.map(fish => (
                        <ItemCard item={fish} key={fishes._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h2 id="shellFish">Shell Fish</h2>
            <div>
                {
                    shellFishes.map(shellFish => (
                        <ItemCard item={shellFish} key={shellFish._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h2 id="snake">Snake</h2>
            <div>
                {
                    snakes.map(snake => (
                        <ItemCard item={snake} key={snake._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h2 id="insect">Insect</h2>
            <div>
                {
                    insects.map(insect => (
                        <ItemCard item={insect} key={insect._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h2 id="hotPot">Hot Pot</h2>
            <div>
                {
                    hotPots.map(hotPot => (
                        <ItemCard item={hotPot} key={hotPot._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h2 id="beef">Beef</h2>
            <div>
                {
                    beefs.map(beef => (
                        <ItemCard item={beef} key={beef._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h2 id="pork">Pork</h2>
            <div>
                {
                    porkAndChickens.map(porkAndChicken => (
                        <ItemCard item={porkAndChicken} key={porkAndChicken._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <div>
            <h2 id="vegetable">Vegetable</h2>
                {
                    vegetables.map(vegetable => (
                        <ItemCard item={vegetable} key={vegetable._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <div>
                {
                    snacks.map(snack => (
                        <ItemCard item={snack} key={snack._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            
        </div>
        {showModal &&
         <section className="modal">
         <article>
             {/* the below code is for when clicking on the close button to close the modal, it will set showModal to false and
             close the modal */}
             <button className="modal-button" onClick={() => setShowModal(false)}>X</button>
             <div className="modal-image-div">
                <img className="modal-image" src={selectedItem.photo}/>
             </div>
             <div>
               <div className="name">{selectedItem.name}</div>
               <div>{selectedItem.description}</div>
             </div>
               <div>
                   {selectedItem.price}
             </div>
             <div className="modal-add-btn">
                 <div>
                     <div>
                         <button onClick={() => handleChangeQty(-1)}>-</button>
                         &nbsp;&nbsp; {qty} &nbsp;&nbsp;
                         <button onClick={() => handleChangeQty(+1)}>+</button>
                     </div>
                 </div>
                 <div></div>
                 <button className="modal-addtocart-button" onClick={() => handleAddToCart()}>
                     add to cart
                 </button>
             </div>
         </article>
        </section>
        }       
       </>
    )
}