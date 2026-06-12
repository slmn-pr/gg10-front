export const supportRouteBase = (pathname) => {
  if (pathname.startsWith('/profile/support') || pathname.startsWith('/support')) return '/support';
  if (pathname.startsWith('/user/support')) return '/user/support';
  if (pathname.startsWith('/profile')) return '/profile/support';
  return '/user/profile/support';
};
