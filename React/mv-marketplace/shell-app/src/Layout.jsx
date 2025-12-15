import Header from "package/Header";
import Button from "package/Button";

const Layout = ({ children }) => (
  <>
    <Header />
    <Button>Add to Cart</Button>
    <main className="p-6">{children}</main>
  </>
);

export default Layout;
