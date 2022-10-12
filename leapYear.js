var year = parseInt(prompt("Moi nhap nam"));

var isLeapYear = false;

if(year % 4 == 0){
    if(year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    }else {
        isLeapYear = true;
    }
}

if (isLeapYear){
    alert(year +" is a leap year");
}else {
    alert(year +" is not a leap year");
}