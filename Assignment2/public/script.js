console.log("Is script file loading");
const RESPONSE_DONE=4;
const STATUS_OK= 200;
var TODOS_DATA_JSON= "todos_list_div"
function add_todo_element(id, todos_data_json){
    var parent= document.getElementById(id);
    parent.innerText= todos_data_json;
}
function getTodosAJAX(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);
    xhr.onreadystatechange= function(){
        if(xhr.readyState === RESPONSE_DONE){
            if(xhr.status === STATUS_OK){
                console.log(xhr.response);
                add_todo_element(TODOS_DATA_JSON,xhr.responseText)
            }

        }
    };
    xhr.send(data= null);
}