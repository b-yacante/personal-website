<script lang="ts" setup></script>
<template>
  <div class="frijo">
    <div class="hair">
      <div class="big-circle"></div>
      <div class="big-triangle"></div>
      <div class="curved-box"></div>
      <div class="circle">
        <div class="triangle"></div>
      </div>
    </div>
    <div class="body">
      <div class="mouth">
      </div>
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
    z-index: 4;
    position: absolute;
    width: 80%;
    height: 40%;
    top: 0;
    .big-triangle {
      position: absolute;
      bottom: 0;
      left: -6%;
      width: 60px;
      height: 60px;
      border-top: solid 50px brown;
      border-left: solid 50px brown;
      border-bottom-left-radius: 45px;
      border-bottom-right-radius: 45px;
      border-top-left-radius: 5rem;
      border-right: solid 30px brown;
      transform: rotate(-45deg);
    }
    .big-circle {
      position: absolute;
      top: 3%;
      right: 10%;
      width: 40%;
      height: 75%;
      border-radius: 50%;
      background-color: brown;
    }
    .curved-box {
      position: absolute;
      top: 8%;
      width: 80%;
      height: 75%;
      background-color: brown;
      border-radius: 50% 50% 50px 50px;
      transform: rotate(-15deg);
    }
    .circle {
      position: absolute;
      width: 16%;
      height: 32%;
      border-radius: 50%;
      background-color: brown;
      right: 0;
      bottom: 10%;
      transform: rotate(-20deg);
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
        border-top: 35px solid brown;
        border-right: 35px solid transparent;
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

    .mouth {
      position: absolute;
      height: 20%;
      width: 45%;
      background-color: white;
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 70%;
      border-top-right-radius: 10px;
      border-top-left-radius: 20%;
      z-index: 2;
      left: 50%;
      top: 72%;
      transform: translate(-50%, -50%);
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
    top: -5%;
    .glass {
      width: 25%;
      height: 20%;
      background-color: aqua;
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
