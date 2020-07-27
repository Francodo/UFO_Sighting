// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function to build table. Use tbody.html() empty string to clear the data . 
function buildTable(data) {
    tbody.html("");
  
// // Next, loop through each object in the data
  // and append a row and cells for each value in the row
data.forEach((dataRow) => {
    let row = tbody.append("tr");

// Loop through each field in the dataRow and add
    // each value as a table cell (td)

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}
// Keep track of all filters
var filters = {};
// Create a function for taking input (Date, City, State, Country, shape)
  function handleClick() {
    // Define each input as a variable and Grab the search value using D3.j from the filter
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filteredData = tableData;
    
    // Check to see if input was entered and filter the data using that input
    // with conditioanl IF statement
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }; 

    if (city) {
      filteredData = filteredData.filter(row => row.city === city);
    };

    if (state)  {
      filteredData = filteredData.filter(row => row.state === state);
    };

    if (country) {
      filteredData = filteredData.filter(row => row.country === country);
    };

    if (shape) {
      filteredData = filteredData.filter(row => row.shape === shape);
    }; 

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }

  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);