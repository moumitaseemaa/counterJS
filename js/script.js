let counter = document.querySelectorAll(".counter");
let counterArr = Array.from(counter);
console.log(counterArr);
counterArr.map((item) => {
  console.log(item);

  let userNumber = item.innerHTML;
  item.innerHTML = "";

  let count = 0;

  function counterJs() {
    count++;
    item.innerHTML = count;
    console.log(count);

    if (count == userNumber) {
      clearInterval(stopCounter);
    }
  }

  let stopCounter = setInterval(() => {
    counterJs();
  }, 1000);
});
