import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
// import "./components/directory/directory.styles.scss";
const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
