<template>
    <div class="nav-bar">
        <div class="toggle-button">
            <Sun
                v-if="colorMode.preference === 'dark'"
                @click="toggleColorMode"
                :size="48">
            </Sun>
            <Moon
                v-if="colorMode.preference === 'light'"
                @click="toggleColorMode"
                :size="48">
            </Moon>
        </div>
        <div class="options-container">
            <div class="options">
                <div class="option">Home</div>
                <div class="option">Education</div>
                <div class="option">Projects</div>
            </div>
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
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .toggle-button {
        width: min-content;
        &:hover {
            cursor: pointer;
        }
    }

    .options-container {
        width: 100%;
        display: flex;
        justify-content: center;

        .options {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            text-transform: uppercase;
        }
    }
}
</style>
