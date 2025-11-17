// API Base URL - Tự động chọn dựa vào môi trường
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8081"

// API Endpoints
export const API_ENDPOINTS = {
  // Posts
  posts: `${API_BASE_URL}/posts`,
  postById: (id) => `${API_BASE_URL}/posts/${id}`,

  // Users
  users: `${API_BASE_URL}/users`,
  userById: (id) => `${API_BASE_URL}/users/${id}`,

  // Auth
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,
    logout: `${API_BASE_URL}/auth/logout`,
  },

  // Categories
  categories: `${API_BASE_URL}/categories`,
  categoryById: (id) => `${API_BASE_URL}/categories/${id}`,

  // Comments
  comments: `${API_BASE_URL}/comments`,
  commentById: (id) => `${API_BASE_URL}/comments/${id}`,
};

// Export để dùng trong code
export default API_ENDPOINTS;
