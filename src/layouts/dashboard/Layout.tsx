import { Navbar } from "@/components/navigation";
import { Profile } from "@/components/profle";

const Layout = () => {
  return (
    <div className="mx-auto md:flex md:11/12">
      <Navbar />
      <Profile />
    </div>
  );
};

export default Layout;
