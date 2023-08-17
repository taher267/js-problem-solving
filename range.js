function range(num) {
  for (let i = 0; i < num; i = 2 * i + 1) {
    const arr = [];
    // for (let j = num - i; j > 0; j--) {
    //   arr.push(' ');
    // }
    for (let j = 1; j <= i; j++) {
      arr.push('*');
    }
    //     // console.log(arr.length);
    console.log(arr.join(''));
  }
}

function odd(max = 10) {
  for (let i = 1; i <= max; i += 2) {
    const arr = [];
    for (let j = (max - i) / 2; j >= 1; j--) {
      arr.push(' ');
    }
    // console.log();
    for (let j = 1; j <= i; j++) {
      arr.push('*');
    }
    console.log(arr.join(''));
  }
  for (let i = 1; i <= max; i += 2) {
    const arr = [];
    for (let j = i; j >= 1; j--) {
      arr.push(' ');
    }
    // console.log();

    console.log(arr.join(''));
  }
}

odd();
