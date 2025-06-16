export const manageMyFoodPromise = (email) => {
  return fetch(`http://localhost:3000/shareFood?email=${email}`).then((res) =>
    res.json()
  );
};
