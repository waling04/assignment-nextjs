import { auth } from './app/auth'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { nextUrl } = req
  if (nextUrl.pathname === '/login' || nextUrl.pathname === '/signup') return null

  if (!isLoggedIn && nextUrl.pathname !== '/login')
    return Response.redirect(new URL('/login', nextUrl))
  // console.log('Current route:', req.nextUrl.pathname)
  // console.log('LoggedIn: ', isLoggedIn)
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
