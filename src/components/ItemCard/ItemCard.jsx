import './ItemCard.css'

export default function ItemCard({item, handleShowItem}) {

    return(
        <div className="ItemCard" onClick={() => handleShowItem(item)}>
            <section>
                <div>
                    <div className="name">{item.name}</div>
                    <div>{item.description}</div>
                </div>
                <div>
                    {item.price}
                </div>
            </section>
            <img src={item.photo} />
        </div>
    )
}