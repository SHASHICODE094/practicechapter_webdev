let params = new URLSearchParams(window.location.search)
let name = params.get("name");
let contact = params.get("contact");
// let address = params.get("address");
// let objective = params.get("objective");
// let education = params.get("education");
// let experiance = params.get("experiance");
// let skill = params.get("skill");
// let strenght = params.get("strenght");
// let date = params.get("date");

document.getElementById("resume_name").innerText = name;
document.getElementById("resume_contact").innerText = contact;
// document.getElementById("resume_address").value = address;
// document.getElementById("resume_objective").value = objective;
// document.getElementById("resume_education").value = education;
// document.getElementById("resume_experiance").value = experiance;
// document.getElementById("resume_skill").value = skill;
// document.getElementById("resume_strenght").value = strenght;
// document.getElementById("resume_date").value = date;

function generatePDF(){
const element=document.getElementById("resume");
html2pdf().from(element).save();
}