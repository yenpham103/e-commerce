import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import clsx from 'clsx';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];
    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={clsx('h-3 sm:hidden', showFilter ? 'rotate-90' : '')}
            alt=''
          />
        </p>
        {/* Category filter */}
        <div
          className={clsx(
            'border border-gray-300 pl-5 py-3 mt-6 sm:block',
            showFilter ? '' : 'hidden'
          )}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                onChange={toggleCategory}
                value={'Men'}
              />
              Men
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                onChange={toggleCategory}
                value={'Women'}
              />
              Women
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                onChange={toggleCategory}
                value={'Kids'}
              />
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory filter */}
        <div
          className={clsx(
            'border border-gray-300 pl-5 py-3 my-5 sm:block',
            showFilter ? '' : 'hidden'
          )}
        >
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                onChange={toggleSubCategory}
                value={'Topwear'}
              />
              Topwear
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                onChange={toggleSubCategory}
                value={'Bottomwear'}
              />
              Bottomwear
            </p>
            <p className='flex gap-2'>
              <input
                type='checkbox'
                className='w-3'
                onChange={toggleSubCategory}
                value={'Winterwear'}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value='relavent'>Sort by: Relavent</option>
            <option value='low-hight'>Sort by: Low to Hight</option>
            <option value='hight-low'>Sort by: Hight to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
