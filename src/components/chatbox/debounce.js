export default function debounce(callback, delay) {
    let timeoutId;
  
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }
  