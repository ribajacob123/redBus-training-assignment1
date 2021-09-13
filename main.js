function validateForm(myForm) {
    if (myForm.fname.value == "" || myForm.fname.value == null) {
        alert("Name must be filled out");
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

        console.log(JSON.stringify(formdata))

        localStorage.setItem('user', (JSON.stringify(formdata)))

        let radios = document.getElementsByName('gender');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                localStorage.setItem('gender', radios[i].value);
            }
        }
    }

}

window.onload = function () {

    var user = JSON.parse(localStorage.getItem('user'));

    for (const x in user) {
        document.getElementById(x).value = user[x];
    }

    var radios = document.getElementsByName("gender");
    var val = localStorage.getItem('gender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == val) {
            radios[i].checked = true;
        }
    }
}