export default function getFullResponseFromAPI(isSuccess) {
  return new Promise((resolve, reject) => {
    if (isSuccess) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working  currently'));
    }
  });
}
