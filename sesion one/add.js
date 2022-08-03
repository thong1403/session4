//ex 1

// let a =Number(prompt ("nhập số a"));
// let b =Number(prompt (" nhập số b"));

// console.log (c = a / b);

//ex 2


// let a = prompt("nhập số tuổi");

// if(a >= 15){
//     alert("đủ tuổi học lỚP 10");
// }
// else {
//     alert("không đủ tuổi học");
// }

//ex 3

// let a = prompt("nhập vào số nguyên bất kì");

// if (a > 0){
//     alert("số đó lớn hơn 0");
// }
// else{
//     alert("số đỏ nhỏ hơn 0");
// }

//ex 4
// let a = Number(prompt("nhập số"));
// let b = Number(prompt("nhập số"));
// let c = Number(prompt("nhập  số"));

// alert (Math.max(a , b ,c));

//ex 5

// let a = Number(prompt("nhập điểm kiểm tra"));
// let b =Number(prompt("nhập điểm thi giữ kì"));
// let c = Number(prompt("nhập điểm thi cuối kì"));

// let d = Number( 10/100 * a + 20/100 * b + 70/100 * c );
//  if(d >= 8.5 && d <= 10){
//     alert("giỏi");
//  }
//  else if(d >= 7 && d <= 8.4){
//     alert("khá");
//  }
//  else if(d>=5.5 && d <= 6.9){
//     alert("trung bình");
//  }
//  else if(d >= 4 && d <=5.4){
//     alert("trung bình kém");
//  }
//  else{ 
//     alert("kém");
//  }

//ex 7
// let a = prompt("cho người nhập vào chiều cao");
// let b = prompt("cho người nhập vào cân nặng");
// let c = a/100;
// let d = Number (b/(c*2));
// if(d<=18){
//     alert("nghiện nặng");
// }
// else if(d<=25){
//     alert(" bình thường");
// }
// else{
//     alert("thừa cân");
// }

//ex 6
// let a = Number(prompt("Nhập vào số tiền cần tính:"));
// if ( a > 0 && a <= 5000000){
//     alert(`Số hoa hồng là ${a * 5 /100}`);
// } else if (5000000 <= a && a < 10000000){
//     alert(`Số hoa hồng là ${(5000000 * 5 /100) +((a-5000000)* 10 /100)}`);
// } else if (10000000 <= a && a < 18000000 ){
//     alert(`Số hoa hồng là ${(5000000 * 5 /100) +(5000000* 10 /100) +(a - 10000000)*15/100}`);
// } else if (a<= 18000000){
//     alert(`Số tiền hoa hồng là ${(5000000 * 5 /100) +(5000000* 10 /100)+(8000000*10/100)+((a-18000000)*20/100)}`);
// }