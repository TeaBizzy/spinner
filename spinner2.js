const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const interval = 200;

const playAnimation = function(loops) {
  let timer = 0;
  for(let i = 0; i < loops + 1; i++) {
    for(const frame of spinner) {
      setTimeout(() => process.stdout.write(frame), timer);
      timer += interval;
    }
    i++
  }
  setTimeout(() => console.log("\n"), interval * spinner.length * loops );
};

playAnimation(2);