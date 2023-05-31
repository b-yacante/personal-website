<script lang="ts" setup></script>

<template>
  <!-- title -->
  <div class="title">
    <b>On this page</b>
  </div>
  <!-- sections names -->
  <div class="section-wraper">
    <div class="section-page"><span></span> asdas</div>
    <v-divider></v-divider>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding-top: 1rem;
  font-size: large;
  text-align: center;
}

.section-wraper {
  padding-left: 2.5rem;
  line-height: 2;
  font-size: 16px;
  .section-page {
    span {
      width: 8px;
      height: 12px;
      padding: 0.2rem;
      margin-right: 10px;
      border-radius: 5rem;
      background-color: var(--v-primary-base);
    }
  }
}
</style>
