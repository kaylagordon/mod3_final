export const problemSets = {
  simplify: () => {
    let randomNumber1 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber2 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber3 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber4 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber5 = Math.round(Math.random() * (9 - 0));
    let problemStructures = [
      `${randomNumber1}(${randomNumber2})+${randomNumber3}`,
      `${randomNumber1}(${randomNumber2})-${randomNumber3}(${randomNumber4})`,
      `${randomNumber1}^2+${randomNumber2}-${randomNumber3}(${randomNumber4})`,
      `${randomNumber1}+${randomNumber2}(${randomNumber3})`,
      `${randomNumber1}+${randomNumber2}-${randomNumber3}+${randomNumber4}`,
      `${randomNumber1}(${randomNumber2})(${randomNumber3})^2`,
      `(${randomNumber1}+${randomNumber2})(${randomNumber3}-${randomNumber4})`,
      `(${randomNumber1}+${randomNumber2}(${randomNumber3}))-${randomNumber4}`,
      `(${randomNumber1}-(${randomNumber2}-${randomNumber3}))(${randomNumber4})`,
      `(${randomNumber1}+${randomNumber2}^2-${randomNumber3})(${randomNumber4})`,
    ];
    let expression = problemStructures[randomNumber5];

    return expression;
  },
  factor: () => {
    let randomNumber1 = Math.round(Math.random() * (9 - 1) + 1);
    let randomNumber2 = Math.round(Math.random() * (9 - 1) + 1);
    let randomNumber5 = Math.round(Math.random() * (3 - 0));
    let problemStructures = [
      `x^2+${randomNumber1}x+${randomNumber2}`,
      `x^2+${randomNumber1}x-${randomNumber2}`,
      `x^2-${randomNumber1}x-${randomNumber2}`,
      `x^2-${randomNumber1}x+${randomNumber2}`,
    ];
    let expression = problemStructures[randomNumber5];

    return expression;
  },
  derive: () => {
    let randomNumber1 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber2 = Math.round(Math.random() * (3 - 2) + 2);
    let randomNumber3 = Math.round(Math.random() * (6 - 4) + 4);
    let randomNumber4 = Math.round(Math.random() * (9 - 7) + 7);
    let randomNumber5 = Math.round(Math.random() * (4 - 0));
    let problemStructures = [
      `${randomNumber1}x^${randomNumber4}+${randomNumber3}`,
      `${randomNumber1}x^${randomNumber4}-${randomNumber2}x^${randomNumber3}`,
      `${randomNumber1}x^${randomNumber4}-x^${randomNumber2}+${randomNumber3}`,
      `${randomNumber1}x^${randomNumber4}-x^${randomNumber3}+x^${randomNumber2}`,
      `x^${randomNumber4}-x^${randomNumber3}+x^${randomNumber2}`
    ];
    let expression = problemStructures[randomNumber5];

    return expression;
  }
}
