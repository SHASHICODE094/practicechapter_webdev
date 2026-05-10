function generate_PDF() {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    // let address = document.getElementById("address").value;
    // let objective = document.getElementById("objective").value;
    // let education = document.getElementById("education").value;
    // let experiance = document.getElementById("experiance").value;
    // let skill = document.getElementById("skill").value;
    // let strenght = document.getElementById("strenght").value;
    // let date = document.getElementById("date").value;
    let url = "print_resume.html?name=" + encodeURIComponent(name) + "&contact=" + encodeURIComponent(contact) ;
    window.location.href = url;
}