import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";

export default function Root() {
  return (
    <div className="md:container mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
