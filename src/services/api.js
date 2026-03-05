// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

export const authApi = {
  // Регистрация нового пользователя
  register: async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Ошибка при регистрации");
    }

    return response.json();
  },

  // Логин (пригодится для страницы авторизации)
  login: async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) throw new Error("Неверный логин или пароль");

    return response.json();
  },
};
