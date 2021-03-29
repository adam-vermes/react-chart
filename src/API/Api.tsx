import data from './data.json';

function getData() {
  return new Promise((resolve) => {
    resolve(data);
  });
}

export { getData };
