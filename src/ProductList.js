import { useState } from "react";

const ProductList = ({ products, title }) => {
	const [prod, setprod] = useState(products);
	const [filterarr, setfilterarr] = useState([]);

	const arrangeDesc = () => {
		function compare_price(a, b) {
			if (a.price > b.price) {
				return -1;
			} else if (a.price < b.price) {
				return 1;
			} else {
				return 0;
			}
		}
		setprod(products.sort(compare_price));
	};
	const arrangeAsc = () => {
		const newArr = products;
		for (var i = 0; i < newArr.length; i++) {
			for (var j = 0; j < newArr.length - i - 1; j++) {
				if (newArr[j].price > newArr[j + 1].price) {
					var temp = newArr[j];
					newArr[j] = newArr[j + 1];
					newArr[j + 1] = temp;
				}
			}
		}
		console.log(newArr);
		setprod(newArr);
	};
	const handleClear = () => {
		setprod(products);
		for (var i = filterarr.length; i > 0; i--) {
			filterarr.pop();
		}
	};
	const setFilterProducts = () => {
		const filteredProducts = products.filter((product) => {
			if (
				filterarr.includes(product.brand) ||
				filterarr.includes(product.gender)
			) {
				return product;
			}
		});
		setprod(filteredProducts);
	};

	const handleClick = (e) => {
		if (e.target.checked === true) {
			filterarr.push(e.target.value);
		} else if (e.target.checked === false) {
			const fillarr = filterarr.filter((fill) => fill !== e.target.value);
			setfilterarr(fillarr);
		}
		console.log(filterarr);
		setFilterProducts();
	};

	return (
		<div className="container-fluid ">
			<h2 className="text-center  my-3">{title}</h2>
			<div className="d-flex justify-content-evenly my-3">
				<button type="button" className="btn btn-primary" onClick={arrangeDesc}>
					High-Low
				</button>
				<button type="button" className="btn btn-primary" onClick={arrangeAsc}>
					Low-High
				</button>
				<button type="button" className="btn btn-primary" onClick={handleClear}>
					Clear
				</button>
			</div>
			<div>
				<h6>Filters</h6>
				<div className="d-flex justify-content-evenly">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value="Men"
							id="flexCheckDefault"
							onClick={handleClick}
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							Men
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value="Women"
							id="flexCheckDefault"
							onClick={handleClick}
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							Women
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value="Puma"
							id="flexCheckDefault"
							onClick={handleClick}
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							Puma
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value="Levi's"
							id="flexCheckDefault"
							onClick={handleClick}
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							Levi's
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value="Peter England"
							id="flexCheckDefault"
							onClick={handleClick}
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault">
							Peter England
						</label>
					</div>
				</div>
			</div>
			<div className="wrapper px-3">
				{prod.map((product, index) => (
					<div className="card px-2 py-2" key={index}>
						<img
							src={product.imgSrc}
							alt={product.name}
							className="card-img-top"
							style={{ height: "350px", width: "100%" }}
						/>
						<div className="card-body">
							<p>{product.brand}</p>
							<h5 className="card-title">{product.name}</h5>
							<p className="fw-bold fs-5">Rs. {product.price}</p>
							{product.size.map((s, i) => (
								<span key={i}>{s} , </span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
