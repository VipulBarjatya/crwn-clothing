import categories from "../../json/categories.json";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
};

export default Home;
