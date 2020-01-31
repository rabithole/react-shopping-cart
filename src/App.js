	import React, { useState } from 'react';
	import { Route } from 'react-router-dom';
	import data from './data';
	import { ProductContext } from './contexts/ProductContext';
	import { CartContext } from './contexts/CartContext';

	// Components
	import Navigation from './components/Navigation';
	import Products from './components/Products';
	import ShoppingCart from './components/ShoppingCart';

	function App(props) {
		const [products] = useState(data);
		const [cart, setCart] = useState([]);

		const addItem = item => {
			// add the given item to the cart
			setCart([item, ...cart])
			localStorage.setItem(item.title, JSON.stringify(item))
			// console.log(item.title)
		};

		const removeItem = (itemId) => {
			setCart(cart.filter(item => itemId !== item.id));
		};

		return (
			<ProductContext.Provider value={{ products, addItem }}>
					{ /* value is a prop that context uses */ }
				<CartContext.Provider value={{ cart, removeItem }}>
					<div className="App">
						<Navigation /> 

						{/* Routes */}
						<Route
							exact
							path="/"
							component={Products}
						/>

						<Route
							path="/cart"
							component={ShoppingCart}
						/>
					</div>
				</CartContext.Provider>
			</ProductContext.Provider>
		);
	}

	export default App;
