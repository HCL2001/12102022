var login = prompt("Moi nhap tin nhan");

var message;

var loginText = (login == "Employee")?message = "Hello":(login == "Director")?message = "Greetings":(login == '')?message = "No login":message = "Khong de trong";

alert(loginText);