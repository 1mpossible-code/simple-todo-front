<template>
  <div class="link-container">
    <router-link :to="path" class="link">{{ title ?? path }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.link-container {
  width: 30%;
}

.link {
  width: 100%;
  height: 2rem;
  border: 1px solid silver;
  border-radius: 15px;
  background-color: darkcyan;
  transition: 0.3s;
  float: left;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  color: #dddddd;
}

.link:hover {
  filter: brightness(110%);
  transform: scale(1.1);
}
</style>
