<template>
    <div>
        <NuxtLayout>
            <NuxtPage> </NuxtPage>
        </NuxtLayout>
    </div>
    <div
        class="toggle-button"
        @click="$colorMode.preference = 'dark'">
        Click me
    </div>
</template>

<script setup lang="ts">
const isDarkMode = ref(true)

// const toggleColorMode = () => {
//     console.log('click')
//     $color
//     isDarkMode.value = !isDarkMode.value
// }
</script>

<style scoped lang="scss">
.toggle-button {
    padding-left: 10px;
    border: 1px solid black;
    width: min-content;
    white-space: nowrap;

    &:hover {
        cursor: pointer;
    }
}
</style>
