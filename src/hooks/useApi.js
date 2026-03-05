/*import { useNavigate } from "react-router-dom";

export function useApi() {
  const navigate = useNavigate();

  const sendRequest = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        // ВОТ ЗДЕСЬ код ошибки ПИШЕТСЯ в адресную строку!
        navigate(`/error/${response.status}`);
        return null;
      }

      return await response.json();
    } catch (error) {
      // Если сервер сдох и не отвечает (Network Error)
      navigate("/error/500");
      return null;
    }
  };

  return { sendRequest };
}*/

import { useNavigate } from "react-router-dom";

export function useApi() {
  const navigate = useNavigate();

  const sendRequest = async (url, options = {}) => {
    // 1. Пытаемся достать токен из хранилища
    const token = localStorage.getItem("token");

    // 2. Формируем заголовки (стандартные + те, что передали в options)
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    // 3. Если токен есть — добавляем его в запрос
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, { ...options, headers });

      if (!response.ok) {
        // Если 401 — логируем для отладки, но всё равно редиректим на страницу ошибки
        if (response.status === 401) {
          console.warn("Требуется авторизация или токен неверный");
        }

        navigate(`/error/${response.status}`);
        return null;
      }

      return await response.json();
    } catch (error) {
      // Если сервер не отвечает или ошибка сети
      navigate("/error/500");
      return null;
    }
  };

  return { sendRequest };
}