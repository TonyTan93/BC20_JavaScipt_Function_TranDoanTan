// bai 1: quản lý tuyển sinh

function ketQuaTuyenSinh() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var khuVuc = Number(document.getElementById("khuVuc").value);
    var doiTuong = Number(document.getElementById("doiTuong").value);
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);

    diemUuTien = khuVuc + doiTuong;
    diem3Mon = diem1 + diem2 + diem3;
    tongDiem = diemUuTien + diem3Mon;

    var dauRot = "";
    if (tongDiem < diemChuan || diem1 == 0 || diem2 == 0 || diem3 == 0) {
        dauRot = "rớt";
    } else {
        dauRot = "đậu";
    }

    document.getElementById("txtDiem").innerHTML =
        "Bạn đã " + dauRot + ". Tổng điểm của bạn là: " + tongDiem + ".";
}
document.getElementById("btnDiem").onclick = ketQuaTuyenSinh;

// bai 2: tính tiền điện
function tinhTienDien() {
    var nguoiDung = document.querySelector("#nguoiDung").value;
    var soDien = document.querySelector("#soDien").value;

    if (soDien <= 50) {
        tienDien = soDien * 500;
    } else if (soDien <= 100) {
        tienDien = 50 * 500 + (soDien - 50) * 650;
    } else if (soDien <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
    } else if (soDien <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
    } else {
        tienDien =
            50 * 500 +
            50 * 650 +
            100 * 850 +
            150 * 1100 +
            (soDien - 350) * 1300;
    }
    document.querySelector("#txttienDien").innerHTML =
        "Người dùng: " + nguoiDung + ". Số tiền điện: " + tienDien + " VND.";
}
document.querySelector("#btntienDien").onclick = tinhTienDien;

// bai 3: tinh thue
function tinhThue() {
    var name = document.getElementById("name").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;
    tongChiuThue = thuNhapNam - 4000000 - nguoiPhuThuoc * 1600000;

    var tienThue = "";
    if (tongChiuThue <= 0) {
        tienThue = 0;
    } else if (tongChiuThue <= 60000000) {
        tienThue = (tongChiuThue * 5) / 100;
    } else if (tongChiuThue <= 120000000) {
        tienThue =
            (60000000 * 5) / 100 + ((tongChiuThue - 60000000) * 10) / 100;
    } else if (tongChiuThue <= 210000000) {
        tienThue =
            (60000000 * 5) / 100 +
            (60000000 * 10) / 100 +
            ((tongChiuThue - 120000000) * 15) / 100;
    } else if (tongChiuThue <= 384000000) {
        tienThue =
            (60000000 * 5) / 100 +
            (60000000 * 10) / 100 +
            (90000000 * 15) / 100 +
            ((tongChiuThue - 210000000) * 20) / 100;
    } else if (tongChiuThue <= 624000000) {
        tienThue =
            (60000000 * 5) / 100 +
            (60000000 * 10) / 100 +
            (90000000 * 15) / 100 +
            (174000000 * 20) / 100 +
            ((tongChiuThue - 384000000) * 25) / 100;
    } else if (tongChiuThue <= 960000000) {
        tienThue =
            (60000000 * 5) / 100 +
            (60000000 * 10) / 100 +
            (90000000 * 15) / 100 +
            (174000000 * 20) / 100 +
            (240000000 * 25) / 100 +
            ((tongChiuThue - 624000000) * 30) / 100;
    } else {
        tienThue =
            (60000000 * 5) / 100 +
            (60000000 * 10) / 100 +
            (90000000 * 15) / 100 +
            (174000000 * 20) / 100 +
            (240000000 * 25) / 100 +
            (336000000 * 30) / 100 +
            ((tongChiuThue - 960000000) * 35) / 100;
    }
    document.getElementById("txtThue").innerHTML =
        "Người dùng: " +
        name +
        ". Số tiền thuế thu nhập cá nhân: " +
        tienThue +
        " VND.";
}
document.getElementById("btnThue").onclick = tinhThue;

// bai4:Tinh tien cap

function tinhTienCap() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = document.getElementById("soKenh").value;
    var soKetNoi = document.getElementById("soKetNoi").value;
    var tienCap = "";
    if (loaiKhachHang == "nhaDan") {
        tienCap = 4.5 + 20.5 + soKenh * 7.5;
    } else if (loaiKhachHang == "doanhNghiep" && soKetNoi <= 10) {
        tienCap = 15 + 75 + soKenh * 50;
    } else if (loaiKhachHang == "doanhNghiep" && soKetNoi > 10) {
        tienCap = 15 + 75 + soKenh * 50 + (soKetNoi - 10) * 5;
    } else {
        tienCap = " .Xin vui lòng chọn Loại khách hàng ";
    }
    document.getElementById("txtTienCap").innerHTML =
        "Mã khách hàng: " + maKhachHang + ". Tiền cáp: $" + tienCap + ".";
}

function anKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    if (loaiKhachHang == "doanhNghiep") {
        document.getElementById("tamAn").classList.remove("d-none");
    } else {
        document.getElementById("tamAn").classList.add("d-none")
    }
}
document.getElementById("btnTienCap").onclick = tinhTienCap;