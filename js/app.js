
$(document).ready(function(){

/*use the "enter" key instead of a submit button */

    $("#add-items").keydown(function(event)
    {
        if (event.which == 13)
        {
            event.preventDefault();
            displayItem();
        }
    });

    function displayItem()
    {
        var item = $("#add-items").val();
        var work = '<p>'+'<i class="fa fa-times"></i>' + item + '<i class="fa fa-check"></i>'+'</p>';
        $("#shopping-list").prepend(work);
        $("#add-items").val('');
    }
})

/*when clicking the "X" on the left make the list item fade out */

$(document).on("click", ".fa-times", function(){
    $(this).closest('p').fadeOut(400);
});

/*when clicking the checkmark symbol give the text a strike through */

$(document).on("click", ".fa-check", function(){
    $(this).closest('p').css("text-decoration", "line-through");
});


$(document).on("mouseenter", ".fa-times, fa-check", function() {
    $(this).closest('p').css('cursor','pointer');
});