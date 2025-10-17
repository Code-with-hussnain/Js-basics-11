console.log("Hey I'm Hussnain");
 let box = document.getElementsByClassName("box");
 console.log(box);
 box[2].style.backgroundColor = "red";

document.getElementById("greenbox").style.backgroundColor = "green";

document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue";
}
)
document.getElementsByTagName("div");
e = document.getElementsByTagName("div");
e[2].matches("#greenbox");
e[2].closest(".container");
e[2].closest("html");
document.querySelector(".container").contains(e[2]);
