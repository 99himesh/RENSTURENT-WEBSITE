 import Modal from '../UI/Modal';
import classes from './cart.module.css';
  const Cart=props=>{

    const cartItem=[{id:'c1',name:'himesh',amount:2,price:12.99}].
    map((item)=>(
        <li>{item.name}</li>
    ))
    return <Modal>
        {cartItem}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>23.54</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>close</button>
            <button className={classes.button}>order</button>

        </div>

    </Modal>
}

export default Cart;