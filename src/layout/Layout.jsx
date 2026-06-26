import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      <main
        className="mx-auto bg-primary 
      w-full md:max-w-2xl lg:max-w-6xl 
      px-6 lg:px-8"
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
