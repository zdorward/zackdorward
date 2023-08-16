<template>
    <div class="me">
        <img
            class="headshot"
            :src="headshot"
            alt="Picture of me" />
    </div>

    <div class="text">Hey, it's Zack. Welcome to my website :)</div>
</template>

<script setup lang="ts">
import headshot from '../assets/images/headshot.png'
</script>

<style scoped lang="scss">
@use '/assets/main';

.me {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    align-items: center;

    .headshot {
        display: block;
        width: 300px;
        border-radius: 0.5rem;
    }

    .card {
        background: linear-gradient(-45deg, #7b83eb, #75bdd1, #89a7fa, #9492ff);
        background-size: 400% 400%;
        animation: gradient 8s ease infinite;
        box-shadow: 0 0 0.25rem var(main.$primary);
        padding: 1rem 2rem 0 2rem;
        border-radius: 0.5rem;

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
    }

    .text {
        font-size: 1rem;
    }
}
</style>
