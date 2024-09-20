import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../Product/ProductCard";

export default function Collection() {
  const {
    products,
    categories,
    selectedCategory,
    sortOrder,
    currentPage,
    totalProducts,
    noMatch,
    searchQuery,
    setSelectedCategory,
    setSortOrder,
    setCurrentPage,
    setSearchQuery,
    fetchProducts,
    limit,
  } = useContext(ProductContext);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setCurrentPage(1);
    fetchProducts(category, sortOrder, 1, searchQuery);
  };

  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    setSortOrder(sortOrder);
    setCurrentPage(1);
    fetchProducts(selectedCategory, sortOrder, 1, searchQuery);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") {
      fetchProducts(selectedCategory, sortOrder, 1, "");
    }
  };

  const handleSearchSubmit = () => {
    setCurrentPage(1);
    fetchProducts(selectedCategory, sortOrder, 1, searchQuery);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProducts / limit)) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchProducts(selectedCategory, sortOrder, nextPage, searchQuery);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchProducts(selectedCategory, sortOrder, prevPage, searchQuery);
    }
  };

  return (
    <div className="bg-white container mx-auto p-4 text-black">
      <div className="text-black flex gap-4 items-center mb-6 max-w-7xl mx-auto">
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border rounded p-2"
          />
          <button
            onClick={handleSearchSubmit}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        <div>
          <label className="mr-4">Category:</label>
          <select
            onChange={handleCategoryChange}
            className="border rounded p-2"
            value={selectedCategory}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-4">Sort by Price:</label>
          <select
            onChange={handleSortChange}
            className="border rounded p-2"
            value={sortOrder}
          >
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      {noMatch ? (
        <div className="text-red-500 text-lg font-bold">
          No products matched your search.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.thumbnail}
                name={product.title}
                price={product.price || "N/A"}
                width={300}
                height={300}
              />
            ))}
          </div>
        </>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePreviousPage}
          className="border px-4 py-2 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(totalProducts / limit)}
        </span>
        <button
          onClick={handleNextPage}
          className="border px-4 py-2 rounded"
          disabled={currentPage === Math.ceil(totalProducts / limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
