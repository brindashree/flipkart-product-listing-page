import "./App.css";
import Navbar from "./Navbar";

import ProductList from "./ProductList";
import data from "./data/db.json";
function App() {
	return (
		<div>
			<Navbar></Navbar>
			<ProductList products={data} title="All Products" />
		</div>
	);
}

export default App;
