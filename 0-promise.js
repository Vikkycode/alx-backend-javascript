export default function getResponseAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('success response from API');
    } else {
      reject(new Error('failed to get response from API'));
    }
  });
}
