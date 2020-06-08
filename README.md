This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Đồ án cá nhân chủ đề Blockchain
# Xây dựng hệ thống tiền điện tử
Tài liệu tham khảo: các slide và cái video bài giảng của giáo viên hướng dẫn về chủ đề này

## Cài đặt module/dependency
`npm install`

## Chạy chương trình
`npm start`

##Các chức năng của project
Tạo ví
- Chỉ cần dùng tên là có thể tạo ra ví mới (không sử dụng username/passwork)
- Ví khi mới tạo ra sẽ có trạng thái là disconnect và số coin là 0
- Nếu muốn kết nối vào hệ thống thì chỉ cần nhấn vào nút disconnect thì ví sẽ được connect.
Lưu ý: Khi ví disconnect thì không thể xem các block trong block chain. Nếu connect thì có thể xem và sẽ được cập nhật các block mới nhất.
Xem thống kê tài khoản
- Hệ thống sẽ ghi nhận lại số tiền điện tử được chuyển và nhận của mỗi ví trong mỗi lần giao dịch với ví khác
Gởi coin cho một địa chỉ khác
- Gởi tiền điện tử cho các ví trong cùng mạng lưới
- Sử dụng thuật toán Proof of work (chỉ sử dụng độ khó trong việc đào là 1)
- Nếu chỉ có 1 ví thì không thể chuyển tiền
- Nếu có 2 ví thì sẽ chuyển tiền được nhưng không thể tìm được miner
- Nếu có 3 ví trở lên khi chuyển tiền sẽ tìm được miner(random 1 ví ngẫu nhiên trong các ví còn lại)
- Sau mỗi lần gửi tiền thì mỗi giao dịch sẽ được thêm vào hệ thống blockchain
Xem lịch sử giao dịch
- Mỗi giao dịch sẽ được thêm vào lịch sử giao dịch
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
