<script setup lang="ts">
    import Avatar from "vue-boring-avatars";

    const route = useRoute();
    const size: Ref<number> =  ref(parseInt(route.params.size as string ?? "200"));
    const variant: Ref<"bauhaus" | "beam" | "marble" | "pixel" | "ring" | "sunset"> = ref(route.params.variant ? route.params.variant as "bauhaus" | "beam" | "marble" | "pixel" | "ring" | "sunset" : "beam");
    const seed: Ref<string> =  ref(route.params.seed as string ?? "");
</script>
<template>
    <Avatar
    :size="size"
    :variant="variant"
    :name="seed"
    :square="true"
    :title="true"
  />
</template>