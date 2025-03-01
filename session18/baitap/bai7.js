let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
let operation = prompt("Nhập phép tính (+, -, *, /):");

let result;

if (!isNaN(a) && !isNaN(b)) {
    if (operation === "+") {
        result = a + b;
    } else if (operation === "-") {
        result = a - b;
    } else if (operation === "*") {
        result = a * b;
    } else if (operation === "/") {
        if (b !== 0) {
            result = a / b;
        } else {
            alert("Không thể chia cho 0");
        }
    } else {
        alert("Phép toán không hợp lệ.");
    }
    
    if (result !== undefined) {
        alert("Kết quả: " + result);
    }
} else {
    alert("Vui lòng nhập số hợp lệ.");
}
