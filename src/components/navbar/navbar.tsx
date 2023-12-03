import Link from "next/link";

import Container from "../ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const categoriesResponse = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl uppercase">Store</p>
          </Link>

          <MainNav data={categoriesResponse.categories} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;