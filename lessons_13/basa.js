function elem(selector) {
    return document.querySelector(selector);
}

function elems(selector) {
    return document.querySelectorAll(selector);
}

let input = elem("input"),
    last_number,
    operation;

elems(".number").forEach(button => {
    button.addEventListener("click", function () {
        let number = this.innerText;
        input.value += number;
    });
});

elem("#add").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "add";
    input.setAttribute("placeholder","")
})

elem("#sub").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "sub";
    input.setAttribute("placeholder","")
})

elem("#mul").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "mul";
    input.setAttribute("placeholder","")
})

elem("#div").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "div";
    input.setAttribute("placeholder","")
})

elem("#pow").addEventListener("click", function() {
    last_number = input.value;
    input.value = "";
    operation = "pow";
    input.setAttribute("placeholder","")
})



elem("#eql").addEventListener("click", function() {
    if (last_number && operation) {
        let result;
    switch (operation) {
        case "add": {
            if (input.value !== "")
                {result = parseInt(last_number) + parseInt(input.value);
            }
            else{
                result = "";
                input.setAttribute("placeholder","Error")
            }
            
        } break;
        case "sub": {
            if (input.value !== "")
                {result = parseInt(last_number) - parseInt(input.value);
            }
            else{
                result = "";
                input.setAttribute("placeholder","Error")
            }
        } break;
        case "mul": {
            if (input.value !== "")
                {result = parseInt(last_number) * parseInt(input.value);
            }
            else{
                result = "";
                input.setAttribute("placeholder","Error")
            }
        } break;
        case "div": {
            if (input.value !=0 && input.value !== "")
                {result = parseInt(last_number) / parseInt(input.value);
            }
            else {
                result = "";
                input.setAttribute("placeholder","Error")   
            }
        } break;
        case "pow": {
            if (input.value !== "")
                {result = parseInt(last_number) ** parseInt(input.value);
            }
            else {
                result = "";
                input.setAttribute("placeholder","Error")
                
            }
        } break;
        
    } 

    input.value = result;
    last_number = null;
    operation = null;
    }
    
})

elem("#sqr").addEventListener("click", function () {
    let number = parseInt(input.value);
    if (input.value !="")
    {input.value = number * number;}
});

elem("#clr").addEventListener("click", function () {
    input.value = "";
    last_number = null;
    operation = null;
    input.setAttribute("placeholder","")
});

elem("#rut").addEventListener("click", function () {
    let number = parseInt(input.value);
    if (input.value !="")
    {input.value = number ** (1/2);}
})
