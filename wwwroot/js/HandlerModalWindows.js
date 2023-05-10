var button_add_item = document.querySelector("button[id^='add_task_item_']");
var open_modal_add_taskitem = document.getElementById("add_task_item_" + button_add_item.getAttribute("data-task-id"));
var close_modal_add_taskitem = document.getElementById("cancel_window");
var open_modal_add_task = document.getElementById("add_task");
var close_modal_add_task = document.getElementById("cencel_window_task");

if (open_modal_add_taskitem) { open_modal_add_taskitem.onclick = ShowMoadalAddItem; }
if (close_modal_add_taskitem) { close_modal_add_taskitem.onclick = CloseModalAddItem; }
if (open_modal_add_task) { open_modal_add_task.onclick = ShowMoadalAddTask; }
if (close_modal_add_task) { close_modal_add_task.onclick = CloseModalAddTask; }

function ShowMoadalAddItem()
{
    var add_modal = document.getElementById("MoadlTaskItem_" + button_add_item.getAttribute("data-task-id"));

    console.log("OPEN MODAL WINDOW FOR ADD ITEM TASK");

    if (add_modal) { add_modal.style.display = "block"; }
}
function CloseModalAddItem()
{
    var close_modal_add_taskitem = document.getElementById("MoadlTaskItem_" + button_add_item.getAttribute("data-task-id"));
    var task = close_modal_add_taskitem.getElementsByTagName("textarea")[0];
    var status = close_modal_add_taskitem.getElementsByTagName("input");

    task.value = "";
    for (var i = 0; i < status.length; i++)
        status[i].value = "";

    $('.task-avatar img').not(this).removeClass('rounded-image');
    $(this).addClass('rounded-image');

    console.log("CLOSE MODAL WINDOW FOR ADD ITEM TASK");

    if (close_modal_add_taskitem) { close_modal_add_taskitem.style.display = "none"; }
}
function ShowMoadalAddTask()
{
    var add_modal = document.getElementById("MoadlTask");

    console.log("OPEN MODAL WINDOW FOR ADD TASK");

    if (add_modal) { add_modal.style.display = "block"; }
}
function CloseModalAddTask() {
    var close_modal_add_task = document.getElementById("MoadlTask");
    var task = close_modal_add_task.getElementsByTagName("input")[0];

    task.value = "";

    console.log("CLOSE MODAL WINDOW FOR ADD TASK");

    if (close_modal_add_task) { close_modal_add_task.style.display = "none"; }
}

$('.task-avatar img').click(function () {
    $('.task-avatar img').not(this).removeClass('rounded-image');
    $(this).addClass('rounded-image');

    var avatarURL = $(this).attr('src');

    $('.add-button').data('avatarURL', avatarURL);
});
$(document).ready(function () {
    $('.add-button').on('click', function () {
        var item =
        {
            Exercise: $('textarea').val(),
            Check: parseInt($('.new-task-status input:eq(0)').val()),
            Fixed: parseInt($('.new-task-status input:eq(1)').val()),
            Comment: parseInt($('.new-task-status input:eq(2)').val()),
            AvatarURL: $(this).data('avatarURL'),
            TaskId: $('#add_task_item').data('taskId')
        };

        $.ajax
            ({
                url: '/Board/AddNewTaskItem',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(item),
                success: function () { $('#output-tasks').load('/Board/Board #output-tasks'); }
            });

        CloseModalAddItem();
    });
});
$(document).ready(function () {
    $('body').on('click', '.add-button-task', function () {
        var task = { TaskTitle: $('#taskNameInput').val() };

        $.ajax
            ({
                url: '/Board/AddNewTask',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(task),
                success: function () { $('#main').load('/Board/Board #main'); }
            });

        CloseModalAddTask();
    });
});
