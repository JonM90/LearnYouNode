const args = process.argv.slice(2).map(el => +el);
const sum =  args.reduce((acc, curr) => acc + curr);
console.log(sum);
