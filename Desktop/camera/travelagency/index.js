function btnclick() {
    let list = document.getElementById('listed');
    list.style.display = "block";
    //style="display: none;"
}
function clickcar() {
    alert("You click on 2 WHEELER");
    let car = document.getElementById("carspace");
    car.style.display = 'block';

}

function clicksedan() {
    alert("You click on 3 WHEELER");
    let sedan = document.getElementById("sedanspace");
    sedan.style.display = 'block';
}
function clicksuvs() {
    alert("You click on 4 WHEELER");
    let suv = document.getElementById("suvspace");
    suv.style.display = 'block';
}
function clickbus() {
    alert("You click on 6+ WHEELER");
    let bus = document.getElementById("busspace");
    bus.style.display = 'block';
}

// function toggleInput() {
//     let drivecar = document.getElementsById('selectArea').value;
//     console.log(drivecar);
//     document.getElementById('rentoption').style.display = "none";
//     document.getElementById('reserveoption').style.display = "none";
//     document.getElementById('dropOrPickupoption').style.display = "none";
//     if (drivecar === "ent") {
//         document.getElementById('rentoption').style.display = "block";
//     }
//     else if (drivecar === "reserve") {
//         document.getElementById('reserveoption').style.display = "block";
//     }
//     else if (drivecar === "drop") {
//         document.getElementById('dropOrPickupoption').style.display = "block";
//     }
//     else {
//         prompt("enter anythings");
//     }

// }
function toggleInput(element) {
    let value = element.value;
    console.log('hlo');
    document.getElementById('rentoption').style.display = "none";
    document.getElementById('reserveoption').style.display = "none";
    document.getElementById('dropOrPickupoption').style.display = "none";
    if (value === "ent") {
        document.getElementById('rentoption').style.display = "block";
    }
    else if (value === "reserve") {
        document.getElementById('reserveoption').style.display = "block";
    }
    else if (value === "drop") {
        document.getElementById('dropOrPickupoption').style.display = "block";
    }
    else {
        prompt("enter anythings");
    }
}
// function none()
// {
//     document.
// }

