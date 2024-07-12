import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Shoes",
    image: "/src/assets/images/products/shoes/shoes.jpg",
    link: "/all-products?category=shoes",
  },
  {
    id: 2,
    name: "Apparel",
    image: "/src/assets/images/products/apparel/apparel.jpg",
    link: "/all-products?category=apparel",
  },
  {
    id: 3,
    name: "Equipment",
    image: "/src/assets/images/products/equipment/treadmill.jpg",
    link: "/all-products?category=equipment",
  },
  {
    id: 4,
    name: "Accessories",
    image: "/src/assets/images/products/accessories/tracker.jpg",
    link: "/all-products?category=accessories",
  },
];

const ShopByCategory = () => {
  return (
    <section className="my-20 py-8 mx-auto">
      <h2 className="text-5xl text-center mb-16">Shop By Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden   shadow-lg group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-[80vh] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <Link to={category.link}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="text-white text-5xl font-semibold mb-4 transform translate-y-full group-hover:-translate-y-32 
                
                 transition-transform duration-500"
                >
                  {category.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
