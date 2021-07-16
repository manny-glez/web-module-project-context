import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log(item)
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={ cart }>

					{/* Renders nav links and length of cart array as a badge*/} 
					<Navigation />

					<Route exact path="/">
						{/* Product card component - maps over data */}
						<Products /> 
					</Route>

					<Route path="/cart">
						{/* Shopping cart component */}
						<ShoppingCart />
					</Route>

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
