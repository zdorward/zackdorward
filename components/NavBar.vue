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
import { Sun, Moon } from '../node_modules/lucide-vue-next'

const colorMode = useColorMode()

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
