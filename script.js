// runs when generate-table-btn is clicked
const generateTable = (e) => {
  e.preventDefault();

  // assigns row and column values
  let numRows = document.querySelector("#num-food-inputBox").value;
  let numCols = document.querySelector("#num-pax-inputBox").value;
  if (numCols === "" || numRows === "") {
    alert("Pls fill in both fields for me to pass my project :) Tyvm");
  } else if (numCols <= 0 || numRows <= 0) {
    alert("Pls fill a valid number for me to pass my project :) Tyvm");
  }
  numRows = parseInt(numRows) + 1;
  numCols = parseInt(numCols) + 2;
  console.log(`numRows: ${numRows}, numCols: ${numCols}`);

  // create rows: <tr>
  let tableTemplate = "";
  for (let i = 1; i <= numRows; i++) {
    tableTemplate += "<tr>";
    // create columns
    for (let i = 1; i <= numCols; i++) {
      if (i === 1) {
        tableTemplate +=
          '<td><input type="text" placeholder="food item"></input></td>';
      } else if (i === 2) {
        tableTemplate +=
          '<td><input type="text" placeholder="item price"></input></td>';
      } else {
        tableTemplate +=
          '<td><input type="text" placeholder="testing input"></input></td>';
      }
    }
    tableTemplate += "</tr>";
  }
  //   console.log(tableTemplate);

  const testingTable = document.querySelector("#testing-table");
  testingTable.innerHTML = tableTemplate;
};

// listens for click on generate-table-btn
document
  .querySelector("#generate-table-btn")
  .addEventListener("click", generateTable);
