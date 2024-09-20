import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [noMatch, setNoMatch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [productDetail, setProductDetail] = useState(null);
  const limit = 9;
  const fetchProducts = (category = "", sort = "", page = 1, search = "") => {
    setNoMatch(false);
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${
      (page - 1) * limit
    }`;

    if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${
        (page - 1) * limit
      }`;
    }

    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${
        (page - 1) * limit
      }`;
    }

    if (sort) {
      url += `&sortBy=price&order=${sort}`;
    }

    axios
      .get(url)
      .then((response) => {
        const fetchedProducts = response.data.products;

        if (fetchedProducts.length === 0) {
          setNoMatch(true);
        } else {
          setProducts(fetchedProducts);
          setTotalProducts(response.data.total);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  };
  const fetchProductDetail = (id) => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  };
  useEffect(() => {
    fetchProducts();
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        selectedCategory,
        sortOrder,
        currentPage,
        totalProducts,
        noMatch,
        searchQuery,
        productDetail,
        setSelectedCategory,
        setSortOrder,
        setCurrentPage,
        setSearchQuery,
        fetchProducts,
        fetchProductDetail,
        limit,
        setNoMatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
