let math = +prompt("xin moi nhap diem mon toan :");
let literatures = +prompt("xin moi nhap diem mon van:");
let english = +prompt("xin moi nhap diem mon tieng anh:");
let avg = (math+english+literatures)/3;
if(avg>=8){
    alert("ban da duoc xep loai gioi");
}else if(avg <8||avg>6.5){
    alert("ban da duoc xep loai kha");
}else if(5<avg||6.5>avg){
    alert("ban da duoc xep loai trung binh");
}else{
    alert("ban da duoc xep loai yeu");
}
// dung || va &&