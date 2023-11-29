import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises)
    .then((data) => {
      const results = [];
      data.forEach((result) => {
        if (result.status === 'fulfilled') {
          results.push(result);
        } else {
          results.push({
            status: result.status,
            value: `${result.reason.message}`,
          });
        }
      });
      return results;
    });
}
