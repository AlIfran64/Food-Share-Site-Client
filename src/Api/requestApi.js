export const requestPromise = (email, accessToken) => {
  return fetch(
    `http://localhost:3000/shareFood/requested?requestedBy=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
