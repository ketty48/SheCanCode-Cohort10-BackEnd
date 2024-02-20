let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//console.log(secretMessage.length);
secretMessage.push('to','program');
const eisilyIndex=secretMessage.indexOf('easily')
secretMessage[eisilyIndex]='right';
secretMessage.shift();
secretMessage.unshift('programming');
secretMessage.splice(6,5,'know')
console.log(secretMessage.join(' '));