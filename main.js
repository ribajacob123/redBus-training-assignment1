function validateForm(regForm) {

    const formdata = Array.from(document.querySelectorAll(".formValue")).reduce((acc, input) => ({
        ...acc,
        [input.id]: input.value
    }), {});
    const name_regex = /[A-Za-z]{2,}$/
    const email_regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    const phone_regex = /[0-9]{10}$/;
    const password_regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    const date_regex = /^(194[5-9]|19[5-9]\d|200\d|201[0-3])-([0-9]{2})-([0-9]{2})$/


    const data = JSON.parse(JSON.stringify(formdata))

    for (const x in data) {
        let elementID = document.getElementById(x).id;
        let element = document.getElementById(x).value;
        switch (elementID) {
            case "firstname":
                if (!name_regex.test(element)) {
                    alert("First name cannot be blank and should contain at least 2 alphabets")
                    return false;
                }
                break;
            case "lastname":
                if (!name_regex.test(element)) {
                    alert("Last name cannot be blank and should contain at least 2 alphabets")
                    return false;
                }
                break;
            case "email":
                if (!email_regex.test(element)) {
                    alert("Please enter a valid email id");
                    return false;
                }
                break;
            case "password":
                if (!password_regex.test(element)) {
                    alert("Password should contain minimum 8 characters with at least one uppercase character one lowercase character and a number");
                    return false;
                }
                break;
            case "dob":
                if (!date_regex.test(element)) {
                    alert("Please enter a Valid date")
                    return false;
                }
                break;
            case "tel":
                if (!phone_regex.test(element)) {
                    alert("Please enter a valid phone number")
                    return false;
                }
                break;
            case "address":
                if (element.length < 10) {
                    alert("Address too short");
                    return false;
                }
                break;
        }

    }

    //for radio buttons
    let flag = 0
    let radios = document.getElementsByName('gender');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            flag = 1
        }
    }
    if (flag == 0) {
        alert("Gender field cannot be empty");
        return false;
    }


}

function store() {
    let checkbox = document.getElementById("checkbox");
    if (checkbox.checked == true) {
        var formdata = Array.from(document.querySelectorAll(".formValue")).reduce((acc, input) => ({
            ...acc,
            [input.id]: input.value
        }), {});

        //console.log(JSON.stringify(formdata))

        localStorage.setItem('user', (JSON.stringify(formdata)))

        let radios = document.getElementsByName('gender');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                localStorage.setItem('gender', radios[i].value);
            }
        }
    }

}

window.onload = function () {

    const user = JSON.parse(localStorage.getItem('user'));

    for (const x in user) {
        document.getElementById(x).value = user[x];
    }

    let radios = document.getElementsByName("gender");
    let val = localStorage.getItem('gender');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].value == val) {
            radios[i].checked = true;
        }
    }
}