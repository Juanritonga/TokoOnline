import { useParams, useNavigate } from "react-router-dom"; // useNavigate untuk navigasi
import makeup from "../data/makeupdata"; // Sesuaikan path data Anda
import { useEffect, useState } from "react"; // Untuk efek samping

const DetailMakeup = () => {
  const { id } = useParams(); // Mengambil id produk dari URL
  const navigate = useNavigate(); // Untuk kembali ke halaman sebelumnya
  const [quantity, setQuantity] = useState(1); // State untuk jumlah produk
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  // Pastikan id adalah angka valid
  const product = makeup.find((item) => item.id === parseInt(id, 10));

  useEffect(() => {
    // Redirect jika id tidak valid
    if (!product) {
      alert("Produk tidak ditemukan, Anda akan diarahkan kembali.");
      navigate("/"); // Arahkan ke halaman utama atau halaman lain yang sesuai
    }
  }, [product, navigate]);

  const totalPrice = product ? product.price * quantity : 0;

  // Fungsi untuk menangani perubahan jumlah produk
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // Fungsi untuk menangani pembayaran
  const handlePayment = () => {
    setPaymentSuccess(true); // Menampilkan animasi pembayaran berhasil
    setTimeout(() => {
      setPaymentSuccess(false); // Sembunyikan animasi setelah 4 detik
    }, 4000); // Waktu animasi 4 detik
  };

  // Render fallback jika product tidak ada
  if (!product) {
    return null; // Jangan tampilkan apa pun (akan di-redirect)
  }

  return (
    <div className="p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-contain mb-4"
        onError={(e) => {
          // Tambahkan fallback jika gambar gagal dimuat
          e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found";
        }}
      />
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <p className="text-lg text-blue-600">
        {product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>
      <p className="mt-4">{product.description}</p>

      <div className="mt-4">
        <label htmlFor="quantity" className="mr-2">Jumlah: </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="border rounded px-2 py-1 w-20"
        />
      </div>

      <div className="mt-4 text-lg font-semibold">
        <p>Total Pembayaran: {totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
        <button
        onClick={handlePayment}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-10"
      >
        Bayar
      </button>
        </p>
      </div>

      {paymentSuccess && (
        <div className="mt-4 p-6 bg-green-100 text-green-700 border border-green-500 rounded animate-paymentSuccess">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-2 text-xl font-semibold">Pembayaran Berhasil!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMakeup;
