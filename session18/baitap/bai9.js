let hours = parseInt(prompt("Nhập giờ (0-23):"));
let minutes = parseInt(prompt("Nhập phút (0-59):"));
let seconds = parseInt(prompt("Nhập giây (0-59):"));

if (
    hours >= 0 && hours <= 23 &&
    minutes >= 0 && minutes <= 59 &&
    seconds >= 0 && seconds <= 59
) {
    let period = hours >= 12 ? "PM" : "AM";
    let formattedHours = hours % 12;
    formattedHours = formattedHours === 0 ? 12 : formattedHours;
    
    alert(`Thời gian: ${formattedHours}:${minutes}:${seconds} ${period}`);
} else {
    alert("Vui lòng nhập thời gian hợp lệ.");
}
