function ShowMoadalAddItem() {
    var modal = document.getElementById("myModal");
    if (modal) {
        console.log("ShowMoadalAddItem true")
        modal.style.display = "block";
        var modal_body = modal.querySelector(".modal-body");
        fetch("../Views/ModalWindows/ModalAddTaskItem.cshtml")
            .then(response => response.text())
            .then(data => modal_body.innerHTML = data);
    }
}

var button = document.getElementById("add_task_item");
if (button) {
    button.onclick = ShowMoadalAddItem;
}
