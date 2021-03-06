const summary = {};

const assignItem = (i_row, i_col) => {
  let checkBox = document.querySelector(`#checkbox-for-${i_row}${i_col}`);
  // get item price
  let px_row = document.querySelector(`#item-row-${i_row}`);
  console.log(px_row);

  let pxItem = parseFloat(px_row.querySelector(".price-of-item").value);
  console.log(pxItem);
  console.log(typeof pxItem);

  // get name
  let name = document.querySelector(`#person-${i_col}`).value;
  console.log(name);

  if (checkBox.checked) {
    // alert("true, box checked");
    //adds to summary object
    const hasName = name in summary;
    if (hasName) {
      let value = summary[name];
      value += pxItem;
      summary[name] = value;
    } else {
      summary[name] = pxItem;
    }

    console.log(summary);
  } else {
    // alert("false, box unchecked");
    summary[name] -= pxItem;
    console.log(summary);
  }

  console.log(`assignItem invoked, i_row: ${i_row}, i_col: ${i_col}`);
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
      tableTemplate += "<th>Item Name</th><th>Item price</th>";
      for (let i_row = 1; i_row <= numCols - 2; i_row++) {
        let personNum = 2 + i_row;
        tableTemplate += `<th><input type='text' id="person-${personNum}" placeholder='Enter name ${i_row}'></th>`;
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
            '<td><input type="text" placeholder="Enter food item"></input></td>';
        }
        // if 2nd col, create input for item px
        else if (i_col === 2) {
          tableTemplate += `<td><input type="text" class="price-of-item" placeholder="Enter item price"></input></td>`;
        }
        // for subsequent columns, create "me" button
        else {
          //   tableTemplate += `<td id='me'><button id='name${i}'>me</button></td>`;
          tableTemplate += `<td id="person-col-${i_col}"><input type="checkbox" id="checkbox-for-${i_row}${i_col}" onclick="assignItem(${i_row}, ${i_col})"></td>`;
        }
      }
      tableTemplate += "</tr>";
    }
    //   console.log(tableTemplate);

    const testingTable = document.querySelector("#testing-table");
    testingTable.innerHTML = tableTemplate;
  }
  const calcBtn = document.createElement("button");
  calcBtn.innerHTML = "Calculate";
  calcBtn.id = "calculate-btn";

  const generateResultsDiv = document.querySelector(".generate-results");
  generateResultsDiv.innerHTML = "";
  generateResultsDiv.style.backgroundColor = "var(--purple)";
  generateResultsDiv.addEventListener("mouseover", () => {
    generateResultsDiv.style.backgroundColor = "var(--indigo)";
  });
  generateResultsDiv.addEventListener("mouseleave", () => {
    generateResultsDiv.style.backgroundColor = "var(--purple)";
  });
  generateResultsDiv.appendChild(calcBtn);

  document.querySelector("#calculate-btn").addEventListener("click", () => {
    //remove previous content if any
    let displayDiv = document.querySelector(".display-results");
    displayDiv.innerText = "";

    //create new results
    let displayHeader = document.createElement("h3");
    displayHeader.innerText = "Payment Summary";
    displayDiv.appendChild(displayHeader);

    console.log("calculate invoked");
    for (let name in summary) {
      let displayText = `${name}: $${summary[name]}`;
      console.log(displayText);

      let results = document.createElement("p");
      results.id = "results";
      results.innerHTML = displayText;
      displayDiv.appendChild(results);
    }
  });

  //   document
  //     .querySelector("#calculate-btn")
  //     .addEventListener("click", () => console.log("calculate invoked"));
};

// listens for click on generate-table-btn
document
  .querySelector("#generate-table-btn")
  .addEventListener("click", generateTable);
