$('.task-title').on('contextmenu', function (event)
{
    event.preventDefault();

    var taskId = $(this).data('task-id');

    $('#contextMenu').css({ top: event.pageY - 80, left: event.pageX - 30 }).show();

    $(document).on('click', function (event)
    {
        if (!$(event.target).closest('#contextMenu').length)
            $('#contextMenu').hide();
    });

    $('#contextMenu .context').off('click').on('click', function ()
    {
        $.ajax({
            url: '/Board/DeleteTask',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ id: taskId })
        });
    });
});
