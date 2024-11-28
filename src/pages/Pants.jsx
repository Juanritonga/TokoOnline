import pants from "../data/pantsdata"; // Sesuaikan path sesuai struktur folder Anda
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import { useState } from "react"; // Import useState untuk menangani status

const Pants = ({ addToCart }) => {
  // State untuk pencarian, sorting, kategori, dan loading
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("priceAsc");
  const [category] = useState(""); // Category filter
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState(""); // State untuk pesan sukses

  // Filter produk berdasarkan pencarian, kategori, dan sorting
  const filteredProducts = pants
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => {
      if (category) {
        return product.category.toLowerCase() === category.toLowerCase(); // Filter berdasarkan kategori
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "priceAsc") {
        return a.price - b.price;
      } else if (sortBy === "priceDesc") {
        return b.price - a.price;
      }
      return 0;
    });

  // Simulate loading state (example)
  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a delay of 1 second
  };

  // Trigger loading simulation when the page is rendered
  useState(() => {
    simulateLoading();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage("Berhasil ditambahkan!");
    setTimeout(() => {
      setSuccessMessage(""); // Hapus pesan setelah 2 detik
    }, 2000);
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center mb-4 mt-0 px-4 flex-wrap">
        {/* Menyusun h2 di kiri */}
        <h2 className="text-2xl font-bold w-full sm:w-auto mt-5">
          Pants Product
        </h2>

        <div className="flex items-center w-full sm:w-auto mt-5 sm:mt-5">
          {/* Form pencarian */}
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-2 py-1 w-32 sm:w-48 md:w-64 mr-4"
          />

          {/* Filter harga */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="priceAsc">Harga Terendah</option>
            <option value="priceDesc">Harga Tertinggi</option>
          </select>
        </div>
      </div>

      {/* Empty state if no products match the search */}
      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          <p>Produk tidak ditemukan</p>
        </div>
      )}

      {/* Menampilkan produk jika ada */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
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
                  to={`/celana/${product.id}`} // Mengarahkan ke halaman detail produk
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
        ))}
      </div>

      {/* Pesan Sukses */}
      {successMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
          {successMessage}
        </div>
      )}
    </div>
  );
};

Pants.propTypes = {
  addToCart: PropTypes.func.isRequired, // Validasi bahwa addToCart adalah fungsi yang dibutuhkan
};

export default Pants;
