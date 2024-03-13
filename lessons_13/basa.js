function elem(selector){
    return document.querySelector(selector)
}

function elems(selector){
    return document.querySelectorAll(selector)
}

let input = elem("input")
    ,last_number
    opener;

elems('.number').forEach(button=>{
    button.addEventListener("click", function(){
        let number = this.innerText;
        input.value = input.value + number;
    })
})


elem('#add').addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    opener = "add"
})
elem('#sub').addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    opener = "sub"
})

elem('#sul').addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    opener = "sul"
})

elem('#div').addEventListener("click", function(){
    last_number = input.value;
    input.value = "";
    opener = "div"
})


elem("#sql").addEventListener("click", function(){
    if (last_number && opener){
        let result;
        switch (opener){
            case "add":{
                result = parseInt(last_number) + parseInt(input.value);
            } break;
            case "sub":{
                result = parseInt(last_number) - parseInt(input.value);
            } break;
            case "sul":{
                result = parseInt(last_number) * parseInt(input.value);
            } break;
            case "div":{
                result = parseInt(last_number) / parseInt(input.value);
            } break;
        }
        input.value = result
        last_number = null;
        opener = null;
    }
})


elem("#x2").addEventListener("click", function(){
    let number = parseInt(input.value)
    input.value = Math.pow(last_number, 2);
})

elem("#clr").addEventListener("click", function(){
    input.value = "";
    last_number = null;
    opener = null;
})