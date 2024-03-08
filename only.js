function digits(num) {
  // Write your code below this line
  let count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log(count);
}
