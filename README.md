# Quy trình làm việc trên GitHub với dự án ReactJS

**Lưu ý:** Để thực hiện các bước sau, bạn cần đã cài đặt Git và đã có tài khoản GitHub. Đảm bảo bạn đã cấu hình Git để làm việc với tài khoản GitHub của mình.

## Tạo Issue

1. Truy cập vào dự án trên GitHub.
2. Nhấp vào tab "Issues".
3. Nhấp vào nút "New Issue".
4. Đặt tiêu đề cho vấn đề của bạn và mô tả nó một cách rõ ràng và chi tiết.
5. Chọn các nhãn (labels) và người phụ trách (assignees) nếu cần.
6. Nhấp vào nút "Submit new issue" để tạo vấn đề mới.

## Tạo Branch

1. Đảm bảo bạn đang ở trạng thái đồng bộ với nhánh chính (master) bằng cách chạy lệnh sau trong thư mục dự án:
```
git checkout master
git pull --rebase origin master
```

2. Tạo một branch mới từ nhánh chính bằng cách chạy lệnh:
```
git checkout -b ten-branch
```
**Chú ý:** Thay `ten-branch` bằng tên branch thích hợp, ví dụ: `feat/#1-home-page`.

## Làm việc trên Branch

1. Mở dự án của bạn trên trình chỉnh sửa mã nguồn (ví dụ: Visual Studio Code).
2. Tiến hành thực hiện các thay đổi, bổ sung chức năng, sửa lỗi, v.v.
3. Lưu lại các thay đổi của bạn.

## Commit và Push

1. Mở cửa sổ dòng lệnh (terminal) và chuyển đến thư mục dự án của bạn.
2. Kiểm tra các tệp đã thay đổi bằng lệnh:
```
git status
```
3. Thêm các tệp đã thay đổi vào chỉ mục (index) để chuẩn bị commit:
```
git add .
```
4. Tiến hành commit với một thông điệp rõ ràng để mô tả các thay đổi của bạn:
```
git commit -m "Mô tả commit của bạn tại đây"
vd: commit -m "feat: #1 home page source code"
```
5. Push branch của bạn lên GitHub:
```
git push origin ten-branch
```


## Xử lý xung đột và tạo Merge Request

1. Truy cập vào dự án trên GitHub.
2. Nhấp vào tab "Pull requests".
3. Nhấp vào nút "New pull request".
4. Đảm bảo branch cơ sở (base branch) là `master`, và branch so sánh (compare branch) là branch bạn đã tạo
5. Xem xét các thay đổi và xử lý xung đột (nếu có).

Đối với mỗi tệp bị xung đột, bạn có thể chọn giữ thay đổi từ branch của bạn, giữ thay đổi từ branch cơ sở (master), hoặc kết hợp cả hai thay đổi.
Sau khi giải quyết xung đột cho tất cả các tệp, tiếp tục đến bước tiếp theo.
Kiểm tra lại các thay đổi và mô tả của bạn trên giao diện tạo Merge Request.
Nhấp vào nút `Create pull request` để tạo Merge Request.
Gán người phê duyệt (reviewers) nếu cần thiết và thêm bình luận để mô tả chi tiết về Merge Request.
Nhấp vào nút `Submit pull request` để gửi Merge Request cho PM.
Sau khi PM đã xem xét và chấp nhận Merge Request, các thay đổi của bạn sẽ được tích hợp vào nhánh chính (master) của dự án.

## Lưu ý quan trọng:
Luôn nhớ tạo một branch mới từ nhánh chính (master) trước khi bắt đầu làm việc trên một tính năng mới.
Đồng bộ hóa thường xuyên với nhánh chính (master) bằng cách chạy lệnh ```git pull --rebase origin master``` để nhận các thay đổi mới nhất từ dự án.
Trước khi push, kiểm tra xem có xung đột nào xảy ra không và xử lý chúng một cách cẩn thận.
Luôn tạo Merge Request cho PM để xem xét và chấp nhận các thay đổi của bạn trước khi tích hợp vào nhánh chính.
Đây là quy trình cơ bản để làm việc với GitHub trong dự án ReactJS. Tuy nhiên, tùy thuộc vào quy mô và yêu cầu cụ thể của dự án, quy trình này có thể được tùy chỉnh và mở rộng.
