import { useEffect } from 'react'
import { useIsAuthenticated } from 'react-auth-kit'

export function AuthState() {
  const getAuthState = useIsAuthenticated()
  const isAuthenticated = getAuthState()

  useEffect(() => {
    console.log(isAuthenticated)
  }, [isAuthenticated])

  return <p>isAuthenticated: {isAuthenticated ? 'true' : 'false'}</p>
}
