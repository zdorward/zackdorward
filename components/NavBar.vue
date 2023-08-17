<template>
    <nav class="nav-bar">
        <div>
            <Sun
                v-if="isDarkMode"
                class="icon"
                @click="setisDarkMode(!isDarkMode)"
                :size="32">
            </Sun>
            <Moon
                v-else
                class="icon"
                @click="setisDarkMode(!isDarkMode)"
                :size="32">
            </Moon>
        </div>
        <div class="options-container">
            <div class="options">
                <NuxtLink
                    class="option"
                    to="/"
                    style="text-decoration: none">
                    Home
                </NuxtLink>
                <NuxtLink
                    class="option"
                    to="/test"
                    style="text-decoration: none">
                    Test
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const colorMode = useColorMode()
colorMode.preference = 'dark'
const isDarkMode = computed(() => colorMode.preference === 'dark')
const iconColor = computed(() => (isDarkMode.value ? '#f9d71c' : '#909090'))

const setisDarkMode = (dark: boolean) => {
    if (dark) {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'light'
    }
}

watch(colorMode, (newColorMode) => {
    if (newColorMode.preference === 'system') {
        setisDarkMode(true)
    }
})
</script>

<style scoped lang="scss">
@use '/assets/main';

.nav-bar {
    background-color: var(main.$secondary-bg);
    padding: 1rem;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    border-bottom: solid var(main.$primary-light);

    .icon {
        cursor: pointer;
        transition: transform 0.1s;
        display: block;

        &:hover {
            transform: scale(1.25);
            color: v-bind(iconColor);
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
            gap: 4rem;
            text-transform: uppercase;

            .option {
                cursor: pointer;
                color: inherit;
                padding: 0.5rem 0;

                &:hover {
                    color: pink;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
