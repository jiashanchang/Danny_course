function multiply() {
    let table = document.querySelector("#table");
    let multiplyTable = "";
    multiplyTable += "<table border='5'>";
    for (let i = 1; i < 10; i++) {
      multiplyTable += "<tr>";
      multiplyTable += "<td>" + i + "</td>";
      for (let j = 1; j < 10; j++) {
        multiplyTable += "<td>" + j + "x" + i + "=" + i * j + "</td>";
        table.innerHTML = multiplyTable;
      }
      multiplyTable += "</tr>";
    }
    multiplyTable += "</table>";
  }