import { useEffect, useState } from "react";
import * as itemsApi from '../../utilities/items-api';
import ItemCard from '../ItemCard/ItemCard';
import './CategoryIndex.css';


export default function CategoryIndex() {
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

    useEffect(function() {
        async function fetchItems() {
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
        }
        fetchItems();
    }, []) 

    function filterItems(items, category) {
        return items.filter(function(item) {
            if (item.category) {
                return item.category.name === category
            }
        })
    }

    // below code is for when clicking on an item, it will set the showmodal to true and open up that item's modal page
    function handleShowItem(item) {
        setSelectedItem(item)
        setShowModal(true)
    }

    return (
        <>
        <div className="CategoryIndex">
            <h3 id="shrimp">Shrimp</h3>
            <div>
                {
                    shrimps.map(shrimp => (
                        <ItemCard item={shrimp} key={shrimp._id} handleShowItem={handleShowItem} />
                    ))
                }
            </div>
            <h3 id="crab">Crab</h3>
            <div>
                {
                    crabs.map(crab => (
                        <ItemCard item={crab} key={crab._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h3 id="fish">Fish</h3>
            <div>
                {
                    fishes.map(fish => (
                        <ItemCard item={fish} key={fishes._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h3 id="shellFish">Shell Fish</h3>
            <div>
                {
                    shellFishes.map(shellFish => (
                        <ItemCard item={shellFish} key={shellFish._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h3 id="snake">Snake</h3>
            <div>
                {
                    snakes.map(snake => (
                        <ItemCard item={snake} key={snake._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h3 id="insect">Insect</h3>
            <div>
                {
                    insects.map(insect => (
                        <ItemCard item={insect} key={insect._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h3 id="hotPot">Hot Pot</h3>
            <div>
                {
                    hotPots.map(hotPot => (
                        <ItemCard item={hotPot} key={hotPot._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h3 id="beef">Beef</h3>
            <div>
                {
                    beefs.map(beef => (
                        <ItemCard item={beef} key={beef._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <h3 id="pork">Pork</h3>
            <div>
                {
                    porkAndChickens.map(porkAndChicken => (
                        <ItemCard item={porkAndChicken} key={porkAndChicken._id} handleShowItem={handleShowItem}/>
                    ))
                }
            </div>
            <div>
            <h3 id="vegetable">Vegetable</h3>
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
             {/* the below code is for when clicking on the close button to close the modal, it will set showModal to false and
             close the modal */}
         <button onClick={() => setShowModal(false)}>Close</button>
         </article>
        </section>
        }       
       </>
    )
}