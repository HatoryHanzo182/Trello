var open_modal_add_task = document.getElementById("add_task");
var close_modal_add_task = document.getElementById("cencel_window_task");

if (open_modal_add_task) { open_modal_add_task.onclick = ShowMoadalAddTask; }
if (close_modal_add_task) { close_modal_add_task.onclick = CloseModalAddTask; }

$(document).ready(function ()
{
    $('.add-task-item-btn').on('click', function ()
    {
        console.log("OPEN MODAL WINDOW FOR ADD ITEM TASK");

        $('#ModalTaskItem_' + $(this).data('task-id')).show();
    });

    $('.cancel-button').on('click', function ()
    {
        console.log("CLOSE MODAL WINDOW FOR ADD ITEM TASK");

        $(this).closest('.modal').hide();
    });

    $('.add-button').on('click', function ()
    {
        var modal = $(this).closest('.modal');

        var item =
        {
            Exercise: modal.find('textarea').val(),
            Check: parseInt(modal.find('.new-task-status input').eq(0).val()),
            Fixed: parseInt(modal.find('.new-task-status input').eq(1).val()),
            Comment: parseInt(modal.find('.new-task-status input').eq(2).val()),
            AvatarURL: modal.find('.task-avatar img.rounded-image').attr('src'),
            TaskId: modal.data('task-id')
        };

        $.ajax({
            url: '/Board/AddNewTaskItem',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(item),
            success: function ()
            {
                $('#main').load('/Board/Board #main');

                modal.hide();
            }
        });
    });
});

function ShowMoadalAddTask()
{
    var add_modal = document.getElementById("MoadlTask");

    console.log("OPEN MODAL WINDOW FOR ADD TASK");

    if (add_modal) { add_modal.style.display = "block"; }
}
function CloseModalAddTask()
{
    var close_modal_add_task = document.getElementById("MoadlTask");
    var task = close_modal_add_task.getElementsByTagName("input")[0];

    task.value = "";

    console.log("CLOSE MODAL WINDOW FOR ADD TASK");

    if (close_modal_add_task) { close_modal_add_task.style.display = "none"; }
}

$('.task-avatar img').click(function ()
{
    $('.task-avatar img').not(this).removeClass('rounded-image');
    $(this).addClass('rounded-image');
    $('.add-button').data('avatarURL', $(this).attr('src'));
});
$(document).ready(function ()
{
    $('body').on('click', '.add-button-task', function ()
    {
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