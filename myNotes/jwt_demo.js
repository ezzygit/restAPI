const jwt = require('jsonwebtoken');

const myFunction = () => {
const token = jwt.sign({ _id: 'abc123'}, "secretstringwoo", {expiresIn: "1 week" }); 
    
console.log(token);

const data = jwt.verify(token, "secretstringwoo");
console.log(data);
};

myFunction();