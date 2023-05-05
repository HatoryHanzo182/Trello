var open_modal = document.getElementById("add_task_item");
var close_modal = document.getElementById("cancel_window");

if (open_modal) { open_modal.onclick = ShowMoadalAddItem; }
if (close_modal) { close_modal.onclick = CloseWindow; }

function ShowMoadalAddItem()
{
    var add_modal = document.getElementById("MoadlTaskItem");

    console.log("OPEN MODAL WINDOW FOR ADD ITEM TASK");

    if (add_modal) { add_modal.style.display = "block"; }
        
}
function CloseWindow()
{
    var close_modal = document.getElementById("MoadlTaskItem");

    console.log("CLOSE MODAL WINDOW FOR ADD ITEM TASK");

    if (close_modal) { close_modal.style.display = "none"; }
}