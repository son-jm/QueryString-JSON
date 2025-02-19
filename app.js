const data = {
  message: "Hello World!",
  status: "Success",
};

const a = qs.stringify(data);
console.log(a);

const b = JSON.stringify(data);
console.log(b);
