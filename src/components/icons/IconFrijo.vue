<script lang="ts" setup></script>
<template>
  <div class="frijo">
    <div class="hair">
      <div class="big-circle"></div>
      <div class="big-triangle"></div>
      <div class="curved-box"></div>
      <!-- <div class="circle">
        <div class="triangle"></div>
      </div> -->
    </div>
    <div class="body">
      <div class="divisor-line"></div>
    </div>
    <span class="arms-container">
      <div class="arms right"></div>
      <div class="arms left"></div>
    </span>
    <span class="legs-container">
      <div class="legs right"></div>
      <div class="legs left"></div>
    </span>
    <div class="glasses">
      <div class="glass"></div>
      <div class="bridge"></div>
      <div class="glass"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frijo {
  display: flex;
  position: relative;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  .hair {
    display: flex;
    z-index: 5;
    position: absolute;
    width: 80%;
    height: 40%;
    .big-circle {
      width: 40%;
      height: 80%;
      border-radius: 50%;
      background-color: burlywood;
    }
    .curved-box {
      position: absolute;
      width: 80%;
      height: 50%;
      background-color: red;
      border-radius: 50% 50% 50px 50px;
    }
    .triangle {
      position: relative;
      background-color: orange;
      text-align: left;
    }
    .triangle:before,
    .triangle:after {
      content: '';
      position: absolute;
      background-color: inherit;
    }
    .triangle,
    .triangle:before,
    .triangle:after {
      width: 10em;
      height: 10em;
      border-top-right-radius: 30%;
    }
    .circle {
      position: absolute;
      width: 20%;
      height: 40%;
      border-radius: 50%;
      background-color: burlywood;
      .triangle {
        width: 10%;
        height: 0;
        overflow: hidden;
      }
      .triangle::after {
        position: absolute;
        content: '';
        left: 5%;
        top: 70%;
        width: 0;
        height: 0;
        border-top: 45px solid burlywood;
        border-right: 45px solid transparent;
      }
    }
  }
  .body {
    z-index: 1;
    height: 90%;
    width: 70%;
    background-color: green;
    border-radius: 50% 50%;
    position: relative;
    .divisor-line {
      height: 100%;
      width: 2px;
      background-color: aqua;
      position: absolute;
      left: 50%;
    }
  }
  .arms-container {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    .arms {
      position: absolute;
      height: 40%;
      width: 15%;
      background-color: blue;
      border-radius: 2rem 2rem 80% 80%;
      top: 38%;
    }
    .right {
      right: 10%;
      transform: rotate(-20deg);
    }
    .left {
      left: 10%;
      transform: rotate(20deg);
    }
  }
  .legs-container {
    z-index: 0;
    .legs {
      position: absolute;
      height: 35%;
      width: 17%;
      background-color: brown;
      border-radius: 2rem 2rem 80% 80%;
      top: 70%;
    }
    .right {
      right: 25%;
      transform: rotate(-15deg);
    }
    .left {
      left: 25%;
      transform: rotate(15deg);
    }
  }
  .glasses {
    z-index: 3;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    top: -10%;
    .glass {
      width: 25%;
      height: 20%;
      background-color: black;
      border-radius: 10px;
    }
    .bridge {
      width: 10%;
      height: 5%;
      background-color: yellow;
    }
  }
}
</style>
