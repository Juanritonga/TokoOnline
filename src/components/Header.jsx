import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        {/* Logo dan Nama */}
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src="./juan.png"
            alt="Logo"
            className="mr-4 w-10 sm:w-14 md:w-18 lg:w-22 transform hover:scale-105 transition duration-300"
          />
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">ONLINE SHOP</h1>
            <p className="text-xs sm:text-sm text-gray-500">Juanda Ritonga</p>
          </div>
        </div>

        {/* Menu dan Ikon */}
        <div className="flex items-center space-x-6 text-lg">
          <Link
            to="/akun"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition duration-300"
          >
            <i className="fas fa-user"></i>
            <span>My Account</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition duration-300"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
