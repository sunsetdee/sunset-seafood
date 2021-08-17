import './ItemCard.css'

export default function ItemCard({item, handleShowItem}) {

    return(
        // the below code is for when clicking on an item, it will run the handleShowItem function on CategoryIndex.jsx which 
        // will open up that item's modal page
        <div className="ItemCard" onClick={() => handleShowItem(item)}>
            <section>
                <div>
                    <div className="name">{item.name}</div>
                    <div className="itemCard-description">{item.description}</div>
                </div>
                <div>
                    ${item.price}
                </div>
            </section>
            <img src={item.photo} />
        </div>
    )
}