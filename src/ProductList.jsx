import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import Navbar from './Navbar';
import './ProductList.css';

function ProductList({ onNavigateHome }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night and cleanses toxins like formaldehyde from indoor air.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters carbon monoxide and xylene, exceptionally resilient and easy to propagate.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes airborne mold spores and toxins while showcasing elegant white blooms.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Natural indoor humidifier that neutralizes pollutants and softens interior decor.",
          cost: "$20"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Thick glossy foliage that absorbs carbon dioxide and airborne chemical compounds.",
          cost: "$17"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies indoor atmosphere and provides soothing healing gel for minor burns.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=600&auto=format&fit=crop",
          description: "Calming sweet botanical scent widely prized in aromatherapy and stress relief.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=600&auto=format&fit=crop",
          description: "Intoxicating sweet fragrance with delicate star flowers that elevate bedroom mood.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating herbal pine scent celebrated both in gardens and culinary recipes.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Crisp, revitalizing scent that enlivens spaces and brews delicious organic teas.",
          cost: "$12"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description: "Zesty citrus perfume that uplifts spirits, deters mosquitoes, and calms nerves.",
          cost: "$14"
        },
        {
          name: "Hyacinth",
          image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Intense, luxurious spring floral aroma bursting from dense flower spikes.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Low Maintenance & Outdoor Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=600&auto=format&fit=crop",
          description: "Nearly indestructible perennial that flourishes in dim lighting and dry conditions.",
          cost: "$25"
        },
        {
          name: "Golden Pothos",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description: "Hardy cascading vine with variegated leaves that thrives with minimal attention.",
          cost: "$10"
        },
        {
          name: "Cast Iron Plant",
          image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
          description: "Rugged foliage plant living up to its name by surviving deep shade and neglect.",
          cost: "$20"
        },
        {
          name: "Succulent Garden",
          image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
          description: "Architectural desert plants storing water efficiently in plump fleshy leaves.",
          cost: "$18"
        },
        {
          name: "Aglaonema",
          image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
          description: "Colorful Chinese evergreen that adds splashy pink and cream tones in low light.",
          cost: "$22"
        },
        {
          name: "Marigold",
          image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          description: "Sun-loving outdoor flower with radiant golden petals that deter garden pests.",
          cost: "$8"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleNavigate = (view) => {
    if (view === 'landing') {
      if (onNavigateHome) onNavigateHome();
      setShowCart(false);
    } else if (view === 'products') {
      setShowCart(false);
    } else if (view === 'cart') {
      setShowCart(true);
    }
  };

  const isItemInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div className="product-page-wrapper">
      <Navbar
        onNavigate={handleNavigate}
        currentView={showCart ? 'cart' : 'products'}
      />

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <main className="product-catalog">
          <header className="catalog-header">
            <h1 className="catalog-title">Explore Our Plant Collection</h1>
            <p className="catalog-subtitle">
              Hand-picked healthy houseplants carefully categorized for every home, office, and patio.
            </p>
          </header>

          {plantsArray.map((categorySection, catIdx) => (
            <section className="category-section" key={catIdx}>
              <div className="category-header-wrap">
                <h2 className="category-title">{categorySection.category}</h2>
                <span className="category-count">{categorySection.plants.length} Plants</span>
              </div>

              <div className="plants-grid">
                {categorySection.plants.map((plant, plantIdx) => {
                  const added = isItemInCart(plant.name);
                  return (
                    <article className="plant-card" key={plantIdx}>
                      <div className="plant-image-container">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-card-img"
                          loading="lazy"
                        />
                        <span className="plant-price-pill">{plant.cost}</span>
                      </div>

                      <div className="plant-card-body">
                        <h3 className="plant-name">{plant.name}</h3>
                        <p className="plant-description">{plant.description}</p>
                        <button
                          className={`add-cart-btn ${added ? 'btn-added' : ''}`}
                          onClick={() => handleAddToCart(plant)}
                          disabled={added}
                        >
                          {added ? '✓ Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
