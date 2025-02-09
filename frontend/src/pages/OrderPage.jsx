import React from "react";
import { useGetOrderQuery } from "../redux/features/orders/orders";
import { useAuth } from "../context/Authcontext";

const OrderPage = () => {
  const { currentuser } = useAuth();

  // Ensure email exists before making the query
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderQuery(currentuser?.email, {
    skip: !currentuser?.email, // ✅ Skips query if email is undefined
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error in loading Orders</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <div>No Orders Found!</div>
      ) : (
        <div className="grid gap-4">
          {orders.map((order, index) => (
            <div key={order?._id || index} className="bg-white rounded shadow-lg p-4">
                <p className="p-1 bg-secondary text-white w-10 rounded"># {index+1}</p>
              <h2 className="font-bold">Order ID: {order?._id}</h2>
              <p className="text-gray-600">Name: {order?.name}</p>
              <p className="text-gray-600">Email: {order?.email}</p>
              <p className="text-gray-600">Phone: {order?.phone}</p>
              <p className="text-gray-600">Total Price: ${order?.totalPrice}</p>

              <h3 className="font-semibold mt-2">Address:</h3>
              <p>{order?.address?.city}, {order?.address?.state}, {order?.address?.country}, {order?.address?.zipCode}</p>

              <h3 className="font-semibold mt-2">Products:</h3>
              <ul>
                {order?.productIds?.map((productId) => (
                  <li key={productId} className="text-gray-600">
                    {productId}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
