import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [id]);

  if (!product) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="p-5 w-full max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-black text-white rounded"
      >
        Back
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full max-w-md h-auto mb-5 rounded"
      />

      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="mb-4 text-gray-700 w-full md:w-[70%]">
        {product.description}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10">
        <p>Price: ${product.price}</p>
        <p className="mt-2 sm:mt-0">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;
