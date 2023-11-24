const saveUser = async (user) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  return await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API}/register`,
    options
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });
};

const login = async (user) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: user.email, password: user.password }),
  };

  return await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API}/login`,
    options
  ).then((res) => res.json());
};

export { saveUser, login };
