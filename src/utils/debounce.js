let timer = null;
const debounce = (fn, wait) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    fn();
  }, wait);
};

export default debounce;
