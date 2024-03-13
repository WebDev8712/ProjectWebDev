let links = document.querySelectorAll("header a");
links.forEach(link => {
    link.addEventListener("click", async function (event) {
        event.preventDefault();
        let href = this.href;
        let data = await fetch(href);
        document.querySelector("#container").innerHTML = await data.text();
    });
});

async function start() {
    
    let data = await fetch("main.html");
    document.querySelector("#container").innerHTML = await data.text();
}

start()