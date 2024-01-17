import { FormEventHandler } from 'react'
import { FileRoute } from '@tanstack/react-router'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { login } from '@/auth/service'

export const Route = new FileRoute('/_public/').createRoute({
  component: IndexComponent,
})

function IndexComponent() {
  const signIn = useSignIn()
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    }

    if (!values.email || !values.password) return

    const data = await login({
      email: values.email,
      password: values.password,
    })

    if (!data) return

    const isSignedIn = signIn({
      auth: {
        token: data.accessToken.token,
        type: 'Bearer',
      },
      // refresh: data.refreshToken,
      userState: data.admin,
    })

    console.log({ isSignedIn })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" name="email" id="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input type="password" name="password" id="password" />
      <br />
      <br />
      <input type="submit" value="Sign In" />
    </form>
  )
}
