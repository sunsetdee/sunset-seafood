import { useEffect, useState } from "react";
import * as itemsApi from '../../utilities/items-api';
import Item from '../Item/Item';


export default function CategoryIndex() {
    const [items, setItems] = useState([]);
    const [shrimps, setShrimps] = useState([]);
    const [crabs, setCrabs] = useState([]);

    useEffect(function() {
        async function fetchItems() {
            // anytime we are querying a mongo database, it will return a promimse
            // itemsApi will have all the functions inside items-api
            const items = await itemsApi.getAll();
            const shrimps = filterItems(items, 'Shrimps');
            const crabs = filterItems(items, 'Crab and Lobster');
            setItems(items);
            setShrimps(shrimps);
            setCrabs(crabs);
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




    


    return (
        <div>
            <div>
                {
                    shrimps.map(shrimp => (
                        <Item item={shrimp}/>
                    ))
                }
            </div>
            <div>
                {
                    crabs.map(crab => (
                        <Item item={crab}/>
                    ))
                }
            </div>
            
        </div>
    )
}