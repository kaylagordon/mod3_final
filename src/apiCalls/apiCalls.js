export const getAnswer = (operation, expression) => {
  return fetch(`https://newton.now.sh/${operation}/${expression}`)
  .then(response => {
    if (!response.ok) {
      throw Error('Error fetching ideas');
    }
    return response.json();
  })
}
