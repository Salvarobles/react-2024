const URL = "https://jsonplaceholder.org/users";

export const getUsers = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

export const getUser = async (email) => {
  try {
    const users = await getUsers();
    const user = users.find((user) => user.email === email);

    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }

    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error.message);
    throw error;
  }
};

export const getValidateUsers = async () => {
    const users = [];
    try {
      const data = await getUsers();
      data.forEach((user) => {
        const sanitizedUser = {
          email: user.email.trim().toLowerCase(),
          password: user.login.password.trim().toLowerCase()
        };
        
        users.push(sanitizedUser);
      });
      return users;
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      throw error;
    }
  };