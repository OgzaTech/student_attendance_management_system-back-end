export default {
  'users-permissions': {
    config: {
      jwtSecret: process.env.JWT_SECRET,
      jwt: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
      register: {
        allowedFields: [],
      },
    },
  }
}
