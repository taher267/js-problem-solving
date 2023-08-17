function fibon(fib) {
  console.time();
  let store = [0, 1];
  for (let i = 1; i <= fib; i++) {
    const last = store[store.length - 1];
    const lastBefore = store[store.length - 2];
    store = [last, lastBefore + last];

    console.log(store[0] + store[1]);
  }
  console.timeEnd();
  console.log(store[0] + store[1]);
}

// fibon(500);
