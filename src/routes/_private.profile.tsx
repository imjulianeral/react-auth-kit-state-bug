import { FileRoute } from '@tanstack/react-router'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { AuthUser } from '@/auth/service'

export const Route = new FileRoute('/_private/profile').createRoute({
  component: IndexComponent,
})

function IndexComponent() {
  const user = useAuthUser<AuthUser>()
  const signOut = useSignOut()

  return (
    <>
      <pre>{JSON.stringify(user?.name, null, 2)}</pre>
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}
