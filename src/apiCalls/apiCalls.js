export const getAnswer = (operation, expression) => {
  return fetch(`https://newton.now.sh/${operation}/${expression}`)
  .then(response => response.json())
}
