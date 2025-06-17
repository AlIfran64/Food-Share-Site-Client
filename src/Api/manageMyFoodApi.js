export const manageMyFoodPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/shareFood/donor?donorEmail=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
