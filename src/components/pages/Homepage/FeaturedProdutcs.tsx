import SingleProductCard from "./SingleProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      category: "Running",
      stockQuantity: 50,
      brand: "Nike",
      rating: 4.5,
      description: "High-quality running shoes",
      price: 120,
      image: "/src/assets/images/1.jpg",
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Running",
      stockQuantity: 50,
      brand: "Nike",
      rating: 2.8,
      description: "High-quality running shoes",
      price: 120,
      image: "/src/assets/images/2.jpg",
    },
  ];

  return (
    <section className=" my-16 py-8 md:w-11/12 w-full mx-auto ">
      <h4 className="text-2xl tracking-widest text-center pb-4">OUR SHOP</h4>
      <h2 className="text-5xl text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16">
        {products.map((product) => (
          <SingleProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
