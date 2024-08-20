import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collections'} />
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600 '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe
          minima fuga consequatur perferendis porro possimus excepturi nemo
          placeat. Veniam beatae id delectus. Nesciunt temporibus debitis,
          cumque natus suscipit aspernatur.
        </p>
      </div>
      {/* Rendering product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {latestProducts.map((item, index) => (
          <ProductItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
