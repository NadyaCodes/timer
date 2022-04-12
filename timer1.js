const entries = process.argv.slice(2);
let time = 0;

const beepOnce = () => {
  process.stdout.write('\x07');
};

const findTime = (num) => {
  time = num * 1000;
  return time;
};

for (let i = 0; i < entries.length; i++) {
  if (entries[i] >= 0 && typeof(entries[i] === 'number')) {
    setTimeout(() => {
      beepOnce();
    }, findTime(entries[i]));
  }
  
}
