function compare() {
  let firstNumberInput = document.getElementById("firstNumberInput").value;
  let secondNumberInput =
    document.getElementById("secondNumberInput").value;
  if (parseInt(firstNumberInput) > parseInt(secondNumberInput)) {
    document.getElementById("maxNumber").innerHTML = firstNumberInput;
  } else if (parseInt(firstNumberInput) < parseInt(secondNumberInput)) {
    document.getElementById("maxNumber").innerHTML = secondNumberInput;
  } else if (parseInt(firstNumberInput) === parseInt(secondNumberInput)) {
    document.getElementById("maxNumber").innerHTML = "兩個數字一樣大";
  } else {
    document.getElementById("maxNumber").innerHTML = "請輸入數字";
  }
}