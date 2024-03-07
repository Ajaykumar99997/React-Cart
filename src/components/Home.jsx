import React from 'react';
import img01 from '../assets/img01.jpg';
import img02 from '../assets/img02.jpeg';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
  const productList = [
    {
      name: 'Guitar',
      price: 15000,
      imgSrc: img02,
      id: 'gjwgj',
    },
    {
      name: 'FastTrack Watch',
      price: 5000,
      imgSrc: img01,
      id: 'scgjwgbdhsfj',
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    console.log(options);

    dispatch({ type: 'addToCart', payload: options });
    dispatch({ type: 'calculatePrice' });
    toast.success('Added to Cart');
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
