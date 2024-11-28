
const electronicsData = [
  {
    id: 1,
    name: "Smartphone",
    price: 2999900,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-WcyAndbU8VUg6nM94GenNTA7FKRP-jd9RO5RxEAa8FmLOycIfsAlWYLOMgLkKaw_hobzbfn448-8B7UmWtM5H6-1EnU0MWffD2lF-8eRMlbSKFPA5yWudqk&usqp=CAE",
    description: "Smartphone terbaru yang dirancang untuk memenuhi kebutuhan gaya hidup digital Anda.",
  },
  {
    id: 2,
    name: "Laptop",
    price: 7999900,
    image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lt3lsa7bz31j52@resize_w450_nl.webp",
    description: "Laptop dengan spesifikasi tinggi yang dirancang untuk memenuhi kebutuhan kerja dan hiburan.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 499900,
    image: "https://down-id.img.susercontent.com/file/id-11134207-7rasb-m2w4wb9yebrl56@resize_w450_nl.webp",
    description: "Speaker Bluetooth portabel dengan suara berkualitas tinggi dan bass yang kuat. Sehingga bersemangat.",
  },
  // Tambahkan lebih banyak data produk jika diperlukan
];

const OrderHistoryPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Order History</h1>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {electronicsData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-contain"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-blue-600">
                    Rp {item.price.toLocaleString()}
                  </span>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-600 transition duration-300">
                    Sukses
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
