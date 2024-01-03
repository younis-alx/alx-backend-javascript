export default function getResponseFromAPI() {
  return new Promise((res, rej) => {
    const error = false;
    if (error) {
      rej(new Error('5xx status code'));
    } else {
      res('2xx status code');
    }
  });
}
