// This script file create  for customer form 
console.log("Customers List ↴");
 let table= null
 tabCount=61;
$(document).ready(function () {
    table = $('#example').DataTable({
        ajax: './JQuery/details.txt',
        columns: [
            {data: 'id'},
            { data: 'firstname' },
            { data: 'lastname' },
            { data: 'dob' },
            { data: 'mobile' },
            { data: 'email' },
            { data: 'address' },
        ],
    });
});


// addrow()  function create for adding products
var data = 2;

function AddRow() {
    const fields = document.createElement(`div`);
    fields.className = " ";
    fields.innerHTML = ` 
    <!-- Second default product field  -->
    <div class="row me-2  product">
        <!-- Product name inter field  -->
        <div class="form-group col-md-2 mb-3">
            <label for="name"></label>
            <input type="text" name="product name" class="form-control name" id="name${data}" placeholder="Car" pattern="/^[a-zA-Z]+$/" required>
            <small id="vname${data}"></small>
        </div>
        <!-- Product Price inter here  -->
        <div class="form-group col-md-2 mb-3">
            <label for="price"></label>
            <input type="number" name="Price" class="form-control price" id="price${data}" placeholder="200000000₹" required>
            <small id="vprice${data}"></small>
        </div>
        <!-- Discount field add here  -->
        <div class="form-group col-md-1 mb-3">
            <label for="discount"></label>
            <input type="number" name="discount" class="form-control discount" id="discount${data}" placeholder="18%" required>
            <small id="vdiscount${data}"></small>
        </div>
        <!-- Final Price add here  -->
        <div class="form-group col-md-2 mb-3">
            <label for="final price"></label>
            <input type="number" name="final price" class="form-control finalPrice" id="finalprice${data}"
                placeholder="Enter Final Price" required>
                <small id="vfinalprice${data}"></small>
        </div>
        <!-- Product type add here  -->
        <div class="form-group col-md-2 mb-3">
            <div class="mb-3">
                <label for="product type" class="form-label"></label>
                <select class="form-select form-select-sm productType" id="type${data}" name="product type" required>
                    <option value="" >Select Type</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Cosmatics">Cosmatics</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Vegitabes">Vegitabes</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Other">Other</option>
                </select>
                <small id="vtype${data}"></small>
            </div>

        </div>
        <!-- Product Status field create here  -->
        <div class="form-group col-md-2 mb-3">
            <div class="mb-3">
                <label for="Selecting Status" class="form-label"></label>
                <select class="form-select form-select-sm paymentStatus" id="status${data}">
                    <option value="">Choose Status</option>
                    <option value="Paid">Paid</option>
                    <option value="UnPaid">UnPaid</option>
                    <option value="NA">NA</option>

                </select>
                <small id="vstatus${data}"></small>
            </div>
        </div>

        <div class="form-group col-md-1 but">
          <button type="button" onclick="Del(this);" class="btn btn-danger mt-3 ">Delete</button>
        </div>
    </div>     
    `
    data++;
    const maindiv = document.getElementById("field");
    maindiv.appendChild(fields);

}
// del() - function Ceate for Removing products fields.
function Del(e) {
    e.parentNode.parentNode.remove();

}

