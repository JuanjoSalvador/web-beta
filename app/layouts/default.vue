<template>
  <div class="is-flex is-flex-direction-column" style="min-height: 100vh;">
    
    <main class="is-flex-grow-1">
      <div class="column is-half is-offset-one-quarter">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <div class="has-text-centered">
        <p class="is-small">
          <strong>
            Hecho con ❤️ por Juanjo Salvador
          </strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Eliminamos márgenes por defecto del body para evitar scrolls innecesarios */
body {
  margin: 0;
}
footer {
  background-color: var(--bg) !important;
  border-top: 1px solid;
  border-color: var(--main-dim);
  box-shadow: 0 0 24px rgba(122,255,140,0.05);
}
</style>