<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <img
        src="../assets/img/alura-logo.svg"
        alt="Logo da alura"
        class="logo me-3"
      />
      <button
        class="navbar-toggler mb-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Pesquisar"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Pesquisar
              </button>
            </form>
          </li>
        </ul>
        <form class="d-flex" @submit.prevent="logout">
          <input type="hidden" />
          <button class="btn btn-danger" type="submit">Logout</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const logout = () => {
  store.commit("logout");
  router.push({
    name: "Login",
  });
};
</script>

<style scoped>
.logo {
  width: 90px;
}
</style>
