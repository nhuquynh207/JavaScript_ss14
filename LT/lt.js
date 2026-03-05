// Dom
// ELement
// Atr
// Text
console.log({document});

// Element: Các thẻ

// Cách truy cập
// - Cách lấy các cái thẻ trong js

let itemElement = document.getElementById("item_01");
console.log(itemElement);

let listElement=document.getElementById("list");
console.log(listElement);

let listItemElement = document.getElementsByClassName("item"); //trả về htmlcollection,muốn dùng các thuộc tính thì thêm vị trí như [0],học dùng vòng lặp for,array

console.log(listItemElement);
console.log(listItemElement.length);

Array.from(listItemElement).forEach((element)=>{
    console.log(element.innerText);
    
});
//cách 2
// for (let i = 0; i < listItemElement.length; i++) {
//     listItemElement[i].classList.add("item");
// }

let listDivElement = document.getElementsByTagName("ul");
console.log({data:listDivElement[0]});
// console.log(listDivElement[0].childNodes);

let firstElement = document.querySelector("#item_01");
console.log(firstElement);

let listItemElementQuery = document.querySelectorAll(".item");
console.log(listItemElementQuery);

// 
listElement = document.getElementById("list");

console.log(listElement.innerText); //bỏ qua các hidden,...->bị ảnh hưởng bởi css
console.log(listElement.innerHTML); //In ra toàn bộ cả thẻ và thuộc tính




console.log(listElement.textContent); //Không bị ảnh hưởng bởi CSS (như các style);

let itemChangeElement = document.querySelectorAll("#item_01")[0]; //trả về một nodeList 
itemChangeElement.innerText="Xem phim"; //Lấy hoặc thay dổi nội dung HTML 

console.log(itemChangeElement.classList); //lấy ra toàn bộ class

itemChangeElement.classList.add("delete");
itemChangeElement.classList.remove("item");
itemChangeElement.classList.contains("delete");
console.log(itemChangeElement.classList.contains("delete"));

itemChangeElement.classList.toggle("first_element");
itemChangeElement.style.color = "blue";



