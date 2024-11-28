import makeup from "../data/makeupdata"; // Sesuaikan path sesuai struktur folder Anda
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import { useState } from "react"; // Import useState untuk menambahkan status pencarian

const Makeup = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan kata kunci pencarian
  const [priceFilter, setPriceFilter] = useState(""); // State untuk menyimpan pilihan filter harga
  const [addedToCart, setAddedToCart] = useState(false); // State untuk melacak produk yang berhasil ditambahkan

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fungsi untuk menangani perubahan filter harga
  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  // Filter produk berdasarkan kata kunci pencarian
  let filteredProducts = makeup.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Menambahkan filter harga terendah hingga tertinggi
  if (priceFilter === "lowToHigh") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (priceFilter === "highToLow") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Menangani penambahan produk ke keranjang
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true); // Set status berhasil ditambahkan
    setTimeout(() => setAddedToCart(false), 2000); // Menghilangkan pesan setelah 2 detik
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center mb-4 mt-0 px-4 flex-wrap">
        {/* Menyusun h2 di kiri */}
        <h2 className="text-2xl font-bold w-full sm:w-auto mt-5">
          Makeup Product
        </h2>

        <div className="flex items-center w-full sm:w-auto mt-5 sm:mt-5">
          {/* Form pencarian */}
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded px-2 py-1 w-32 sm:w-48 md:w-64 mr-4"
          />

          {/* Filter harga */}
          <select
            value={priceFilter}
            onChange={handlePriceChange}
            className="border rounded px-2 py-1"
          >
            <option value="">Filter Harga</option>
            <option value="lowToHigh">Harga Terendah ke Tertinggi</option>
            <option value="highToLow">Harga Tertinggi ke Terendah</option>
          </select>
        </div>
      </div>

      {/* Pesan berhasil ditambahkan ke keranjang */}
      {addedToCart && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          <p>Berhasil Ditambahkan!</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Menampilkan produk jika ada hasil pencarian */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded">
              <div className="flex flex-col h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-600">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <div className="mt-4 flex justify-between">
                  <Link
                    to={`/makeup/${product.id}`} // Mengarahkan ke halaman detail produk
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Beli
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)} // Menambah produk ke keranjang
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            Produk tidak ditemukan
          </p>
        )}
      </div>
    </div>
  );
};

Makeup.propTypes = {
  addToCart: PropTypes.func.isRequired, // Validasi bahwa addToCart adalah fungsi yang dibutuhkan
};

export default Makeup;
