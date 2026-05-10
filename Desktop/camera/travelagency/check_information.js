// let params = new URLSearchParams(window.location.search);
// let name = params.get("name");
// document.getElementById('output').value = name;
let params = new URLSearchParams(window.location.search);
let name = params.get("name");
let contact = params.get("contact");
let address = params.get("address");
let cartype = params.get("car_list");
let bookingtype = params.get("booking_list");
let distance = params.get("distance");
let bill = params.get("bill");
document.getElementById('outputname').value = name;
document.getElementById('outputno').value = contact;
document.getElementById('outputaddress').value = address;
document.getElementById('outputcartype').value = cartype;
document.getElementById('outputbookingtype').value = bookingtype;
document.getElementById('outputdistance').value = distance;
document.getElementById('outputbill').value = bill;

function generatePDF() {
    // alert("Your information is saaved");
    // window.print();
    const element = document.getElementById('div_containner');
    html2pdf().from(element).save();
}