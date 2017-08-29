function some_operation(a){
    return a*a;
}

function map_CB(array, some_operation){
    var b_array=[];
    var i = 0;
    while(i<array.length){

        b_array[i]=  some_operation(array[i]);
        i = i+1;
    }
    return b_array;
}

function some_action(a){
    console.log(a*a);
}
function for_each(array, some_action){
    var i = 0;
    while(i<array.length){

        some_action(array[i]);
        i = i+1;
    }
}
var array= [1,2,3,4,5];
console.log(map_CB(array, some_operation));
for_each(array, some_action);