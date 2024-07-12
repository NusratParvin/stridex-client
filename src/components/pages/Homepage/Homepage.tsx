import Carousel from "./Carousel";
import ContactUs from "./ContactUs";
import FeaturedProducts from "./FeaturedProdutcs";
import ShopByCategory from "./ShopByCategory";

export const Homepage = () => {
  return (
    <div className="bg-gray-100">
      <Carousel />
      <FeaturedProducts />
      <ShopByCategory />
      <ContactUs />
    </div>
  );
};
