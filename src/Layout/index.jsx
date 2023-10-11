import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#000428] to-[#004e92] h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
