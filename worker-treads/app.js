const factorial = require("./factorial");

const compute = (array) => {
  const arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i * i);
  }
  return array.map((el) => factorial(el));
};

const main = () => {
  performance.mark("start");
  const result = [
    compute([10, 20, 30, 40, 50]),
    compute([10, 20, 30, 40, 50]),
    compute([10, 20, 30, 40, 50]),
    compute([10, 20, 30, 40, 50]),
  ];

  console.log(result);
  performance.mark("end");
  performance.measure("main", "start", "end");
  console.log(performance.getEntriesByName("main").pop());
};

main();
