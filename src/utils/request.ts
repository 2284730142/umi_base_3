export const getToken = () => {
  const userData = sessionStorage.getItem('testUser');
  if (!userData || userData === 'null' || userData === 'undefined') {
    return null;
  }
  let accessToken = null;
  try {
    ({ accessToken } = JSON.parse(userData));
  } catch (err) {
    console.log(err);
  }
  return accessToken;
};
