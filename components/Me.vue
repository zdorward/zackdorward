<template>
    <div class="me">
        <div class="card">
            <div class="img-container">
                <img
                    class="headshot"
                    src="/headshot.png"
                    alt="Picture of me" />
            </div>
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
        box-shadow: inset 0 0 0.25rem var(main.$primary);
        border-radius: 50%;
        width: 300px;
        height: 300px;

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

        .img-container {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 50%;
            .headshot {
                display: flex;
                width: 100%;
                object-position: 0% 0%;
                overflow: hidden;
            }
        }
    }

    .text {
        font-size: 1rem;
    }
}
</style>
