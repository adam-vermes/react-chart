import data from './data.json';

function getData() {
  return new Promise((resolve) => {
    setTimeout(resolve(data));
  }, 1000);
}

export { getData };
