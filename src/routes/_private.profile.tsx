import { FileRoute } from '@tanstack/react-router'
import { useAuthUser } from 'react-auth-kit'
import { useSignOut } from 'react-auth-kit'

export const Route = new FileRoute('/_private/profile').createRoute({
  component: IndexComponent,
})

function IndexComponent() {
  const user = useAuthUser()
  const signOut = useSignOut()

  return (
    <>
      <pre>{JSON.stringify(user()?.name, null, 2)}</pre>
      <button onClick={signOut}>Sign Out</button>
    </>
  )
}
