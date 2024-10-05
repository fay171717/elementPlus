<script lang="ts" setup>
import { reactive, ref } from "vue";
/* import { ErButton} from "elementPlus"; */
import { ErButton, ErTooltip } from "@elementPlus/components";
</script>

<template>
  <er-button type="primary" :loading="false" icon="your-icon">
    Click Me
  </er-button>

</template>

<style>
:root {
  --er-color-white: black!important;
}
</style>
