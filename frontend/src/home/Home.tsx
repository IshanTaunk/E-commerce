//import { useProducts } from "../features/products/hooks/useProducts";
import BookingBar from "../features/searchBar/searchBar";

const Home = () => {
  //const { data, isLoading, error} = useProducts();

  //if(isLoading) return <div>Loading...</div>;
  //if(error) return <div> Failed to load</div>;

  return (<>
  <div>
    <BookingBar/>
  </div>
</>
  )
}

export default Home;