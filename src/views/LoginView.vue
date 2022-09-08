<template>
  <div class="text-center mt-3">
    <h1>Login</h1>
    ou
    <RouterLink :to="{ name: 'Register' }"> Criar uma conta </RouterLink>
  </div>
  <form @submit.prevent="login">
    <div
      class="rounded text-light bg-danger mb-3 p-1 d-flex justify-content-between align-items-center"
      v-if="errorMsg"
    >
      {{ errorMsg }}
      <button
        type="button"
        class="btn btn-danger py-0 px-2"
        @click="closeErrorMsg"
      >
        X
      </button>
    </div>
    <div class="form-group mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="user@example.com"
        class="form-control"
        v-model="user.email"
        required
        autofocus
      />
    </div>
    <div class="form-group mb-3">
      <label for="password" class="form-label">Senha</label>
      <input
        name="password"
        type="password"
        id="password"
        placeholder="Insira sua senha"
        class="form-control"
        v-model="user.password"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary w-100 mb-3">Login</button>
  </form>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { ref } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

let errorMsg = ref("");

const user = {
  email: "",
  password: "",
};

const login = () => {
  closeErrorMsg();
  store
    .dispatch("login", user)
    .then(() => {
      router.push({
        name: "Home",
      });
    })
    .catch(() => {
      // errorMsg.value = response.data.message;
      errorMsg.value = "E-mail ou senha inválidos";
      user.password = "";
    });
};

const closeErrorMsg = () => {
  errorMsg.value = "";
};
</script>
