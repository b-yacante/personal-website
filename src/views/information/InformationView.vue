<script setup lang="ts"></script>

<template>
  <div class="view-container">
    <v-spacer />
    <div class="sheet-container">
      <v-sheet rounded="xl" elevation="15" height="350"> 
        <!-- rellenar con info -->
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-container {
  height: 100%;
  width: 100%;
  display: grid;
  padding: 8px;
  justify-content: center;
  .sheet-container {
    width: 45vw;
  }
}
</style>
