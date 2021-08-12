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
                        <ItemCard handleShowItem={handleShowItem} item={shrimp} key={shrimp._id}/>
                    ))
                }
            </div>
            <h3 id="crab">Crab</h3>
            <div>
                {
                    crabs.map(crab => (
                        <ItemCard item={crab}/>
                    ))
                }
            </div>
            <h3>Fish</h3>
            <div>
                {
                    fishes.map(fish => (
                        <ItemCard item={fish}/>
                    ))
                }
            </div>
            <h3>Shell Fish</h3>
            <div>
                {
                    shellFishes.map(shellFish => (
                        <ItemCard item={shellFish}/>
                    ))
                }
            </div>
            <h3>Snake</h3>
            <div>
                {
                    snakes.map(snake => (
                        <ItemCard item={snake}/>
                    ))
                }
            </div>
            <h3>Insect</h3>
            <div>
                {
                    insects.map(insect => (
                        <ItemCard item={insect}/>
                    ))
                }
            </div>
            <h3 id="hotPot">Hot Pot</h3>
            <div>
                {
                    hotPots.map(hotPot => (
                        <ItemCard item={hotPot}/>
                    ))
                }
            </div>
            <h3>Beef</h3>
            <div>
                {
                    beefs.map(beef => (
                        <ItemCard item={beef}/>
                    ))
                }
            </div>
            <h3>Pork</h3>
            <div>
                {
                    porkAndChickens.map(porkAndChicken => (
                        <ItemCard item={porkAndChicken}/>
                    ))
                }
            </div>
            <div>
                {
                    vegetables.map(vegetable => (
                        <ItemCard item={vegetable}/>
                    ))
                }
            </div>
            <div>
                {
                    snacks.map(snack => (
                        <ItemCard item={snack}/>
                    ))
                }
            </div>
            
        </div>
        {showModal &&
         <section className="modal">
         <article>
             <div>
               <div className="name">{selectedItem.name}</div>
               <div>{selectedItem.description}</div>
             </div>
               <div>
                   {selectedItem.price}
             </div>
         <button onClick={() => setShowModal(false)}>Close</button>
         </article>
        </section>
        }       
       </>
    )
}