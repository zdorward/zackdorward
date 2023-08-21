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
                <div
                    v-for="page in pages"
                    :class="{
                        option: true,
                        active: page.value === selectedPage,
                    }"
                    style="text-decoration: none"
                    @click="updatePage(page.value)">
                    {{ page.label }}
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

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
    { value: 'home', label: 'Home' },
    { value: 'bouldering', label: 'Bouldering' },
]

const setisDarkMode = (dark: boolean) => {
    if (dark) {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'light'
    }
}

const updatePage = (page: string) => {
    emit('updatePage', page)
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
    z-index: 10;

    .icon {
        cursor: pointer;
        transition: transform 0.1s;
        display: block;
        padding-left: 1rem;

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
                    font-weight: bold;
                }
                &.active {
                    font-weight: bold;
                    color: var(main.$accent);
                }
            }
        }
    }
}
</style>
