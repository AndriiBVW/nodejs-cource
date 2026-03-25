const { Worker } = require("worker_threads");

const compute = (array) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", {
      workerData: {
        array,
      },
    });

    worker.on("message", (msg) => {
      console.log(worker.threadId);
      resolve(msg);
    });

    worker.on("error", (err) => {
      reject(err);
    });

    worker.on("exit", (code) => {
      console.log("The end");
    });
  });
};

const main = async () => {
  try {
    performance.mark("start");
    const result = await Promise.all([
      compute([10, 20, 30, 40, 50]),
      compute([10, 20, 30, 40, 50]),
      compute([10, 20, 30, 40, 50]),
      compute([10, 20, 30, 40, 50]),
    ]);

    console.log(result);
    performance.mark("end");
    performance.measure("main", "start", "end");

    console.log(performance.getEntriesByName("main").pop());
  } catch (err) {
    console.log(err.message);
  }
};
setTimeout(() => {
  console.log("Timeout");
}, 5000);

main();
