import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartItem = ctx.item.map((item) => <li key={item.id}>{item.name}</li>);
  let  totalAmount=0;
   ctx.item.forEach((item)=>{
     totalAmount=totalAmount+item.price;
   })
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};

export default Cart;
