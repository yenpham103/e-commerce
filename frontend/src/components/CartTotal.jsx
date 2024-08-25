import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl '>
        <Title text1={'Cart'} text2={'Totals'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 mb-[2px] text-sm'>
        <p>Sub Total</p>
        <p>
          {currency} {getCartAmount()}.00
        </p>
      </div>
      <hr />
      <div className='flex justify-between mb-[2px]'>
        <p>Shipping Free</p>
        <p>
          {currency} {delivery_fee}
        </p>
      </div>
      <hr />
      <div className='flex justify-between'>
        <b>Total</b>
        <b>
          {currency}{' '}
          {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
        </b>
      </div>
    </div>
  );
};

export default CartTotal;
