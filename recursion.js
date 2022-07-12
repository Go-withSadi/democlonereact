const countDownFrom = (number) => {
  if (!number || number === 0) return number;
  console.log(number);
  countDownFrom(number - 1);
};
