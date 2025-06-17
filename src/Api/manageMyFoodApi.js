export const manageMyFoodPromise = (email, accessToken) => {
  return fetch(
    `https://sharebite-server-coral.vercel.app/shareFood/donor?donorEmail=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
