console.log("Hello world");

let todos = [
    {id:0 ,name:"Chơi Game", isDOne: true},
    {id:1 ,name:"Nghe nhạc", isDOne: false},
    {id:2 ,name:"Xem phim", isDOne: true},
];

//CRUD 
//Read: đổ hết dữ liệu tên công việc ra giao diện html
const renderData = () =>{

    // Lấy element thẻ cha chứa dữ liệu 
    let listElement = document.getElementsByClassName("listMenu")[0];

    // Clear dữ liệu cũ 
    listElement.innerHTML = ``;
    todos.forEach((todo)=>{
        //createElement : Tạo ra thẻ mới trong HTML
        let itemElement = document.createElement("li");

        //Thêm nội dung
        // itemElement.innerText = todo.name;
        itemElement.innerHTML = `<div style = "padding : 10px">
                                    ${todo.name}
                                    <button onclick="handleUpdateTodo(${todo.id})">Chỉnh sửa</button>
                                    <button onclick="handleDeleteTodo(${todo.id})">Delete</button>
                                </div>`;        
        
        // appendChild:Thêm vào DOM
        listElement.appendChild(itemElement);
    });

};
renderData();

// Create:thêm công việc

const handleAddTodo = ()=>{
    let inputElement = document.getElementById("input-todo");
    let newName = inputElement.value;
    console.log(newName);
    

    let newTodo = {
        id : Date.now(),
        name: newName,
        isDOne:false,
    };
    todos.push(newTodo);
    renderData();
    inputElement.value = ""; //nhập xong thì xóa đi dữ liệu vừa nhập ở ô input
};
handleAddTodo();

let buttonAddElement = document.getElementsByTagName("button")[0];
buttonAddElement.addEventListener("click", handleAddTodo);//CLick vào button thì cập nhật dữ liệu

let inputElement = document.getElementById("input-todo"); //Enter thì cập nhật dữ liệu
inputElement.addEventListener("keydown",(e)=>{

    if (e.key == "Enter") {
        handleAddTodo();
    }
});

// Update 

const handleUpdateTodo = (idTodo) =>{
    let todo =todos.find((todo)=>{
        return todo.id === idTodo;
    });

    inputElement.value = todo.name;

    buttonAddElement.innerText="Cập nhật công việc";
    
    // .forcus()
    inputElement.focus();
};

// delete 

const handleDeleteTodo = (idTodo) =>{
    let indexTodo = todos.findIndex((todo)=>{
        return todo.id === idTodo;
    });

    todos.splice(indexTodo,1);
    renderData();
}