// // src/api/adminService.js
// import axios from 'axios';

// const BASE_URL = 'http://localhost:4000/api';

// // Add admin authentication
// export const adminLogin = async (credentials) => {
//   try {
//     const response = await axios.post(`${BASE_URL}/admin/login`, credentials);
//     if (response.data.token) {
//       localStorage.setItem('adminToken', response.data.token);
//       localStorage.setItem('adminInfo', JSON.stringify(response.data.admin));
//     }
//     return response.data;
//   } catch (error) {
//     if (error.response?.data?.message) {
//       throw new Error(error.response.data.message);
//     }
//     throw new Error('Login failed. Please try again.');
//   }
// };

// // Verify admin token
// export const verifyAdminToken = async () => {
//   const token = localStorage.getItem('adminToken');
//   if (!token) return false;

//   try {
//     const response = await axios.get(`${BASE_URL}/admin/verify`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data.isValid;
//   } catch (error) {
//     localStorage.removeItem('adminToken');
//     localStorage.removeItem('adminInfo');
//     return false;
//   }
// };

// // Logout admin
// export const adminLogout = () => {
//   localStorage.removeItem('adminToken');
//   localStorage.removeItem('adminInfo');
// };


// export const getAllMemberships = async () => {
//   const token = localStorage.getItem('adminToken');
//   try {
//     const response = await axios.get(`${BASE_URL}/memberships`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: 'Failed to fetch memberships' };
//   }
// };

// export const getAllDemoSessions = async () => {
//   const token = localStorage.getItem('adminToken');
//   try {
//     const response = await axios.get(`${BASE_URL}/demo-sessions`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: 'Failed to fetch demo sessions' };
//   }
// };

// export const getAllMessages = async () => {
//   const token = localStorage.getItem('adminToken');
//   try {
//     const response = await axios.get(`${BASE_URL}/messages`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: 'Failed to fetch messages' };
//   }
// };

// export const updateMembershipStatus = async (id, status) => {
//   const token = localStorage.getItem('adminToken');
//   try {
//     const response = await axios.patch(`${BASE_URL}/memberships/${id}`, 
//       { status },
//       { headers: { Authorization: `Bearer ${token}` }}
//     );
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: 'Failed to update membership' };
//   }
// };

// export const updateDemoSessionStatus = async (id, status) => {
//   const token = localStorage.getItem('adminToken');
//   try {
//     const response = await axios.patch(`${BASE_URL}/demo-sessions/${id}`, 
//       { status },
//       { headers: { Authorization: `Bearer ${token}` }}
//     );
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: 'Failed to update demo session' };
//   }
// };

// export const updateMessageStatus = async (id, status) => {
//   const token = localStorage.getItem('adminToken');
//   try {
//     const response = await axios.patch(`${BASE_URL}/messages/${id}`, 
//       { status },
//       { headers: { Authorization: `Bearer ${token}` }}
//     );
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || { message: 'Failed to update message' };
//   }
// };



const API_URL = 'http://localhost:4000/api/admin';

// Admin Authentication
export const adminLogin = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminInfo', JSON.stringify(data.admin));
    }
    return data;
  } catch (error) {
    console.error('Admin login error:', error);
    throw error;
  }
};

// Verify Admin Token
export const verifyAdminToken = async () => {
  const token = localStorage.getItem('adminToken');
  if (!token) return false;

  try {
    const response = await fetch(`${API_URL}/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Token verification failed');
    const data = await response.json();
    return data.isValid;
  } catch (error) {
    console.error('Token verification error:', error);
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    return false;
  }
};

// Admin Logout
export const adminLogout = () => {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('adminInfo');
};

// Admin Data Operations
export const getAllMemberships = async () => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await fetch(`${API_URL}/memberships`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch memberships');
    return await response.json();
  } catch (error) {
    console.error('Error fetching memberships:', error);
    throw error;
  }
};

export const getAllDemoSessions = async () => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await fetch(`${API_URL}/demo-sessions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch demo sessions');
    return await response.json();
  } catch (error) {
    console.error('Error fetching demo sessions:', error);
    throw error;
  }
};

export const getAllMessages = async () => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await fetch(`${API_URL}/messages`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch messages');
    return await response.json();
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

// Status Update Operations
const updateStatus = async (endpoint, id, status) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await fetch(`${API_URL}/${endpoint}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) throw new Error(`Failed to update ${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error(`Error updating ${endpoint}:`, error);
    throw error;
  }
};

export const updateMembershipStatus = async (id, status) => {
  return updateStatus('memberships', id, status);
};

export const updateDemoSessionStatus = async (id, status) => {
  return updateStatus('demo-sessions', id, status);
};

export const updateMessageStatus = async (id, status) => {
  return updateStatus('messages', id, status);
};