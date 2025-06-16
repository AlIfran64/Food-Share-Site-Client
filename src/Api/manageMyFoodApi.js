export const manageMyFoodPromise = (email) => {
  return fetch(`http://localhost:3000/shareFood?donorEmail=${email}`).then(
    (res) => res.json()
  );
};
