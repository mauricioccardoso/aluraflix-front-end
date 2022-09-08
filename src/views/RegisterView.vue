<template>
  <div class="text-center mt-3">
    <h1>Cadastrar</h1>
    ou
    <RouterLink :to="{ name: 'Login' }"> Fazer login </RouterLink>
  </div>
  <form @submit.prevent="register">
    <div class="form-group mb-3">
      <label for="name" class="form-label">Nome</label>
      <input
        name="name"
        type="text"
        id="name"
        placeholder="Insira seu nome"
        class="form-control"
        v-model="user.name"
        required
        autofocus
      />
    </div>
    <div class="form-group mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="Insira seu email"
        class="form-control"
        v-model="user.email"
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
    <div class="form-group mb-3">
      <label for="password_confirmation" class="form-label"
        >Confirme sua senha
      </label>
      <input
        name="password_confirmation"
        type="password"
        id="password_confirmation"
        placeholder="Insira sua senha"
        class="form-control"
        v-model="user.password_confirmation"
        required
      />
    </div>
    <button class="btn btn-primary w-100 mb-3">Cadastrar</button>
  </form>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const register = () => {
  store.dispatch("register", user).then(() => {
    router.push({
      name: "Home",
    });
  });
};
</script>
