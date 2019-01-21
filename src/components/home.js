import React from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/products.json';

const Home = () => {
  return (

    <div>
      <p className="display-4">Welcome Home</p>
      <div>
        <ProductListing products={data.products} />
      </div>

    </div>

  )
}


export default Home
