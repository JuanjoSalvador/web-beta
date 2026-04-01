export default defineNuxtRouteMiddleware((to, from) => {
  const toOrder = (to.meta.pageOrder as number) || 0;
  const fromOrder = (from.meta.pageOrder as number) || 0;
  
  const pageTransitionName = toOrder > fromOrder ? 'slide-right' : 'slide-left';
  to.meta.pageTransition = { name: pageTransitionName, mode: 'out-in' };

  if (to.meta.layout !== from.meta.layout) {
    to.meta.layoutTransition = { name: 'layout-up', mode: 'out-in' };
  } else {
    to.meta.layoutTransition = { name: pageTransitionName, mode: 'out-in' };
  }
});