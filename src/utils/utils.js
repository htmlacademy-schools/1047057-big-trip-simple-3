function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const generateKeydownFun = (element, onKeydownFunction) => {
  const onEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      onKeydownFunction();
    }
  };
  element.addEventListener('keydown', onEscKeydown);

  return onEscKeydown;
};

export { getRandomInt, generateKeydownFun };
