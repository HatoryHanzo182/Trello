$('.task-title').on('contextmenu', function (event)
{
    event.preventDefault();

    var posX = event.pageX - 30;
    var posY = event.pageY - 80;

    $('#contextMenu').css({ top: posY, left: posX }).show();

    $(document).on('click', function (event)
    {
        if (!$(event.target).closest('#contextMenu').length)
            $('#contextMenu').hide();
    });
});