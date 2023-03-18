function writeCards(namesArray, event) {
    const messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
      messagesArray.push(message);
    }
    return messagesArray;
  }
  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
