$(document).ready(function(){

    //Lunch click
    $('#reflunch').click(function(){
        $('#breakfast').addClass('d-none');
        $('#lunch').removeClass('d-none');
    });

    // Breakfast click
    $('#refbreakfast').click(function(){
        $("#lunch, #dinner").addClass('d-none');
        $('#breakfast').removeClass('d-none');
    });

    //Dinner click
    $('#refdinner').click(function(){
        $("#lunch, #breakfast").addClass('d-none');
        $('#dinner').removeClass('d-none');
    });

});