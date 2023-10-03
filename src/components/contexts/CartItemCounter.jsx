/* eslint-disable react/prop-types */


const CartItemCounter = ({quanty = 1}) => {

   
  return (
    <>
    <p className="counter-button">-</p>
    <p>{quanty}</p>
    <p className="counter-button">+</p>
    </>
  )
}

export default CartItemCounter