const summary = {};

const assignItem = (i_row, i_col) => {
  console.log(`assignItem invoked, i_row: ${i_row}, i_col: ${i_col}`);

  // get item price
  let px_row = document.querySelector(`#item-row-${i_row}`);
  console.log(px_row);

  let pxItem = px_row.querySelector(".price-of-item").value;
  console.log(pxItem);

  // get name
  let name = document.querySelector(`#person-${i_col}`).value;
  console.log(name);

  //adds to summary object
  summary[name] = pxItem;
  console.log(summary);
};

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
  for (let i_row = 1; i_row <= numRows; i_row++) {
    // if 1st row, create headers
    if (i_row === 1) {
      tableTemplate += "<th>Item Name</th><th>Item px</th>";
      for (let i_row = 1; i_row <= numCols - 2; i_row++) {
        let personNum = 2 + i_row;
        tableTemplate += `<th><input type='text' id="person-${personNum}" placeholder='Name ${i_row}'></th>`;
      }
    }
    //   for subsequent rows, create <tr>s
    else {
      tableTemplate += `<tr id="item-row-${i_row}">`;
      // in each <tr>:
      for (let i_col = 1; i_col <= numCols; i_col++) {
        // if 1st col, create input for item name
        if (i_col === 1) {
          tableTemplate +=
            '<td><input type="text" placeholder="food item"></input></td>';
        }
        // if 2nd col, create input for item px
        else if (i_col === 2) {
          tableTemplate += `<td><input type="text" class="price-of-item" placeholder="item price"></input></td>`;
        }
        // for subsequent columns, create "me" button
        else {
          //   tableTemplate += `<td id='me'><button id='name${i}'>me</button></td>`;
          tableTemplate += `<td id="person-col-${i_col}"><input type="checkbox" id="myCheck" onclick="assignItem(${i_row}, ${i_col})"></td>`;
        }
      }
      tableTemplate += "</tr>";
    }
    //   console.log(tableTemplate);

    const testingTable = document.querySelector("#testing-table");
    testingTable.innerHTML = tableTemplate;
  }
  document
    .querySelector("#calculate-btn")
    .addEventListener("click", () => console.log("calculate invoked"));
};

// listens for click on generate-table-btn
document
  .querySelector("#generate-table-btn")
  .addEventListener("click", generateTable);
