// middleware/transitions.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const toOrder = (to.meta.pageOrder as number) || 0;
  const fromOrder = (from.meta.pageOrder as number) || 0;

  const transitionName = toOrder > fromOrder ? 'slide-right' : 'slide-left';

  // Aplicamos a ambos para que se muevan al unísono
  to.meta.pageTransition = { name: transitionName, mode: 'out-in' };
  to.meta.layoutTransition = { name: transitionName, mode: 'out-in' };
});