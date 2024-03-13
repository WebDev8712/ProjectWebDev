document.querySelector("h1").innerText = "Этот заголовок был вставлен из JS";

document.querySelector("img").src = "Almaty,_Kok-tobe_exposition_(edit).jpg";

let paragraph = document.querySelector("p");
let old_text = paragraph.innerText;
paragraph.innerText = old_text + ", этот текст тоже из JS";

let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<div></div>";
div.style.width = "100px";
div.style.height = "100px";

div.setArribute( 'style', "width: 100px; height: 100px; border: 2px solid #1d1d1d; background: red" );

div.innerHTML = "<p>Это целый тег из JS</p>";