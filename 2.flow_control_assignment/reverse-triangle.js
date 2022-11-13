function reverseTriangle() {
  let reversePositiveInteger = document.getElementById(
    "reversePositiveInteger"
  ).value;
  let reverseStar = "";
  if (parseInt(reversePositiveInteger) >= 0) {
    for (let a = 1; a <= reversePositiveInteger; a++) {
      for (let b = 1; b <= a; b++) {
        reverseStar += "  ";
      }
      for (let c = 1; c <= reversePositiveInteger - a + 1; c++) {
        reverseStar += "*";
      }
      reverseStar += "\n";
    }
    alert(reverseStar);
  } else {
    alert("請輸入一個正整數");
  }
}