<template>
    <nav class="nav-bar">
        <div>
            <Sun
                v-if="isDarkMode"
                class="color-mode"
                @click="setisDarkMode(!isDarkMode)"
                :size="32">
            </Sun>
            <Moon
                v-else
                class="color-mode"
                @click="setisDarkMode(!isDarkMode)"
                :size="32">
            </Moon>
        </div>
        <div class="options">
            <div v-for="page in pages">
                <NuxtLink
                    :class="{
                        option: true,
                        active: page.value === selectedPage,
                    }"
                    :to="page.value">
                    {{ page.label }}
                </NuxtLink>
            </div>
        </div>
        <div class="socials">
            <a
                target="_blank"
                href="https://github.com/zdorward">
                <Github></Github>
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/zack-dorward/">
                <Linkedin></Linkedin>
            </a>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Sun, Moon, Github, Linkedin } from 'lucide-vue-next'

defineProps<{
    selectedPage: string
}>()
const emit = defineEmits<{
    (e: 'updatePage', value: string): void
}>()

const colorMode = useColorMode()
colorMode.preference = 'dark'
const isDarkMode = computed(() => colorMode.preference === 'dark')
const iconColor = computed(() => (isDarkMode.value ? '#f9d71c' : '#909090'))

type Page = {
    label: string
    value: string
}
const pages: Page[] = [
    { value: '/', label: 'Home' },
    { value: '/bouldering', label: 'Bouldering' },
]

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
    padding: 1rem 0;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom: solid var(main.$primary-light);
    z-index: 10;

    .color-mode {
        padding-left: 2rem;
        cursor: pointer;
        transition: transform 0.1s;
        display: flex;

        &:hover {
            transform: scale(1.25);
            color: v-bind(iconColor);
        }
    }
    .options {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4rem;
        text-transform: uppercase;

        .option {
            cursor: pointer;
            text-decoration: none;
            color: inherit;
            padding: 0.5rem 0;

            &:hover {
                font-weight: bold;
            }
            &.active {
                font-weight: bold;
                color: var(main.$accent);
            }
        }
    }

    .socials {
        padding-right: 2rem;
        gap: 1rem;
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
            color: inherit;
            &:hover {
                color: var(main.$accent);
            }
        }
    }
}

@media (max-width: 480px) {
    .nav-bar {
        justify-content: center;
        .color-mode {
            display: none;
        }

        .socials {
            display: none;
        }
    }
}
</style>
