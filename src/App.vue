<script setup lang="ts">
import AppNavi, { MenuItem } from "./components/AppNavi.vue";

const menuItems: MenuItem[] = [
  {
    type: "heading",
    title: "Main"
  },
  {
    type: "menu",
    title: "ToDo",
    icon: "fa-list",
    url: "/todo"
  },
  {
    type: "menu",
    title: "ToDo2",
    icon: "fa-list",
    url: "/todo2"
  },
];
</script>

<template>
  <AppNavi title="Todo App" :menu-items="menuItems"></AppNavi>
</template>
