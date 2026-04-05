import { useProducts } from "../features/products/hooks/useProducts";
import SearchBar from "../features/searchBar/searchBar";

const Home = () => {
  const { data, isLoading, error} = useProducts();

  if(isLoading) return <div>Loading...</div>;
  if(error) return <div> Failed to load</div>;

  return (<>
  <div>
    <SearchBar/>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
    {data?.map((product) => {
      return (
        <div
          key={`product.id`}
          className="w-[300px] bg-white rounded-2xl shadow-sm hover:shadow-md transition p-3"
        >
          {/* Image container (square) */}
          <div className="w-full aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img
              src={product.image.url}
              alt={product.image.description}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product info */}
          <div className="mt-3 space-y-1">
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {product.name}
            </h3>

            <div className="text-lg font-semibold text-green-600">
              ₹{product.price}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</>
  )
}

export default Home;