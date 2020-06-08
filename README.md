# Đồ án cá nhân chủ đề Blockchain
Xây dựng hệ thống tiền điện tử bằng công nghệ Blockchain <br>
- Tài liệu tham khảo: các slide và cái video bài giảng của giáo viên hướng dẫn về chủ đề này
- Đồ án được viết bằng framework ReactJS trên nền web

## Cài đặt module/dependency
`npm install`

## Chạy chương trình
`npm start`

# Các chức năng của project
## Tạo ví
- Chỉ cần dùng tên là có thể tạo ra ví mới (không sử dụng username/passwork)
- Ví khi mới tạo ra sẽ có trạng thái là disconnect và số coin là 0
- Nếu muốn kết nối vào hệ thống thì chỉ cần nhấn vào nút disconnect thì ví sẽ được connect.
Lưu ý: Khi ví disconnect thì không thể xem các block trong block chain. Nếu connect thì có thể xem và sẽ được cập nhật các block mới nhất.
## Xem thống kê tài khoản
- Hệ thống sẽ ghi nhận lại số tiền điện tử được chuyển và nhận của mỗi ví trong mỗi lần giao dịch với ví khác
## Gởi coin cho một địa chỉ khác
- Gởi tiền điện tử cho các ví trong cùng mạng lưới
- Sử dụng thuật toán Proof of work (chỉ sử dụng độ khó trong việc đào là 1)
- Nếu chỉ có 1 ví thì không thể chuyển tiền
- Nếu có 2 ví thì sẽ chuyển tiền được nhưng không thể tìm được miner
- Nếu có 3 ví trở lên khi chuyển tiền sẽ tìm được miner(random 1 ví ngẫu nhiên trong các ví còn lại)
- Sau mỗi lần gửi tiền thì mỗi giao dịch sẽ được thêm vào hệ thống blockchain
Xem lịch sử giao dịch
- Mỗi giao dịch sẽ được thêm vào lịch sử giao dịch.
