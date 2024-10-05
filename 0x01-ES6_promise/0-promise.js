export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Get response from API');
    } else {
      reject(new Error('Failed to get response from API'));
    }
  });
}
