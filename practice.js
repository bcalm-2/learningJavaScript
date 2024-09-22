const objectValue = {
  firstName: "Vikram",
  secondName: "Singh",
  id: "20",
  address: "mera ghar nhi bta rhe jao",
};

console.log(
  "my name is",
  objectValue.firstName,
  objectValue.secondName,
  ". my id is",
  objectValue.id,
  ". my address is",
  objectValue.address
);

objectValue["hobby"] = "cricket";
console.log("my hobby is", objectValue.hobby);
