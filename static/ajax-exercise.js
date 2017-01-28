"use strict";


function findFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
}
    
function showFortune() {
    $.get('/fortune', findFortune);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function getWeather(evt) {
    evt.preventDefault();

        var url = "/weather.json?zipcode=" + $("#zipcode-field").val(); 


    $.get(url, function (results) {
        $('#weather-info').html(results.forecast);
    });
}

$("#weather-form").on('submit', getWeather);



// PART 3: ORDER MELONS
function showOrderResults(results) {
    if (results.code == "OK") {
    $("#order-status").html(results.msg);
}
    else {
        $('#order-status').addClass("order-error");
        $('#order-status').html("<p><b>" + results.msg + "</b></p>");}   
}    


function orderMelons(evt) {
    evt.preventDefault();

    var formValues = $("#order-form").serialize();

    $.post("/order-melons.json",
            formValues,
            showOrderResults);
}


$("#order-form").on('submit', orderMelons);


