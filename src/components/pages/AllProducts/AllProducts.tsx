import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TProduct } from "@/types";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import SingleProduct from "./SingleProduct";
import { Spinner } from "@/components/ui/spinner";
import { useLocation } from "react-router-dom";

const AllProducts = () => {
  const location = useLocation();

  //url query
  const query = new URLSearchParams(location.search);
  const initialCategory = query.get("category") || "";

  // state initialization
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: initialCategory,
    priceRange: "",
    brand: "",
    rating: "",
  });
  const [sortOrder, setSortOrder] = useState("");

  const { data, error, isLoading } = useGetAllProductsQuery();
  const products: TProduct[] = (data?.data as TProduct[]) || [];

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: initialCategory,
    }));
  }, [initialCategory]);

  // handle func  input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const clearFilters = () => {
    setFilters({ category: "", priceRange: "", brand: "", rating: "" });
    setSortOrder("");
    setSearchQuery("");
  };

  // filter products- search and filter
  const filteredProducts = products
    .filter((product: TProduct) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (product: TProduct) =>
        !filters.category ||
        filters.category === "All" ||
        product.category.toLowerCase() === filters.category.toLowerCase()
    )
    .filter(
      (product: TProduct) =>
        !filters.priceRange ||
        filters.priceRange === "All" ||
        product.price <= Number(filters.priceRange)
    )
    .filter(
      (product: TProduct) =>
        !filters.brand ||
        filters.brand === "All" ||
        product.brand.toLowerCase() === filters.brand.toLowerCase()
    )
    .filter(
      (product: TProduct) =>
        !filters.rating ||
        filters.rating === "All" ||
        product.rating >= Number(filters.rating)
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const filterOptions = {
    category: ["All", "Footwear", "Apparel", "Equipment", "Accessories"],
    priceRange: ["All", "50", "100", "200", "500"],
    brand: ["All", "Nike", "Adidas", "Puma", "Reebok"],
    rating: ["All", "1", "2", "3", "4", "5"],
  };

  return (
    <div className="w-full lg:w-11/12 mx-auto py-24 my-8">
      <h2 className="text-4xl text-center pb-8 uppercase">All Products</h2>

      <div className="flex bg-gray-100 py-12 px-8 md:flex-row flex-col">
        <div className="md:w-1/4 w-full pr-4 md:pb-0 pb-12">
          <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

          <div className="mb-4 pt-2">
            <select
              name="category"
              value={filters.category}
              onChange={handleInputChange}
              className="border py-1 px-2 w-full"
            >
              <option value="">Category</option>
              {filterOptions.category.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <select
              name="priceRange"
              value={filters.priceRange}
              onChange={handleInputChange}
              className="border py-1 px-2 w-full"
            >
              <option value="">Price Range</option>
              {filterOptions.priceRange.map((option) => (
                <option key={option} value={option}>
                  {option !== "All" ? `$${option} and below` : option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <select
              name="brand"
              value={filters.brand}
              onChange={handleInputChange}
              className="border py-1 px-2 w-full"
            >
              <option value="">Brand</option>
              {filterOptions.brand.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <select
              name="rating"
              value={filters.rating}
              onChange={handleInputChange}
              className="border py-1 px-2 w-full"
            >
              <option value="">Rating</option>
              {filterOptions.rating.map((option) => (
                <option key={option} value={option}>
                  {option !== "All" ? `${option} star and above` : option}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={clearFilters}
            className="bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition duration-300 w-full"
          >
            Clear Filters
            <FontAwesomeIcon icon={faTimes} className="ml-2" />
          </button>
        </div>
        <main className="md:w-3/4 w-full ps-4">
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row justify-between items-center mb-4 md:gap-0 gap-2">
              <div className="md:w-1/3 w-1/2 flex items-center gap-2">
                <label className="font-semibold">Search: </label>
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border py-1 px-2 w-full"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute top-3 right-3"
                />
              </div>

              <div className="md:w-1/3 w-1/2">
                <select
                  name="sortOrder"
                  value={sortOrder}
                  onChange={handleSortChange}
                  className="border py-1 px-2 w-full"
                >
                  <option value="">Sort By Price</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>

            {/* {isLoading ? (
              <div className="flex justify-center items-center py-6">
                <Spinner />
              </div>
            ) : error ? (
              <div className="flex justify-center items-center py-6">
                <AlertDestructive message="There was an error loading the products. Please try again later." />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-6">
                {filteredProducts.map((product) => (
                  <SingleProduct key={product._id} product={product} />
                ))}
              </div>
            )} */}

            {isLoading ? (
              <div className="flex justify-center items-center py-6">
                <Spinner />
              </div>
            ) : error ? (
              <div className="flex justify-center items-center py-6">
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">
                    There was an error loading the products. Please try again
                    later.
                  </span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-6">
                {filteredProducts.map((product) => (
                  <SingleProduct key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllProducts;
