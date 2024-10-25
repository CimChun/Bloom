import React from "react";
import Footer from "./footer";

function SearchProducts() {
  return (
    <div>
      <div className="container mx-auto md:px-6 px-4 py-8">
        {/* Giới thiệu */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Giới thiệu về Xịt Thơm Bloom
          </h2>
          <img
            src="https://res.cloudinary.com/dxkwzxyb5/image/upload/v1729874951/Untitled-4_1_sji0fp.png"
            alt="Xịt Thơm Bloom"
            className="w-1/4 h-auto mb-4 rounded-lg shadow-lg mx-auto"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            Xịt thơm Bloom là một sản phẩm đặc biệt được chế tạo từ các thành
            phần tự nhiên, mang đến hương thơm tươi mát và dễ chịu. Sản phẩm
            không chỉ giúp bạn tự tin hơn mà còn tạo cảm giác thư giãn mỗi khi
            sử dụng.
          </p>
        </section>

        {/* Hướng dẫn sử dụng */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Hướng dẫn sử dụng</h2>
          <img
            src="https://cdn.tgdd.vn/News/Thumb/0/cach-su-dung-xit-phong-de-thom-lau-va-nhung-luu-y-thumb-1200x628.jpg"
            alt="Hướng dẫn sử dụng"
            className="w-1/2 h-auto mb-4 rounded-lg shadow-lg mx-auto"
          />
          <ol className="list-decimal list-inside text-gray-700 mb-4">
            <li>
              Xịt một lượng vừa đủ lên cơ thể, quần áo hoặc trong không gian
              phòng.
            </li>
            <li>Tránh xịt trực tiếp lên mặt hoặc vùng da nhạy cảm.</li>
            <li>Sử dụng hàng ngày để tận hưởng hương thơm lâu dài.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hãy thử nghiệm và cảm nhận sự khác biệt mà Bloom mang lại, để tự tin
            hơn mỗi ngày và thu hút mọi ánh nhìn xung quanh.
          </p>
        </section>

        {/* Mẹo kết hợp hương thơm */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Mẹo kết hợp hương thơm
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Kết hợp với kem dưỡng ẩm để tạo hương thơm lâu hơn.</li>
            <li>
              Sử dụng các sản phẩm chăm sóc cơ thể có hương hoa lan để tăng
              cường mùi hương.
            </li>
            <li>
              Xịt một chút lên tóc để tạo điểm nhấn thơm mát trong suốt cả ngày.
            </li>
          </ul>
        </section>

        {/* Thành phần */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Thành phần của nước xịt thơm
          </h2>

          <p className="text-gray-700 mb-4">
            Nước xịt thơm Bloom được làm từ hương thơm cao cấp cùng với các
            thành phần phụ liệu như:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
              <strong>Nước:</strong> Giúp phân tán và hòa tan các dung dịch.
            </li>
            <li>
              <strong>Cồn thơm:</strong> Giúp phân tán hương thơm nhanh chóng,
              mang lại cảm giác tươi mát.
            </li>
            <li>
              <strong>Hương thơm cao cấp:</strong> Sử dụng các loại hương cao
              cấp để tạo nên hương thơm đặc trưng.
            </li>
            <li>
              <strong>Phụ liệu:</strong> Các thành phần khác giúp cải thiện độ
              bám hương và an toàn cho da.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Hương thơm cao cấp giúp tăng cường sự tự tin và thu hút mọi ánh nhìn
            xung quanh.
          </p>
        </section>

        {/* Hạn sử dụng và cách bảo quản */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Hạn sử dụng và cách bảo quản
          </h2>
          <p className="text-gray-700 mb-4">
            - Hạn sử dụng: 3 năm kể từ ngày sản xuất.
            <br />- Cách bảo quản: Để nơi khô ráo, tránh ánh nắng trực tiếp và
            nhiệt độ cao. Bảo quản đúng cách sẽ giúp sản phẩm duy trì hương thơm
            lâu dài.
          </p>
          
        </section>

        {/* Các loại hương */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Các loại hương của Bloom
          </h2>
          <p className="text-gray-700 mb-4">
            Xịt thơm Bloom có nhiều loại hương đa dạng, bao gồm:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Blossom Breeze Mang đến không khí mùa xuân quanh năm với Blossom
              Breeze. Hương hoa tươi mát này giúp bạn bừng sáng vẻ đẹp tự nhiên,
              lan tỏa sự rạng rỡ và tinh tế với mỗi lần xịt. Lựa chọn hoàn hảo
              cho những ai yêu thích hương thơm nhẹ nhàng, cuốn hút.
            </li>
            <li>
            Citrus Glow
Khởi động ngày mới cùng Citrus Glow – một làn sóng năng lượng từ hương cam chanh sảng khoái. Mùi hương tươi mới, tràn đầy sức sống này sẽ giúp bạn thêm tự tin, hứng khởi, và ngập tràn năng lượng.
            </li>
            <li>
            Midnight Bloom
            Đắm chìm trong vẻ huyền bí với Midnight Bloom. Hương thơm hoa đầy cuốn hút này gợi lên sự quyến rũ, bí ẩn, lý tưởng cho những ai yêu thích nét thanh lịch, lôi cuốn. Hãy để mùi hương này làm bạn thêm phần nổi bật trong những dịp đặc biệt.
            </li>
            <li>
            Sweetie
            Tận hưởng sự ấm áp, ngọt ngào từ Sweetie. Hương sweetie dịu nhẹ như một lời thì thầm đầy yêu thương, hoàn hảo cho những phút giây thư giãn, thêm chút ngọt ngào và dễ chịu cho ngày dài.
            </li>
          
          </ul>
          {/* Danh sách hình ảnh cho các loại hương */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <img
              src="https://res.cloudinary.com/dxkwzxyb5/image/upload/v1729875739/sweetie-02_j4qqbc.png"
              alt="Hương vani, gỗ tuyết tùng và oải hương"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://res.cloudinary.com/dxkwzxyb5/image/upload/v1729875736/midnight-02_a85bru.png"
              alt="Hương biển cả, lô hội và tinh dầu bưởi"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://res.cloudinary.com/dxkwzxyb5/image/upload/v1729875735/blossom-02_e8mwqz.png"
              alt="Hương biển cả, lô hội và tinh dầu bưởi"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://res.cloudinary.com/dxkwzxyb5/image/upload/v1729875735/Cirtus-02_fvmfyk.png"
              alt="Hương biển cả, lô hội và tinh dầu bưởi"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default SearchProducts;
