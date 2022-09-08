<template>
  <div class="container position-absolute top-50 start-50 translate-middle">
    <img
      src="../assets/img/alura-logo.svg"
      alt="Logo da Alura"
      class="logo mx-auto d-block"
    />
    <RouterView />
    <a
      href="https://portfolio-mauricio-cardoso.vercel.app/home"
      class="portfolio"
    >
      Veja meu portfólio
      <img
        src="../assets/img/astronaut-icon.svg"
        alt="Ícone de astronauta"
        class="icon"
      />
    </a>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.logo {
  width: 200px;
}

.portfolio {
  text-decoration: none;
  color: black;
}
.portfolio:hover {
  color: blue;
}

.icon {
  width: 12px;
}
</style>
