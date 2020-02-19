const drag = (ev) => {
    ev.dataTransfer.setData("text" , ev.target.id)
}

const AllowDrop = (ev) => {
    // console.log("test",ev)
    ev.preventDefault();
}

const Drop = (ev) => {
    ev.preventDefault();
    data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}