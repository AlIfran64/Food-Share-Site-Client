export const requestPromise = (email, accessToken) => {
  return fetch(
    `https://sharebite-server-coral.vercel.app/shareFood/requested?requestedBy=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
