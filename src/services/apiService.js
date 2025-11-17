import { API_BASE_URL } from "../config/api"

/**
 * Helper function để gọi API
 * @param {string} endpoint - API endpoint (vd: '/posts', '/users')
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise} Response data
 */
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  const token = localStorage.getItem("jwtToken") // ← Đổi từ "token" thành "jwtToken"
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  try {
    const response = await fetch(url, config)
    const data = await response.json().catch(() => null)

    //  Trả về format giống axios
    return {
      data: data,
      status: response.status,
      ok: response.ok,
    }
  } catch (error) {
    console.error("API request failed:", error)
    // Trả về format lỗi
    return {
      data: null,
      status: 0,
      ok: false,
      error: error.message,
    }
  }
}

// const result = await api.getPostById(id)
// if (result.status === 200) {
//   setPosts(result.data) // ← Giờ có .data rồi
// }
/**
 * API Service - Chứa tất cả các API calls
 */
export const api = {
  // ==================== POSTS ====================

  // Get all posts
  getPosts: () => apiRequest("/posts"),

  // Get post by ID
  getPostById: (id) => apiRequest(`/post/${id}`),

  getPostDetailById: (id) => apiRequest(`/post/detail/${id}`),

  getMyBlog: () => apiRequest(`/post/myblog`),
  // Create new post
  createPost: (postData) =>
    apiRequest("/post/create", {
      method: "POST",
      body: JSON.stringify(postData),
    }),

  // Update post
  updatePost: (id, postData) =>
    apiRequest(`/post/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(postData),
    }),

  // Delete post
  deletePost: (id) =>
    apiRequest(`/post/delete/${id}`, {
      method: "DELETE",
    }),

  // ==================== USERS ====================

  // Get all users
  getUsers: () => apiRequest("/users"),

  // Get user by ID
  getUserById: (id) => apiRequest(`/users/${id}`),

  // ==================== AUTH ====================

  // Login
  login: (credentials) =>
    apiRequest("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),

  // Register
  register: (userData) =>
    apiRequest("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  createComment: (postId, commentData) =>
    apiRequest(`/post/${postId}/comment`, {
      method: "POST",
      body: JSON.stringify(commentData),
    }),

  // Delete comment
  deleteComment: (postId, id) =>
    apiRequest(`/post/${postId}/comments/${id}`, {
      method: "DELETE",
    }),

  searchPostsByTitle: (title) => apiRequest(`/posts/search?title=${title}`),

  // Lọc posts theo tag slug
  filterPostsByTag: (tagSlug) => apiRequest(`/tag/search?slug=${tagSlug}`),

  getTags: () => apiRequest("/tags"),
}

export default api
