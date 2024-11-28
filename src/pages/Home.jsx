import promotion from "../data/promotiondata";
import pants from "../data/pantsdata";
import electronics from "../data/electronicsdata";
import clothes from "../data/clothesdata";
import makeup from "../data/makeupdata";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import { useState } from "react";



const Home = ({ addToCart }) => {

  const [addedToCart, setAddedToCart] = useState("");

  // Fungsi untuk menambahkan produk ke keranjang dan menampilkan pesan
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(`${product.name} berhasil ditambahkan ke keranjang!`);
    setTimeout(() => setAddedToCart(""), 3000); // Menyembunyikan pesan setelah 3 detik
  };

  
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto px-4 py-8">
      {addedToCart && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
            {addedToCart}
          </div>
        )}
        {/* Featured Section */}
        <section className="mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div key={promotion[0].id} className="col-span-2">
              <img
                src={promotion[0].image}
                alt={promotion[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <img
                key={promotion[1].id}
                src={promotion[1].image}
                alt={promotion[1].name}
                className="w-full h-full object-contain"
              />
              <img
                key={promotion[2].id}
                src={promotion[2].image}
                alt={promotion[2].name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Deals of the Day */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Deals of the Day</h2>

          {/* Grid untuk Deals of the Day */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Card pertama: Electronics */}
            <div
              key={electronics[0].id}
              className="bg-white p-4 shadow rounded"
            >
              <div className="flex flex-col h-full">
                <img
                  src={electronics[0].image}
                  alt={electronics[0].name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {electronics[0].name}
                </h3>
                <p className="text-blue-600">
                  {electronics[0].price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/electronics/${electronics[0].id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Beli
                  </Link>
                  <button
                    onClick={() => handleAddToCart(electronics[0])}
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>

            {/* Card kedua: Pakaian */}
            <div key={clothes[0].id} className="bg-white p-4 shadow rounded">
              <div className="flex flex-col h-full">
                <img
                  src={clothes[0].image}
                  alt={clothes[0].name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {clothes[0].name}
                </h3>
                <p className="text-blue-600">
                  {clothes[0].price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/pakaian/${clothes[0].id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Beli
                  </Link>
                  <button
                    onClick={() => handleAddToCart(clothes[0])} // Menambah produk ke keranjang
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>

            {/* Card ketiga: Celana */}
            <div key={pants[4].id} className="bg-white p-4 shadow rounded">
              <div className="flex flex-col h-full">
                <img
                  src={pants[4].image}
                  alt={pants[4].name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{pants[4].name}</h3>
                <p className="text-blue-600">
                  {pants[4].price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/celana/${pants[4].id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Beli
                  </Link>
                  <button
                    onClick={() => handleAddToCart(pants[4])} // Menambah produk ke keranjang
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>

            {/* Card keempat: Makeup */}
            <div key={makeup[1].id} className="bg-white p-4 shadow rounded">
              <div className="flex flex-col h-full">
                <img
                  src={makeup[1].image}
                  alt={makeup[1].name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{makeup[1].name}</h3>
                <p className="text-blue-600">
                  {makeup[1].price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/makeup/${makeup[1].id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Beli
                  </Link>
                  <button
                    onClick={() => handleAddToCart(makeup[1])} // Menambah produk ke keranjang
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {electronics
                .filter((product) =>
                  product.name.toLowerCase().includes("sony")
                ) // Menampilkan hanya produk dengan nama "Sony"
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-blue-500 text-white p-8 rounded flex flex-col md:flex-row items-center justify-between mb-4"
                  >
                    <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                      <h3 className="text-2xl font-bold mb-4">
                        {product.name}
                      </h3>
                      <p className="text-lg mb-6">
                        Premium sound with cutting-edge speaker features
                      </p>
                      <div className="text-xl font-semibold text-yellow-400 mb-4">
                        Special Offer:{" "}
                        <span className="line-through">
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </span>
                        <strong>
                          {(product.price * 0.9).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </strong>{" "}
                        {/* Harga diskon */}
                      </div>
                      <Link
                    to={`/electronics/${electronics[11].id}`}
                    className="bg-gray-50 text-center text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                  >
                    Buy Now
                  </Link>
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-40 h-auto object-contain rounded-md mb-4 md:mb-0 md:w-1/2"
                    />
                  </div>
                ))}
            </div>
            <div>
              {electronics
                .filter((product) =>
                  product.name.toLowerCase().includes("samsung")
                ) // Menampilkan hanya produk dengan nama "Samsung"
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-orange-500 text-white p-8 rounded flex flex-col md:flex-row items-center justify-between mb-4"
                  >
                    <div className="flex flex-col w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                      <h3 className="text-2xl font-bold mb-4">
                        {product.name}
                      </h3>
                      <p className="text-lg mb-6">
                        The best tech for your home entertainment
                      </p>
                      <div className="text-xl font-semibold text-yellow-400 mb-4">
                        Special Offer:{" "}
                        <span className="line-through">
                          {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </span>
                        <strong>
                          {(product.price * 0.85).toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })}
                        </strong>{" "}
                        {/* Harga diskon */}
                      </div>
                      <Link
                    to={`/electronics/${electronics[11].id}`}
                    className="bg-gray-50 text-center text-black py-2 px-4 rounded hover:bg-gray-200 transition"
                  >
                    Buy Now
                  </Link>
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-40 h-auto object-contain rounded-md mb-4 md:mb-0 md:w-1/2"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
      
      {/* Grid pertama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
        
        {/* Card pertama: Electronics */}
        <div key={electronics[1].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={electronics[1].image}
              alt={electronics[1].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{electronics[1].name}</h3>
            <p className="text-blue-600">
              {electronics[1].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/electronics/${electronics[1].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(electronics[1])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card kedua: Pakaian */}
        <div key={clothes[2].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={clothes[2].image}
              alt={clothes[2].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{clothes[2].name}</h3>
            <p className="text-blue-600">
              {clothes[2].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/pakaian/${clothes[2].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(clothes[2])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card ketiga: Celana */}
        <div key={pants[3].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={pants[3].image}
              alt={pants[3].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{pants[3].name}</h3>
            <p className="text-blue-600">
              {pants[3].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/celana/${pants[3].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(pants[3])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card keempat: Makeup */}
        <div key={makeup[4].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={makeup[4].image}
              alt={makeup[4].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{makeup[4].name}</h3>
            <p className="text-blue-600">
              {makeup[4].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/makeup/${makeup[4].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(makeup[4])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid kedua */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt5 mb-5">
        
        {/* Card kelima: Electronics */}
        <div key={electronics[5].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={electronics[5].image}
              alt={electronics[5].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{electronics[5].name}</h3>
            <p className="text-blue-600">
              {electronics[5].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/electronics/${electronics[5].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(electronics[5])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card keenam: Pakaian */}
        <div key={clothes[6].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={clothes[6].image}
              alt={clothes[6].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{clothes[6].name}</h3>
            <p className="text-blue-600">
              {clothes[6].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/pakaian/${clothes[6].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(clothes[6])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card ketujuh: Celana */}
        <div key={pants[7].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={pants[7].image}
              alt={pants[7].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{pants[7].name}</h3>
            <p className="text-blue-600">
              {pants[7].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/celana/${pants[7].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(pants[7])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card kedelapan: Makeup */}
        <div key={makeup[8].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={makeup[8].image}
              alt={makeup[8].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{makeup[8].name}</h3>
            <p className="text-blue-600">
              {makeup[8].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/makeup/${makeup[8].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(makeup[8])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Grid ketiga */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt5">
        
        {/* Card kelima: Electronics */}
        <div key={electronics[9].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={electronics[9].image}
              alt={electronics[9].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{electronics[9].name}</h3>
            <p className="text-blue-600">
              {electronics[9].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/electronics/${electronics[9].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(electronics[5])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card keenam: Pakaian */}
        <div key={clothes[3].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={clothes[3].image}
              alt={clothes[3].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{clothes[3].name}</h3>
            <p className="text-blue-600">
              {clothes[3].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/pakaian/${clothes[3].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(clothes[3])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card ketujuh: Celana */}
        <div key={pants[5].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={pants[5].image}
              alt={pants[5].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{pants[5].name}</h3>
            <p className="text-blue-600">
              {pants[5].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/celana/${pants[5].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(pants[5])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>

        {/* Card kedelapan: Makeup */}
        <div key={makeup[6].id} className="bg-white p-4 shadow rounded">
          <div className="flex flex-col h-full">
            <img
              src={makeup[6].image}
              alt={makeup[6].name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{makeup[6].name}</h3>
            <p className="text-blue-600">
              {makeup[6].price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
            </p>
            <div className="mt-4 flex justify-between">
              <Link to={`/makeup/${makeup[6].id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Beli
              </Link>
              <button onClick={() => handleAddToCart(makeup[6])} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
};

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
