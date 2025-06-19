// Usuarios de ejemplo
const users = [
  {
    id: '1',
    username: 'user',
    role: 'user',
    name: 'Usuario Demo'
  },
  {
    id: '2',
    username: 'admin',
    role: 'admin',
    name: 'Administrador'
  }
];

// Sesión en memoria
let currentUser = null;

export function login(username, password) {
  // Credenciales de ejemplo
  const validCredentials = [
    { username: 'user', password: 'user123' },
    { username: 'admin', password: 'admin123' }
  ];

  const isValid = validCredentials.some(
    cred => cred.username === username && cred.password === password
  );

  if (isValid) {
    const user = users.find(u => u.username === username);
    if (user) {
      currentUser = user;
      return user;
    }
  }
  
  return null;
}

export function logout() {
  currentUser = null;
}

export function getCurrentUser() {
  return currentUser;
}

export function isAuthenticated() {
  return currentUser !== null;
}

export function hasRole(role) {
  return currentUser?.role === role;
}