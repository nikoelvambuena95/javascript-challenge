// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value)
    })
});

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("#date-form");

// create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// create function to run for both events
function runEnter(){

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    // print the value to the console
    console.log(inputValue);
    

    // // set the span tag in the h1 element to the text that was entered
    // d3.select

}