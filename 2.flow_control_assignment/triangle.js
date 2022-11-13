function triangle() {
  let positiveInteger = document.getElementById("positiveInteger").value;
  let star = "";
  if (parseInt(positiveInteger) >= 0) {
    for (let a = 0; a <= positiveInteger; a++) {
      for (let b = 1; b <= a; b++) {
        star += "*";
      }
      star += "\n";
    }
    alert(star);
  } else {
    alert("請輸入一個正整數");
  }
}