<script setup lang="ts">
import type { ConfigProviderProps } from "./types.ts";
import { provideGlobalConfig } from "./hooks.ts";

defineOptions({
  name: "ErConfigProvider",
});
const props = defineProps<ConfigProviderProps>();
const config = provideGlobalConfig(props);
</script>

<template>
  <slot name="default" :config="config"></slot>
</template>
