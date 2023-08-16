<template>
    <div class="nav-bar">
        <div class="toggle-button">
            <Sun
                v-if="colorMode.preference === 'dark'"
                @click="toggleColorMode">
            </Sun>
            <Moon
                v-if="colorMode.preference === 'light'"
                @click="toggleColorMode">
            </Moon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const colorMode = useColorMode()
colorMode.preference = 'dark'

watch(colorMode, (newColorMode) => {
    if (newColorMode.preference === 'system') {
        colorMode.preference = 'dark'
    }
})

console.log(colorMode.preference)

const toggleColorMode = () => {
    if (colorMode.preference === 'light') {
        colorMode.preference = 'dark'
    } else if (colorMode.preference === 'dark') {
        colorMode.preference = 'light'
    }
}
</script>

<style scoped lang="scss">
.nav-bar {
    padding: 16px;
    .toggle-button {
        width: min-content;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>
