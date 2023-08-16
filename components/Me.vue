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

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '/assets/main';

.me {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    align-items: center;

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

        .headshot {
            display: block;
            width: 300px;
            border-radius: 0.5rem;
        }
    }

    .text {
        font-size: 1rem;
    }
}
</style>
