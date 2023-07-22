function bindContextMenu() {
    $('.task-title').on('contextmenu', function (event) {
        event.preventDefault();

        var taskId = $(this).data('task-id');

        console.log("CONTEXT MENU FOR TASK: Open");

        $('#contextMenu').css({ top: event.pageY - 80, left: event.pageX - 30 }).show();

        $(document).on('click', function (event) {
            console.log("CONTEXT MENU: Close");

            if (!$(event.target).closest('#contextMenu').length)
                $('#contextMenu').hide();
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $('#contextMenu #delete').off('click').on('click', function () {
            console.log("CONTEXT MENU FOR TASK: Deletion in progress");

            $.ajax({
                url: '/Board/DeleteTask',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ id: taskId })
            }).done(function () {
                $('#main').load('/Board/Board #main', function () {
                    $('.add-task-item-btn').on('click', function () { $('#ModalTaskItem_' + $(this).data('task-id')).show(); });

                    bindContextMenu();
                });
            });
        });

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $('#contextMenu #edit').off('click').on('click', function () {
            console.log("CONTEXT MENU: Edit in progress");

            $('#MoadlEditTask').show();

            $('#cencel_window_edit_task').on('click', function () { $('#MoadlEditTask').hide(); });

            $('body').off('click', '#save_task_button').on('click', '#save_task_button', function () {
                var modal = $(this).closest('.modal');
                var new_task_name = { TaskTitle: $('#taskNameEdit').val(), Id: taskId };

                $.ajax({
                    url: '/Board/EditTask',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(new_task_name),
                }).done(function () {
                    $('#main').load('/Board/Board #main', function () {
                        $('.add-task-item-btn').on('click', function () { $('#ModalTaskItem_' + $(this).data('task-id')).show(); });

                        bindContextMenu();
                    });
                });

                modal.hide();
            });
        });
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.task-item').on('contextmenu', function (event) {
        event.preventDefault();

        var task_item_Id = $(this).data('taskitem-id');

        console.log("CONTEXT MENU FOR TASK ITEM: Open");

        $('#contextMenu').css({ top: event.pageY - 80, left: event.pageX - 30 }).show();

        $(document).on('click', function (event) {
            console.log("CONTEXT MENU FOR TASK ITEM: Close");

            if (!$(event.target).closest('#contextMenu').length)
                $('#contextMenu').hide();
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $('#contextMenu #delete').off('click').on('click', function () {
            console.log("CONTEXT MENU FOR TASK ITEM: Deletion in progress");
            console.log(task_item_Id);

            $.ajax({
                url: '/Board/DeleteTaskItem',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ id: task_item_Id })
            }).done(function () {
                $('#main').load('/Board/Board #main', function () {
                    $('.add-task-item-btn').on('click', function () { $('#ModalTaskItem_' + $(this).data('task-id')).show(); });

                    bindContextMenu();
                });
            });
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });
};////

bindContextMenu();