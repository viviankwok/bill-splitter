const generateTable = (e) => {
  e.preventDefault();
  const numRows = document.querySelector("#num-food-inputBox").value;
  const numCols = document.querySelector("#num-pax-inputBox").value;
  if (numCols === "" || numRows === "") {
    alert("Pls fill in both fields for me to pass my project :) Tyvm");
  } else if (numCols <= 0 || numRows <= 0) {
    alert("Pls fill a valid number for me to pass my project :) Tyvm");
  }
  console.log(`numRows: ${numRows}, numCols: ${numCols}`);
};

// when 'generate table' button is clicked, run generateTable function
document
  .querySelector("#generate-table-btn")
  .addEventListener("click", generateTable);
