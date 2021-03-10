let currentCount = 3;
const counter = setInterval(() => {
  if (currentCount >= 0) {
    console.log('Current Count:', currentCount);
    currentCount--;
  } else {
    console.log('Blast Off!');
    clearInterval(counter);
  }
}, 1000);
