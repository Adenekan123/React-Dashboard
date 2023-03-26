const URL = "https://dorfville.cyclic.app/auth";

//register
const register = async (user) => {
  const response = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const result = await response.json();
  return result;
};

//login user
const login = async (credentials) => {
  try {
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    if (!response) {
      throw new Error("");
    }

    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
};

//logout user
const logout = async () => {
  await fetch(`${URL}/logout`, {
    credentials: "include",
  });
};

export const API = {
  register,
  login,
  logout,
};
