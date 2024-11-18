import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addtocart } from "../../slices/add-cart/addCartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  console.log(count, "counter")

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="card h-100 p-5">
        <div className="card-body d-flex justify-content-center align-items-center ">
          <div className="text-center">
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top img-fluid w-50"
            />
          </div>
          <div>
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">Category: {product.category}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Price: ${product.price} </strong>
            <strong> Quantity: {count.value}</strong>
          </p>
      <button class="btn btn-dark"  onClick={()=> dispatch(addtocart())} >Add Quantity</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
