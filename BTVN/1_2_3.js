const products = [
{ id: 1, name: "Bánh Chưng", price: 150000 },
{ id: 2, name: "Giò Lua", price: 180000 },
{ id: 3, name: "Cành Đào", price: 500000 },
{ id: 4, name: "Mứt Tết", price: 120000 },
{ id: 5, name: "Bao Lì Xì", price: 25000 },
{ id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

// Bài 1
let productsList = document.getElementById("product-list");

products.forEach(item=>{
    let displayProduct=document.createElement("div");
    displayProduct.className="product";
    displayProduct.innerHTML=`${item.name} - ${item.price}`;
    productsList.appendChild(displayProduct);
});

// bài 2

let submitForm=document.getElementById("product-form");

let inputName=document.getElementById("product-name");
let inputPrice=document.getElementById("product-price");
submitForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let valueName=inputName.value;
    let valuePrice=Number(inputPrice.value);
    let newProduct= {
        id:Date.now(),
        name: valueName,
        price: valuePrice
    };
    
    let itemProduct=document.createElement("li");
    itemProduct.className="product-item";
    itemProduct.innerHTML=`${newProduct.name}-${newProduct.price.toLocaleString("vi-VN")}`;

//bài 3
    let deleteButton= document.createElement("button");
    deleteButton.className="delete-btn";
    deleteButton.innerText="Delete";
    itemProduct.appendChild(deleteButton);
    deleteButton.addEventListener("click",()=>{
        let check=confirm("Bạn có chắc muốn xóa sản phẩm này?");
        if (check) {
            itemProduct.remove();
        }
    });

    // bài 4
    let updateButton=document.createElement("button");
    updateButton.className="edit-price-btn";
    updateButton.innerText="Sửa giá";
    itemProduct.appendChild(updateButton);
    updateButton.addEventListener("click",()=>{
        let newPrice=+prompt("Nhập giá mới (VND):");
        valuePrice=newPrice.toLocaleString("vi-VN");
    })

    productsList.appendChild(itemProduct);
    inputName.value="";
    inputPrice.value="";
});














