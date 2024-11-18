import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import { addtocart } from "../../slices/add-cart/addCartSlice";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);

        
        const uniqueCategories = ["All", ...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container">
      <div className="my-3">
        <label htmlFor="categoryDropdown" className="form-label">Filter by Category:</label>
        <select
          id="categoryDropdown"
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 w-100">
              <div className="card-body d-flex justify-content-between flex-column">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top img-fluid w-50 p-3"
                  />
                </div>
                <div>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <div className="d-flex justify-content-between">
                  <Link to={`/product/${product.id}`} className="btn btn-success">
                    View Details
                  </Link>
                  <Button onClick={() => dispatch(addtocart())} variant="contained" color="success">
                    <AddShoppingCartIcon/>
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;