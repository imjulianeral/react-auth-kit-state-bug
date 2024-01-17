type LoginParams = { email: string; password: string }
export type AuthUser = {
  name: {
    first: string
    last: string
    full: string
  }
}
export type AuthProps = {
  admin: {
    name: {
      first: string
      last: string
      full: string
    }
    email: { address: string }
    _id: string
    role: string
    createdAt: string
    updatedAt: string
    id: string
  }
  accessToken: {
    _id: string
    type: string
    token: string
  }
  refreshToken: string
}

export const login = async (params: LoginParams) => {
  try {
    const req = await fetch(`${import.meta.env.VITE_AUTH_API}/login/local`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'x-application-key': import.meta.env.VITE_AUTH_API_KEY,
        'Content-Type': 'application/json',
      },
    })
    const res: AuthProps = await req.json()

    return res
  } catch (error) {
    console.error(error)
  }
}
