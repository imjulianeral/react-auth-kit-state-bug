import { RouterProvider } from '@tanstack/react-router'
import { AuthProvider } from 'react-auth-kit'
import { router } from './router'

function App() {
  return (
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
