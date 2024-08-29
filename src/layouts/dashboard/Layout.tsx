import { Carrer } from "@/components/carrer";
import { Navbar } from "@/components/navigation";
import { Profile } from "@/components/profle";

const Layout = () => {
  return (
    <div className="mx-auto md:flex md:11/12 pb-32">
      <Navbar />
      <Profile />
      <Carrer />
    </div>
  );
};

export default Layout;
