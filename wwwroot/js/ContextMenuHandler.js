﻿function bindContextMenu()
{
    $('.task-title').on('contextmenu', function (event)
    {
        event.preventDefault();

        console.log("CONTEXT MENU: Open");

        var taskId = $(this).data('task-id');

        $('#contextMenu').css({ top: event.pageY - 80, left: event.pageX - 30 }).show();

        $(document).on('click', function (event)
        {
            console.log("CONTEXT MENU: Close");

            if (!$(event.target).closest('#contextMenu').length) 
                $('#contextMenu').hide();
        });

        $('#contextMenu .context').off('click').on('click', function ()
        {
            console.log("CONTEXT MENU: Deletion in progress");

            $.ajax({
                url: '/Board/DeleteTask',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ id: taskId })
            }).done(function ()
            {
                $('#main').load('/Board/Board #main', function ()
                {
                    $('.add-task-item-btn').on('click', function () { $('#ModalTaskItem_' + $(this).data('task-id')).show(); });

                    bindContextMenu();
                });
            });
        });
    });
}

bindContextMenu();