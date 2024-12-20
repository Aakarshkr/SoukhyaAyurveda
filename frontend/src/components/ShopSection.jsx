import React from 'react';

const ShopSection = () => {
  const products = [
    {
      name: 'Herbal Detox Tea',
      image: 'path/to/herbal-tea.jpg',
      price: '₹299',
    },
    {
      name: 'Massage Oil',
      image: 'path/to/massage-oil.jpg',
      price: '₹499',
    },
    {
      name: 'Ayurvedic Hair Oil',
      image: 'path/to/hair-oil.jpg',
      price: '₹399',
    },
  ];

  return (
    <section id="shop" className="py-16 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">Ayurvedic Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">{product.name}</h3>
              <p className="text-lg text-gray-600">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
