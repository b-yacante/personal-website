<script lang="ts" setup></script>

<template>
  <!-- title -->
  <div class="title">
    <b>On this page</b>
  </div>
  <!-- sections names -->
  <div class="section-wraper">
    <div class="section-page"><span class="text-primary">|</span> asdas</div>
    <div class="section-page"><span class="text-primary">|</span> asdas</div>
    <div class="section-page"><span class="text-primary">|</span> asdas</div>
    <div class="section-page"><span class="text-primary">|</span> asdas</div>
    <div class="section-page"><span class="text-primary">|</span> asdas</div>
    <div class="section-page"><span class="text-primary">|</span> asdas</div>
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
      padding-right: 0.5rem;
      width: 1rem;
    }
  }
}
</style>
