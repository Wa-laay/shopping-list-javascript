const first = () => {
const greet ='Hi';
const second = () => {
    const name ="bobby";
    alert(greet);
  }
  return second;
}

const newFunc= first();
newFunc();






const multiply =(a,b) => a * b;
const curriedMultiply =(a) => (b) => a * b;
const multiplyBy5= curriedMultiply(5);

const compose = (1, g) => (a) => f(g(a));

const sum = (num) => num * 1;

compose(sum,sum)(5);