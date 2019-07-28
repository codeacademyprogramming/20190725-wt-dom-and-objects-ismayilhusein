"use strict";

let name=document.querySelector("#name");
let surname=document.querySelector("#surname");
let email=document.querySelector("#email");
let birthday=document.querySelector("#birthday");
let studentemail=document.querySelector("#studentemail");
let score=document.querySelector("#score");


let students = [];
function Student(name,surname,email,birthday){
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.birthday=birthday;


}


function add (){
    let student = new Student(name.value, surname.value, email.value, birthday.value);
     students.push(student);



    let tr=document.createElement("tr");
    let td=document.createElement("td");
    td.getAttribute("id","tagtd")

    let tbody=document.querySelector("#tbody");
    tbody.appendChild(tr);
    tr.appendChild(td);
    tr.innerHTML= `<td>${name.value}</td>
                   <td>${surname.value}</td>
                   <td>${email.value}</td>
                   <td>${birthday.value}</td> `
    
    
}

function alertt(){
    if(document.getElementById("name").value==0,document.getElementById("surname").value==0,document.getElementById("email").value==0,document.getElementById("birthday").value==0){
        alert("Melumatlari duzgun elave et");
    }else
    {(add());}
}

