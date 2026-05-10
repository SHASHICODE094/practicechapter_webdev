 function submit_form() {

            console.log('hello');
            // let btn =document.createElement('button');
          //  document.getElementById('print').style.display = "block";


        }
        function sendData() {
            // let value = document.getElementById("name").value;
            // window.location.href = "submit.html?name="+ encodeURIComponent(value);

            let name = document.getElementById("name").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;
            let car_list = document.getElementById("car_list").value;
            let booking_list = document.getElementById("booking_list").value;
            let distance = document.getElementById("distance").value;
            let bill = document.getElementById("bill").value;
            let url = "check_information.html?name=" + encodeURIComponent(name) + "&contact=" + encodeURIComponent(contact) + "&address=" + encodeURIComponent(address) + "&car_list=" + encodeURIComponent(car_list) + "&booking_list=" + encodeURIComponent(booking_list) + "&distance=" + encodeURIComponent(distance) + "&bill=" + encodeURIComponent(bill) ;
            window.location.href = url;
        }