function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.dataset.drag);
    ev.dataTransfer.setData("elementId", ev.target.id);
}

function drop(ev) {
    const elementId = ev.dataTransfer.getData("elementId");
    var data = ev.dataTransfer.getData("text");
    if (!data.includes(ev.target.id)) {
        return false;
    }
    ev.preventDefault();
    ev.target.appendChild(document.getElementById(elementId));
}