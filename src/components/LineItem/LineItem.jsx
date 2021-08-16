export default function LineItem({lineItem}) {

    return (
        <>
        <p>{lineItem.item.name}</p>
        <p>{lineItem.item.price}</p>
        <p>{lineItem.qty}</p>
        <p>${lineItem.extPrice.toFixed(2)}</p>
        </>
        )
}