import { AuthState } from '@/auth/State'
import { rootRouteWithContext, Outlet } from '@tanstack/react-router'

export const Route = rootRouteWithContext()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      <AuthState />
    </>
  )
}
