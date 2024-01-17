import { Route as rootRoute } from './routes/__root'
import { Route as PublicImport } from './routes/_public'
import { Route as PrivateImport } from './routes/_private'
import { Route as PublicIndexImport } from './routes/_public.index'
import { Route as PrivateProfileImport } from './routes/_private.profile'

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const PrivateRoute = PrivateImport.update({
  id: '/_private',
  getParentRoute: () => rootRoute,
} as any)

const PublicIndexRoute = PublicIndexImport.update({
  path: '/',
  getParentRoute: () => PublicRoute,
} as any)

const PrivateProfileRoute = PrivateProfileImport.update({
  path: '/profile',
  getParentRoute: () => PrivateRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_private': {
      preLoaderRoute: typeof PrivateImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/_private/profile': {
      preLoaderRoute: typeof PrivateProfileImport
      parentRoute: typeof PrivateImport
    }
    '/_public/': {
      preLoaderRoute: typeof PublicIndexImport
      parentRoute: typeof PublicImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  PrivateRoute.addChildren([PrivateProfileRoute]),
  PublicRoute.addChildren([PublicIndexRoute]),
])
