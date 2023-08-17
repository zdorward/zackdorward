<template>
    <div class="me">
        <div class="card">
            <img
                class="headshot"
                src="/headshot.png"
                alt="Picture of me" />
        </div>
        <div class="text">Hey, it's Zack. Welcome to my website :)</div>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.preference === 'dark')
const boxShadow = computed(
    () => `0 0 1rem ${isDarkMode.value ? '#ededed35' : '#1a1a1a35'}`
)
</script>

<style scoped lang="scss">
@use '/assets/main';

.me {
    margin-top: main.$h-nav;
    padding-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    height: 100%;

    .card {
        background: linear-gradient(-45deg, #7b83eb, #75bdd1, #89a7fa, #9492ff);
        background-size: 400% 400%;
        animation: gradient 8s ease infinite;
        box-shadow: v-bind(boxShadow);
        padding: 2rem;
        padding-bottom: 0;
        border-radius: 1rem;

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        .headshot {
            display: flex;
            width: 400px;
        }
    }

    .text {
        padding-top: 2rem;
        font-size: 2rem;
    }
}
</style>
