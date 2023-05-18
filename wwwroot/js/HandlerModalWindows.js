$(document).ready(function ()
{
    $("#add_task").click(function ()
    {
        console.log("OPEN MODAL WINDOW FOR ADD TASK");

        $("#MoadlTask").css("display", "block");
    });

    $("#cencel_window_task").click(function () {
        console.log("CLOSE MODAL WINDOW FOR ADD TASK");

        $("#MoadlTask").css("display", "none");
        $("#MoadlTask input").val("");
    });

    $(document).ready(function ()
    {
        $('body').on('click', '.add-button-task', function ()
        {
            var modal = $(this).closest('.modal');
            var task = { TaskTitle: $('#taskNameInput').val() };

            $.ajax
                ({
                    url: '/Board/AddNewTask',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(task),
                }).done(function ()
                {
                    $('#main').load('/Board/Board #main', function ()
                    {
                        $('.add-task-item-btn').on('click', function () { $('#ModalTaskItem_' + $(this).data('task-id')).show(); });
                    });
                });
            modal.hide();
        });
    });

 ///////////////////////////////////////////////////////////////////////////////////////////////////

    $('.add-task-item-btn').on('click', function ()
    {
        console.log("OPEN MODAL WINDOW FOR ADD ITEM TASK");

        $('#ModalTaskItem_' + $(this).data('task-id')).show();
    });

    $(document).on('click', '.cancel-button', function ()
    {
        console.log("CLOSE MODAL WINDOW FOR ADD ITEM TASK");

        $(this).closest('.modal').hide();
    });

    $(document).on('click', '.task-avatar img', function ()
    {
        $('.task-avatar img').not(this).removeClass('rounded-image');
        $(this).addClass('rounded-image');
        $('.add-button').data('avatarURL', $(this).attr('src'));
    });

    $(document).on('click', '.add-button', function ()
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
            data: JSON.stringify(item)
        }).done(function ()
        {
            $('#main').load('/Board/Board #main', function ()
            {
                $('.add-task-item-btn').on('click', function () { $('#ModalTaskItem_' + $(this).data('task-id')).show(); });
            });

            modal.hide();
        });
    });
});