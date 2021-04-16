import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-header pt-2">
      <div className="container">
        <h1 className="logo">
          Garden<span className="text-primary">.</span>
        </h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
