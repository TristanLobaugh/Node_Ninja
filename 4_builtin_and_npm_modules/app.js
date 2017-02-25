const fs = require('fs');
const _ = require('lodash');
const axios = require('axios');

axios.get('http://rest.learncode.academy/api/myuser/friends').then(res => {
	console.log(res.data);
	const jake = _.find(res.data, { name: 'Jake' });
	console.log(jake);
});


// console.log(_.snakeCase('someValueThatIHave'));

const m = fs.readFileSync('./builtin-node-modules.txt', 'utf-8');
console.log(m);

// fs.writeFileSync('./test.txt', 'hello world');
