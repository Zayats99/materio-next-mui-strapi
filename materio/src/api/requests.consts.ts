const _api = (url: string) => `http://localhost:1337/api/${url}`

export const endpoints = {
  auth: {
    login: _api(`auth/local`),
    register: _api(`auth/local/register`)
  },
  users: {
    me: _api(`users/me`)
  }
}
