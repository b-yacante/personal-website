<script setup lang="ts">
import IconGitHub from '../icons/IconGitHub.vue'
import IconTwitter from '../icons/IconTwitter.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconFrijo from '../icons/IconFrijo.vue'
</script>

<template>
  <!-- toolbar -->
  <div class="toolbar-base">
    <!-- icono Frijo-->
    <div class="frijo-icon">
      <!-- <IconFrijo /> -->
    </div>
    <!-- elementos principales -->
    <div class="wrap-sections">
      <!-- informacion -->
      <a href="/" class="section">
        <b>Information</b>
        <v-icon icon="mdi-chevron-down" color="primary" />
      </a>
      <!-- trabajo/experiencia -->
      <a href="/work" class="section">
        <b>Work</b>
        <v-icon icon="mdi-chevron-down" color="primary" />
      </a>
      <!-- proyectos -->
      <a href="/projects" class="section">
        <b>Projects</b>
        <v-icon icon="mdi-chevron-down" color="primary" />
      </a>
    </div>
    <!-- iconos de redes -->
    <div class="wrap-icons">
        <a class="icon" href="https://github.com/b-yacante" target="_blank">
          <IconGitHub  />
        </a>
        <a class="icon" href="https://twitter.com/Frijosuu" target="_blank">
          <IconTwitter class="icon" />
        </a>
        <a class="icon" href="https://github.com/b-yacante" target="_blank">
          <IconLinkedin class="icon" />
        </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbar-base {
  width: 100vw;
  height: 12vh;
  position: sticky;
  top: 0;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 10% 75% 15%;

  .frijo-icon {
    width: 3rem;
    height: 3rem;
    align-self: center;
    justify-self: center;
  }

  .wrap-sections {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 20% 20% 20%;

    .section {
      align-self: center;
      justify-self: center;
      text-align: center;
      font-size: large;
    }
    a {
      color: var(--color-text);
      text-decoration: none;
    }
  }

  .wrap-icons {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 20% 20% 20%;
    gap: 2rem;

    .icon {
      align-self: center;
      justify-self: end;
      width: 3rem;
      height: 3rem;
      color: white;
    }
  }
}
</style>
