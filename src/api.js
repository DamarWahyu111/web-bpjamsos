const API_BASE_URL = 'https://api.bpjsketenagakerjaan.go.id/v1'

// Helper function for making HTTP requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

// Authentication APIs
export const login = async (credentials) => {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  })
}

export const register = async (userData) => {
  return apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData)
  })
}

export const logout = async () => {
  return apiRequest('/auth/logout', {
    method: 'POST'
  })
}

// Complaint APIs
export const submitComplaint = async (complaintData) => {
  return apiRequest('/complaints', {
    method: 'POST',
    body: JSON.stringify({
      ...complaintData,
      submittedAt: new Date().toISOString()
    })
  })
}

export const getComplaints = async (userId) => {
  return apiRequest(`/complaints/user/${userId}`)
}

// User Profile APIs
export const getUserProfile = async (userId) => {
  return apiRequest(`/users/${userId}`)
}

export const updateUserProfile = async (userId, profileData) => {
  return apiRequest(`/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(profileData)
  })
}

// BPJS Program APIs
export const getProgramInfo = async (programType) => {
  return apiRequest(`/programs/${programType}`)
}

export const getParticipantData = async (participantId) => {
  return apiRequest(`/participants/${participantId}`)
}

// Statistics APIs
export const getStatistics = async () => {
  return apiRequest('/statistics')
}

// Testimonials APIs
export const getTestimonials = async () => {
  return apiRequest('/testimonials')
}

export const submitTestimonial = async (testimonialData) => {
  return apiRequest('/testimonials', {
    method: 'POST',
    body: JSON.stringify(testimonialData)
  })
}

// File Upload API
export const uploadFile = async (file, type = 'document') => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('type', type)

  return apiRequest('/upload', {
    method: 'POST',
    body: formData,
    headers: {} // Remove Content-Type to let browser set it for FormData
  })
}

// Notification APIs
export const getNotifications = async (userId) => {
  return apiRequest(`/notifications/user/${userId}`)
}

export const markNotificationAsRead = async (notificationId) => {
  return apiRequest(`/notifications/${notificationId}/read`, {
    method: 'PATCH'
  })
}
