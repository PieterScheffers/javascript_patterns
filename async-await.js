// With async await you resolve a promise

// resolved promise
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// rejected promise
function timeout(time) {
    return new Promise((resolve, reject) => setTimeout(reject, time));
}

// promise
delay(2000).then(() => {
  console.log("delayed 2000 ms");
});

// async await
// an await call always need to be in an async function
async function wait() {
  await delay(2000);
  console.log("delayed 2000 ms");
}
wait();

// An async function is a promise
wait().then(() => console.log("extra console.log after 2000 ms"));

// parallel execution (will take 3000 ms)
// if one promise rejects, it returns
async function parallelFailfast() {
  return await Promise.all(delay(2000), delay(3000));
}

// parallel execution (will take 3000 ms)
// if one promise reject, all other are still resolved
async function parallel() {
  const task1 = delay(2000);
  const task2 = delay(3000);
 
  return [
    await task1,
    await task2
  ];
}

// series execution (will take 5000 ms)
async function series() {
  return [
    await delay(2000),
    await delay(3000)
  ];
}
