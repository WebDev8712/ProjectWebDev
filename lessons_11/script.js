let header_button = document.querySelector(".mobile_icon");
header_button.addEventListener("click", function () {
    document.querySelector("header").classList.add("open")
});

function close_popup() {
    document.querySelector("header").classList.remove("open")
}

document.querySelector("#grid").addEventListener("click", close_popup, false);

document.querySelector("header .popup").addEventListener("click", close_popup, false);

document.querySelector("#show_add_photo").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.add("open")
});

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.remove("open")
});

document.querySelector("#add_photo").addEventListener("click", function () {
    let src = document.querySelector("#new_photo_src").value;
    let text = document.querySelector("#new_photo_text").value;
    let new_photo_div = document.createElement("div");
    new_photo_div.classList.add("photo");
    let new_img = document.createElement("img");
    new_img.src = src;
    new_photo_div.appendChild(new_img);
    let new_p = document.createElement("p");
    new_p.innerText = text;
    new_photo_div.append(new_p);
    document.querySelector("#grid").prepend(new_photo_div);
    document.querySelector("#add_new_photo").classList.remove("open")
});