<script setup lang="ts"></script>

<template>
  <div class="view-container">
    <v-spacer />
    <div class="sheet-container">
      <v-sheet rounded="xl" elevation="15" height="350">
        <!-- rellenar con info -->
        <div class="frijo">
          <div class="body">
            <div class="divisor-line"></div>
          </div>
          <div class="arm"></div>
          <div class="arm"></div>
          <div class="glasses">
            <div class="glass"></div>
            <div class="bridge"></div>
            <div class="glass"></div>
          </div>
        </div>
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

.frijo {
  display: flex;
  position: relative;
  width: 300px;
  height: 300px;
  .body {
    height: 90%;
    width: 70%;
    background-color: red;
    border-radius: 50% 50%;
    .divisor-line{
      height: 100%;
      width: 20px;
      color: yellow;
    }
  }
  .arm {
    height: 40%;
    width: 15%;
    background-color: blue;
    border-radius: 80% 80% 2.2rem 2.2rem;
  }
  .glasses {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    .glass {
      width: 25%;
      height: 20%;
      background-color: black;
      border-radius: 10px;
    }
    .bridge{
      width: 10%;
    }
  }
}
</style>
