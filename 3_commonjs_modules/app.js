
const command = process.argv[2];
const c = Number(process.argv[3]);
const d = Number(process.argv[4]);

if (command === 'add') {
	console.log(`Add ${c} + ${d} = ${c + d}`);
} else if (command === 'subtract') {
	console.log(`Add ${c} - ${d} = ${c - d}`);
} else if (command === 'multiply') {
	console.log(`Add ${c} * ${d} = ${c * d}`);
} else if (command === 'divide') {
	console.log(`Add ${c} / ${d} = ${c / d}`);
}
