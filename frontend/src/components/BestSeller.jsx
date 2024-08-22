import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, []);
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'Best'} text2={'Sellers'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          sapiente obcaecati officia dolorum voluptatibus autem optio sit ea,
          facere delectus, impedit veritatis molestias! In, impedit! Est tenetur
          id vero sed?
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
