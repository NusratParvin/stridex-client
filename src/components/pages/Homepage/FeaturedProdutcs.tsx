import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import SingleProductCard from "./SingleProductCard";
import { TProduct } from "@/types";

const FeaturedProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  console.log(data);
  // const products: TProduct[] = data?.data || [];

  const products: TProduct[] = (data?.data as TProduct[]) || [];

  const featuredProducts = [...products].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <section className=" my-16 py-8 md:w-11/12 w-full mx-auto ">
      <h4 className="text-2xl tracking-widest text-center pb-4">OUR SHOP</h4>
      <h2 className="text-5xl text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16">
        {featuredProducts?.map((product) => (
          <SingleProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
