export const requestPromise = (email) => {
  return fetch(`http://localhost:3000/shareFood?requestedBy=${email}`).then(
    (res) => res.json()
  );
};
