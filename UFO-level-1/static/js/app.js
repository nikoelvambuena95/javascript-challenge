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