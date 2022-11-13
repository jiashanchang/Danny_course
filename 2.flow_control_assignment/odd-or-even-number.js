function check() {
  let oddOrEvenInput = document.getElementById("oddOrEvenInput").value;
  if (oddOrEvenInput != "") {
    if (oddOrEvenInput % 2 === 0 && oddOrEvenInput % 1 === 0) {
      document.getElementById("oddOrEvenNumber").innerHTML = "偶數";
    } else if (oddOrEvenInput % 2 != 0 && oddOrEvenInput % 1 === 0) {
      document.getElementById("oddOrEvenNumber").innerHTML = "奇數";
    } else {
      document.getElementById("oddOrEvenNumber").innerHTML = "請輸入整數";
    }
  } else {
    document.getElementById("oddOrEvenNumber").innerHTML = "請輸入整數";
  }
}