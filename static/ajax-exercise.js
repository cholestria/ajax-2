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
function getWeather(results) {
    console.dir(results);
    $('#weather-info').html("The weather will be " + results.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    var zipInput = {
        "zip": $("#zipcode-field").val(),
    };

    $.get("/weather.json",
        zipInput,
        getWeather);
}

$("#weather-form").on('submit', showWeather);


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

    var formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json",
            formInputs,
            showOrderResults);
}


$("#order-form").on('submit', orderMelons);


