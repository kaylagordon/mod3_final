export const pemdas = () => {
  let randomNumber1 = Math.round(Math.random() * (10 - 1) + 1);
  let randomNumber2 = Math.round(Math.random() * (10 - 1) + 1);
  let randomNumber3 = Math.round(Math.random() * (10 - 1) + 1);
  let randomNumber4 = Math.round(Math.random() * (10 - 1) + 1);
  let randomNumber5 = Math.round(Math.random() * (9 - 0) + 0);

  let problemStructures = [
    `${randomNumber1}(${randomNumber2})+${randomNumber3}`,
    `${randomNumber1}(${randomNumber2})-${randomNumber3}(${randomNumber4})`,
    `${randomNumber1}/${randomNumber2}-${randomNumber3}(${randomNumber4})`,
    `${randomNumber1}+${randomNumber2}(${randomNumber3})`,
    `${randomNumber1}+${randomNumber2}-${randomNumber3}+${randomNumber4}`,
    `${randomNumber1}(${randomNumber2})/${randomNumber3}`,
    `(${randomNumber1}+${randomNumber2})(${randomNumber3}-${randomNumber4})`,
    `(${randomNumber1}+${randomNumber2}(${randomNumber3}))-(${randomNumber4})`,
    `(${randomNumber1}/(${randomNumber2}-${randomNumber3}))(${randomNumber4})`,
    `(${randomNumber1}+${randomNumber2}-${randomNumber3})(${randomNumber4})`,
  ];

  return problemStructures[randomNumber5];
}
