// import { count as squat_count } from "./squat_js.js"
// import { count as wing_count } from "./wing_js.js"

var name;
var gender;
var height;
var weight;
var count_squat;
var count_wing;

var win

var get_count_wing;
var get_count_squat;

function init_info() {
    name = document.getElementById('name').value;
    gender = document.getElementById('gender').value;
    height = document.getElementById('height').value;
    weight = document.getElementById('weight').value;

    

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("gender", gender);
    sessionStorage.setItem("height", height);
    sessionStorage.setItem("weight", weight);
}

function add_row() {
    const data = {
        'name': sessionStorage.getItem("name", name),
        'gender': sessionStorage.getItem("gender", gender),
        'height': sessionStorage.getItem("height", height),
        'weight': sessionStorage.getItem("weight", weight),

        'count_squat': localStorage.getItem("count_squat", count_squat),
        'count_wing': localStorage.getItem("count_wing", count_wing)
    };

    fetch("https://sheet.best/api/sheets/b0288c02-4bec-4ed0-8f4d-4016fe8ef8e9", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(data),
    })
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

fetch("https://sheet.best/api/sheets/b0288c02-4bec-4ed0-8f4d-4016fe8ef8e9/name/*" + sessionStorage.getItem("name", name) + "*")
    .then((response) => response.json())
    .then((data) => {
        let get_count_squat = 0;
        for (let i = 0; i < data.length; i++) {
            get_count_squat += parseInt(data[i].count_squat);
        }
        localStorage.setItem("get_count_squat", get_count_squat);
        console.log(data);
        console.log(get_count_squat);
        //document.getElementsByClassName("teest")[0].innertext = test[0]['count'];
    })
    .catch((error) => {
        console.error(error);
    });

fetch("https://sheet.best/api/sheets/b0288c02-4bec-4ed0-8f4d-4016fe8ef8e9/name/*" + sessionStorage.getItem("name", name) + "*")
    .then((response) => response.json())
    .then((data) => {
        let get_count_wing = 0;
        for (let i = 0; i < data.length; i++) {
            get_count_wing += parseInt(data[i].count_wing);
        }
        localStorage.setItem("get_count_wing", get_count_wing);
        console.log(data);
        console.log(get_count_wing);
        //document.getElementsByClassName("teest")[0].innertext = test[0]['count'];
    })
    .catch((error) => {
        console.error(error);
    });





     