// Validation function create here for customer form
function validateForm() {
    var a = true;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    // First Name Valdation 
    var regName = /^[a-zA-Z ]+$/;
    var firstname = document.getElementById('firstname').value;
    if (!regName.test(firstname)) {
        document.getElementById("vfname").innerHTML = 'Invalid first name given.';
        a = false;
    } else {
        document.getElementById("vfname").innerHTML = "";
    }
    // Last Name Validation 
    var regName = /^[a-zA-Z]+$/;
    var lastname = document.getElementById('lastname').value;
    if (!regName.test(lastname)) {
        document.getElementById("vlname").innerHTML = 'Invalid last name given.';
        a = false;
    } else {
        document.getElementById("vlname").innerHTML = "";
    }

    // Date of Birth Valdation 
    if (dob == "") {

        document.getElementById("vdob").innerHTML = "DOB is required";
        a = false;
    } else {
        document.getElementById("vdob").innerHTML = "";
    }
    //Mobile Valdation 
    if (mobile == "") {
        document.getElementById("vmobile").innerHTML = "Mobile no. is required";
        a = false;
    }
    else {
        document.getElementById("vmobile").innerHTML = "";
    }

    //Email Valdation 
    if (email == "") {
        document.getElementById("vemail").innerHTML = "Email is required";
        a = false;
    }
    else if (!email.includes("@")) {
        document.getElementById("vemail").innerHTML = "Invalid email address ";
        a = false;
    } else {
        document.getElementById("vemail").innerHTML = "";
    }
    //Mobile Valdation 
    if (address == "") {

        document.getElementById("vaddress").innerHTML = "Address is required";
        a = false;
    } else {
        document.getElementById("vaddress").innerHTML = "";
    }

    for (let i = 0; i < data; i++) {
        var name = document.getElementById(`name${i}`);
        var price = document.getElementById(`price${i}`);
        var discount = document.getElementById(`discount${i}`);
        var finalPrice = document.getElementById(`finalprice${i}`);
        var productType = document.getElementById(`type${i}`);
        var paymentStatus = document.getElementById(`status${i}`);
        if (name) {
            var regName = /^[a-zA-Z]+$/;
            var name = document.getElementById(`name${i}`).value;
            if (!regName.test(name)) {
                document.getElementById(`vname${i}`).innerHTML = "Name is required";
                a = false;
            } else {
                document.getElementById(`vname${i}`).innerHTML = "";
            }


            if (price.value == "") {
                document.getElementById(`vprice${i}`).innerHTML = "Price is required";
                a = false;
            } else {
                document.getElementById(`vprice${i}`).innerHTML = "";
            }

            if (discount.value == "") {
                document.getElementById(`vdiscount${i}`).innerHTML = " required";
                a = false;
            } else {
                document.getElementById(`vdiscount${i}`).innerHTML = "";
            }


            if (finalPrice.value == "") {
                document.getElementById(`vfinalprice${i}`).innerHTML = "Final Price required";
                a = false;
            } else {
                document.getElementById(`vfinalprice${i}`).innerHTML = "";
            }

            if (productType.value == "") {
                document.getElementById(`vtype${i}`).innerHTML = "Type is required";
                a = false;
            } else {
                document.getElementById(`vtype${i}`).innerHTML = "";
            }

            if (paymentStatus.value == "") {
                document.getElementById(`vstatus${i}`).innerHTML = "Payment is required";
                a = false;
            } else {
                document.getElementById(`vstatus${i}`).innerHTML = "";
            }
        }
    }
    return a;
}



function result() {
    if(!validateForm()){
        return 
    }
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;


    var objectArray = [];
    var object = [];

    let inputdata = {
        id:tabCount,
        FirstName: firstname,
        LastName: lastname,
        DateOfBirth: dob,
        Mobile: mobile,
        Email: email,
        Address: address,
        product: objectArray
    }

    
    table.row.add( {
        "id": inputdata.id,
        "firstname":inputdata.FirstName,
        "lastname": inputdata.LastName,
        "dob": inputdata.DateOfBirth,
        "mobile": inputdata.Mobile,
        "email":inputdata.Email,
        "address":inputdata.Address
    } ).draw(false);
    tabCount++;

    object.push(inputdata);




    for (let i = 0; i < data; i++) {

        var name = document.getElementById(`name${i}`);
        var price = document.getElementById(`price${i}`);
        var discount = document.getElementById(`discount${i}`);
        var finalPrice = document.getElementById(`finalprice${i}`);
        var productType = document.getElementById(`type${i}`);
        var paymentStatus = document.getElementById(`status${i}`);
        if (name) {
            let fieldsData = {
                "ProductName": name.value,
                "Price": price.value,
                "Discount": discount.value,
                "FinalPrice": finalPrice.value,
                "ProductType": productType.value,
                "PaymentStatus": paymentStatus.value,
            }
           
            objectArray.push(fieldsData);
         
        }
        
    }

    console.log(inputdata);
    
    empty();
}

function view(id){
    alert("Table Id is:"+" "+id);
}

function empty(){
    var firstname = document.getElementById("firstname").value="";
    var lastname = document.getElementById("lastname").value="";
    var dob = document.getElementById("dob").value="";
    var mobile = document.getElementById("mobile").value="";
    var email = document.getElementById("email").value="";
    var address = document.getElementById("address").value="";
}