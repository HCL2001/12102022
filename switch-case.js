var browser = prompt("Enter your browser name");

switch (browser){
    case "Edge":
        alert("You've got the Edge");
        break;
    case "Chrome":
    case "Firefox":
        alert("Okey we also support these browsers!");
        break;
    default:
        alert("We hope that this page looks ok!");
        break;
}