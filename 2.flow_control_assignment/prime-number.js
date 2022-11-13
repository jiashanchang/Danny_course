function primeNumber() {
    let numberInput = document.getElementById("numberInput").value;
    let number = "";
    if (numberInput <= 1) {
      document.getElementById("checkPrimeNumber").innerHTML =
        "請輸入大於 1 的數";
    } else {
      for (let i = 2; i <= numberInput; i++) {
        let isPrimeNumber = true;
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            isPrimeNumber = false;
            break;
          }
        }
        if (isPrimeNumber) {
          number += i + ",";
        }
      }
      document.getElementById("checkPrimeNumber").innerHTML = number;
    }
  }