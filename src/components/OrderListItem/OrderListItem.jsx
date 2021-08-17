import './OrderListItem.css';

export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
  return (
    <div className="order-History" /*className={`OrderListItem${isSelected ? ' selected' : ''}`} onClick={() => handleSelectOrder(order)}*/>
      <div>
        <div className="order-id">Order Id: <span className="order-id">{order.orderId}</span></div>
        <div>${order.orderTotal.toFixed(2)}&nbsp;&nbsp; &nbsp;&nbsp;<span>{order.totalQty} Item</span></div>
        
        <div>{new Date(order.updatedAt).toLocaleDateString()}</div>
        <hr></hr>
      </div>
    </div>
  );
}