function printDigits(num) {
    while (num > 0) {
      var solution = num % 10;
      console.log(solution);
      num = Math.floor(num / 10);
    }
  }

  printDigits(459)