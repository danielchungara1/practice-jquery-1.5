$(function(){

    // handling the submit event
    $("#sample-form").submit(function(){

        var data = {};

        data.name = $("#sample-input-description").val();

        data.email = $("#sample-input-price").val();

        data.password = $("#sample-input-stock").val();

        console.log(data);

        return false;
    });
});