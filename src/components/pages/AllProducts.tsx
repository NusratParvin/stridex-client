import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import SingleProductCard from "./Homepage/SingleProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    brand: "",
    rating: "",
  });
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    // Fetch products from an API or set a predefined list here
    // setProducts(fetchedProducts);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const clearFilters = () => {
    setFilters({ category: "", priceRange: "", brand: "", rating: "" });
    setSortOrder("");
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product) => !filters.category || product.category === filters.category
    )
    .filter(
      (product) => !filters.priceRange || product.price <= filters.priceRange
    )
    .filter((product) => !filters.brand || product.brand === filters.brand)
    .filter((product) => !filters.rating || product.rating >= filters.rating)
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Products</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearch}
            className="border p-2"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute top-3 right-3" />
        </div>
        <button
          onClick={clearFilters}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Clear Filters
          <FontAwesomeIcon icon={faTimes} className="ml-2" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">Category</option>
          <option value="shoes">Shoes</option>
          <option value="apparel">Apparel</option>
          <option value="equipment">Equipment</option>
          <option value="accessories">Accessories</option>
        </select>
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">Price Range</option>
          <option value="50">$50 and below</option>
          <option value="100">$100 and below</option>
          <option value="200">$200 and below</option>
          <option value="500">$500 and below</option>
        </select>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">Brand</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
          <option value="reebok">Reebok</option>
        </select>
        <select
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
          className="border p-2"
        >
          <option value="">Rating</option>
          <option value="1">1 star and above</option>
          <option value="2">2 stars and above</option>
          <option value="3">3 stars and above</option>
          <option value="4">4 stars and above</option>
          <option value="5">5 stars</option>
        </select>
        <select
          name="sortOrder"
          value={sortOrder}
          onChange={handleSortChange}
          className="border p-2"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <SingleProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
