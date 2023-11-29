import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  await uploadPhoto().then((value) => {
    result.photo = value;
  });

  await createUser().then((value) => {
    result.user = value;
  });

  return result;
}
