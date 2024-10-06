import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises
  const promises = [
    signUpUser(firstName, lastName), // Resolves to user data
    uploadPhoto(fileName), // Rejects due to photo upload failure
  ];

  // Wait for all promises to settle
  const results = await Promise.allSettled(promises);

  // Map the results and return the required output format
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason, // If fulfilled, return value; else return reason (error)
  }));
}
