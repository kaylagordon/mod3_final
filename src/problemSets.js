export const problemSets = {
  simplify: () => {
    let randomNumber1 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber2 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber3 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber4 = Math.round(Math.random() * (5 - 1) + 1);
    let randomNumber5 = Math.round(Math.random() * (9 - 0) + 0);
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

    return expression
  },
  factoring: () => { return 'factoring'},
  deriving: () => { return 'deriving'},
  trigonometry: () => { return 'trigonometry'},
  mixed: () => { return 'mixed'}
}
