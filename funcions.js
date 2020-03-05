// Used for from scratch drag and drop
// const drag = (ev) => {
//     console.log("drag test");
//     console.log(ev);
//     ev.dataTransfer.setData("text" , ev.target.id)
    
//     let rowid = document.getElementById("row1");
//     rowid.style.fontStyle = "italic";
//     let crowid = rowid.cloneNode(true);
//     //console.log("crowid:",crowid);
//     let inner = crowid.getElementByClassName("rowclass");
//     console.log("inner name" , inner);
// }

// const AllowDrop = (ev) => {
//     // console.log("test",ev)
//     ev.preventDefault();
// }

// const Drop = (ev) => {
//     ev.preventDefault();
//     data = ev.dataTransfer.getData("text");
//     console.log("test",ev);
//     document.getElementById("targetbody").appendChild(document.getElementById(data));
//     document.getElementById("row1").style.fontStyle = "normal"
//     //ev.target.appendChild(document.getElementById(data));
// }