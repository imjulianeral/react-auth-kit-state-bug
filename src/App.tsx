import { RouterProvider } from '@tanstack/react-router'
import AuthProvider from 'react-auth-kit'
import { store } from '@/auth/store'
import { router } from './router'

function App() {
  return (
    <AuthProvider store={store}>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
