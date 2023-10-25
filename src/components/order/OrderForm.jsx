// OrderForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../store/order/orderSlice";

const OrderForm = () => {
  const dispatch = useDispatch();
  const orderStatus = useSelector((state) => state.order.status);

  const [formData, setFormData] = useState({
    // Ваши поля формы здесь
    start_date: "",
    end_date: "",
    // ...
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrder(formData));
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Ваши поля формы здесь */}
        <label>
          Start Date:
          <input
            type="text"
            name="start_date"
            value={formData.start_date}
            onChange={handleInputChange}
          />
        </label>
        {/* Добавьте другие поля формы по мере необходимости */}
        <button type="submit" disabled={orderStatus === "loading"}>
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
