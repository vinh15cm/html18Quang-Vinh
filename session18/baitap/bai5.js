let experience = prompt("Nhập số năm kinh nghiệm của nhân viên:");

experience = parseFloat(experience);

if (experience < 1) {
    alert("Mới vào nghề");
} else if (experience >= 1 && experience <= 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (experience >= 4 && experience <= 6) {
    alert("Chuyên viên");
} else if (experience > 6) {
    alert("Quản lý");
} else {
    alert("Vui lòng nhập một số hợp lệ.");
}
