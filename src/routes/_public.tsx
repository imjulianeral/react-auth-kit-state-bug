import { Outlet, FileRoute, Navigate } from '@tanstack/react-router'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

export const Route = new FileRoute('/_public').createRoute({
  component: LayoutComponent,
})

function LayoutComponent() {
  const isAuthenticated = useIsAuthenticated()

  if (isAuthenticated()) return <Navigate to="/profile" />

  return <Outlet />
}
