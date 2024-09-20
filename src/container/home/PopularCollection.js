import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Product/ProductCard";
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify(arr, n, i) {
  let smallest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left].rating < arr[smallest].rating) {
    smallest = left;
  }

  if (right < n && arr[right].rating < arr[smallest].rating) {
    smallest = right;
  }

  if (smallest !== i) {
    swap(arr, i, smallest);
    heapify(arr, n, smallest);
  }
}

function buildMinHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

const PopularCollection = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        let heap = [];

        for (let product of products) {
          heap.push(product);
          if (heap.length > 8) {
            buildMinHeap(heap);
            heap.pop();
          }
        }
        heap.sort((a, b) => b.rating - a.rating);
        setTopProducts(heap);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchTopRatedProducts();
  }, []);

  return (
    <div className="bg-white container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Popular Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto my-12">
        {topProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.thumbnail}
            name={product.title}
            price={product.price}
            width={300}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCollection;
