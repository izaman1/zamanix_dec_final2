export const AUTH_CONFIG = {
  admin: {
    email: process.env.ADMIN_EMAIL || 'admin@zamanix.com',
    // Never expose password in frontend code
    isAdmin: (email: string) => email === process.env.ADMIN_EMAIL
  },
  jwt: {
    expiresIn: '30d'
  },
  session: {
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  }
};