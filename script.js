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
    // if 1st row, create headers
    if (i === 1) {
      tableTemplate += "<th>Item Name</th><th>Item px</th>";
      for (let i = 1; i <= numCols - 2; i++) {
        tableTemplate += `<th><input type='text' placeholder='Name ${i}'></th>`;
      }
      //   for subsequent rows, create <tr>s
    } else {
      tableTemplate += "<tr>";
      // in each <tr>:
      for (let i = 1; i <= numCols; i++) {
        // if 1st col, create input for item name
        if (i === 1) {
          tableTemplate +=
            '<td><input type="text" placeholder="food item"></input></td>';
        }
        // if 2nd col, create input for item px
        else if (i === 2) {
          tableTemplate +=
            '<td><input type="text" placeholder="item price"></input></td>';
        }
        // for subsequent columns, create general fields (to be updated)
        else {
          tableTemplate += "<td id='me'><button>me</button></td>";
        }
      }
      tableTemplate += "</tr>";
    }
    //   console.log(tableTemplate);

    const testingTable = document.querySelector("#testing-table");
    testingTable.innerHTML = tableTemplate;
  }
};

// listens for click on generate-table-btn
document
  .querySelector("#generate-table-btn")
  .addEventListener("click", generateTable);
