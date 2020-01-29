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

		console.log(cart);

		const addItem = item => {
			// add the given item to the cart
			setCart([item, ...cart])
		};

		const removeItem = item => {
			console.log('Cart Button');
		}

		// console.log(data);
					// ProductContext.Provider creates context and passes props to all components that it is wrapping. ProductContext.Provider is created in the context files inside the contexts folder. 
		return (
			<ProductContext.Provider value={{ products, addItem }}> 
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
