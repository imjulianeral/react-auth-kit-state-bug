import createStore from 'react-auth-kit/createStore'
import { AuthProps } from './service'

export const store = createStore<AuthProps>({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
})
