<template>
    <div class="me">
        <div class="card">
            <img
                class="headshot"
                src="/headshot1.png"
                alt="Picture of me" />
        </div>
        <div class="text">
            <div class="welcome">Hey, it's Zack.</div>
            <a
                class="resume"
                href="/ZackDorward_Resume.pdf"
                download>
                <Download :size="18"></Download>
                RESUME
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Download, Github, Linkedin } from 'lucide-vue-next'
const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.preference === 'dark')
const boxShadow = computed(
    () => `0 0 1rem ${isDarkMode.value ? '#ededed35' : '#1a1a1a35'}`
)
</script>

<style scoped lang="scss">
@use '/assets/main';

.me {
    height: calc(100svh - main.$h-nav);
    margin-top: main.$h-nav;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card {
        display: flex;
        justify-content: center;
        background: linear-gradient(
            -45deg,
            #7c43ed,
            #bb7beb,
            #7ad8f1,
            #3f61f8,
            #956bff,
            #ff6bdc
        );
        background-size: 200% 200%;
        box-shadow: v-bind(boxShadow);
        padding: 2rem;
        padding-bottom: 0;
        border-radius: 3rem;
        overflow: hidden;
        .headshot {
            display: flex;
            width: 300px;
        }
    }

    .text {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem;
        gap: 4rem;
        text-align: center;
        .welcome {
            font-size: 2rem;
            animation-delay: 0.5s;
        }

        .resume {
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: inherit;
            &:hover {
                color: var(main.$accent);
            }
        }
    }
}

@media (max-width: 480px) {
    .me {
        .card {
            width: 60%;
        }
    }
}
</style>
