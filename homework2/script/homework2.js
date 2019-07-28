"use strict"


let cremain= document.createElement("main");
cremain.getAttribute("id","idmain");
document.body.appendChild(cremain);

let crediv =document.createElement("div");
cremain.appendChild(crediv);
let crep =document.createElement("p");
crep.className="elementp";
let creh1 =document.createElement("h1");
crediv.appendChild(crep);
crediv.appendChild(creh1);
crep.innerHTML=("WHAT PEOPLE SAY");
creh1.innerHTML=("Reviews");

//pics
let esasdiv =document.createElement("div");
esasdiv.className="motherdiv";
let div1 =document.createElement("div");
div1.className="clasdiv1";
let div2 =document.createElement("div");
div1.className="clasdiv2";
let div3 =document.createElement("div");
div1.className="clasdiv3";

esasdiv.appendChild(div1);
esasdiv.appendChild(div2);
esasdiv.appendChild(div3);

cremain.appendChild(esasdiv);
let crep1= document.createElement("p");
crep1.className="allp";
let crep2= document.createElement("p");
crep2.className="allp";
let crep3= document.createElement("p");
crep3.className="allp";


div1.appendChild(crep1);
div2.appendChild(crep2);
div3.appendChild(crep3);

crep1.innerHTML=("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae, beatae perferendis cum ipsa dolorum quasi dignissimos ut, mollitia voluptatum tempora asperiores animi nostrum sapiente nulla quis, esse hic a!");
crep2.innerHTML=("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae, beatae perferendis cum ipsa dolorum quasi dignissimos ut, mollitia voluptatum tempora asperiores animi nostrum sapiente nulla quis, esse hic a!");
crep3.innerHTML=("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quae, beatae perferendis cum ipsa dolorum quasi dignissimos ut, mollitia voluptatum tempora asperiores animi nostrum sapiente nulla quis, esse hic a!");


let creimg1= document.createElement("img");
let creimg2= document.createElement("img");
let creimg3= document.createElement("img");


creimg1.setAttribute("src","https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830");
creimg2.setAttribute("src","https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830");
creimg3.setAttribute("src","https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830");



div1.appendChild(creimg1);
div2.appendChild(creimg2);
div3.appendChild(creimg3);


let creh5= document.createElement("h5");
let creh2= document.createElement("h5");
let creh3= document.createElement("h5");



div1.appendChild(creh5);
div2.appendChild(creh2);
div3.appendChild(creh3);

creh5.innerHTML=("John Doe");
creh2.innerHTML=("Pete Jones");
creh3.innerHTML=("Mark Wilson");



