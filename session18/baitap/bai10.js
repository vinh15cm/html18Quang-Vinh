let number = parseInt(prompt("Nhập số nguyên từ 0 - 999:"));

if (number >= 0 && number <= 999) {
    let result = "";
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number % 100) / 10);
    let ones = number % 10;

    if (hundreds === 1) {
        result += "Một Trăm";
    } else if (hundreds === 2) {
        result += "Hai Trăm";
    } else if (hundreds === 3) {
        result += "Ba Trăm";
    } else if (hundreds === 4) {
        result += "Bốn Trăm";
    } else if (hundreds === 5) {
        result += "Năm Trăm";
    } else if (hundreds === 6) {
        result += "Sáu Trăm";
    } else if (hundreds === 7) {
        result += "Bảy Trăm";
    } else if (hundreds === 8) {
        result += "Tám Trăm";
    } else if (hundreds === 9) {
        result += "Chín Trăm";
    }

    if (tens === 0 && ones !== 0) {
        result += " Linh";
    }
    
    if (tens === 1) {
        if (ones === 0) {
            result += " Mười";
        } else if (ones === 1) {
            result += " Mười Một";
        } else if (ones === 2) {
            result += " Mười Hai";
        } else if (ones === 3) {
            result += " Mười Ba";
        } else if (ones === 4) {
            result += " Mười Bốn";
        } else if (ones === 5) {
            result += " Mười Lăm";
        } else if (ones >= 6) {
            result += " Mười " + (ones === 6 ? "Sáu" : ones === 7 ? "Bảy" : ones === 8 ? "Tám" : "Chín");
        }
    } else {
        if (tens === 2) {
            result += " Hai Mươi";
        } else if (tens === 3) {
            result += " Ba Mươi";
        } else if (tens === 4) {
            result += " Bốn Mươi";
        } else if (tens === 5) {
            result += " Năm Mươi";
        } else if (tens === 6) {
            result += " Sáu Mươi";
        } else if (tens === 7) {
            result += " Bảy Mươi";
        } else if (tens === 8) {
            result += " Tám Mươi";
        } else if (tens === 9) {
            result += " Chín Mươi";
        }
        
        if (ones === 1 && tens > 1) {
            result += " Mốt";
        } else if (ones === 2) {
            result += " Hai";
        } else if (ones === 3) {
            result += " Ba";
        } else if (ones === 4) {
            result += " Bốn";
        } else if (ones === 5 && tens !== 0) {
            result += " Lăm";
        } else if (ones === 5) {
            result += " Năm";
        } else if (ones === 6) {
            result += " Sáu";
        } else if (ones === 7) {
            result += " Bảy";
        } else if (ones === 8) {
            result += " Tám";
        } else if (ones === 9) {
            result += " Chín";
        }
    }
    
    alert("Số bạn nhập là: " + result.trim());
} else {
    alert("Vui lòng nhập số hợp lệ từ 0 - 999.");
}
