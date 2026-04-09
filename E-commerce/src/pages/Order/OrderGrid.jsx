import { OrderHeader } from "./OrderHeader";
import { OrderDetailGrid } from "./OrderDetailGrid";
export function OrderGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetailGrid order={order} />
          </div>
        );
      })}
    </div>
  );
}
