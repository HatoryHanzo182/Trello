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

//$.getScript("https://code.jquery.com/jquery-3.6.0.min.js", function () {
//    $(document).ready(function () {
//        $('.add-button').on('click', function () {
//            var item =
//            {
//                Exercise: $('textarea').val(),
//                Check: parseInt($('.new-task-status input:eq(0)').val()),
//                Fixed: parseInt($('.new-task-status input:eq(1)').val()),
//                Comment: parseInt($('.new-task-status input:eq(2)').val()),
//                AvatarURL: $('.task-avatar img.selected').attr('src')
//            };
//
//            $.ajax
//                ({
//                    url: '/Board/AddNewTaskItem',
//                    method: 'POST',
//                    contentType: 'application/json',
//                    data: JSON.stringify(item),
//                    success: function () { $('#output-tasks').load('/Board/Board #output-tasks'); }
//                });
//
//            CloseWindow();
//        });
//    });
//});