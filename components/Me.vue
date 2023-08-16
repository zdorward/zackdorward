<template>
    <div class="me">
        <div class="card">
            <img
                class="headshot"
                src="../assets/images/headshot.png"
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
    padding: 20px 0;
    gap: 70px;

    .card {
        background: linear-gradient(-45deg, #7b83eb, #75bdd1, #89a7fa, #9492ff);
        background-size: 400% 400%;
        animation: gradient 8s ease infinite;
        box-shadow: 0 0 5px var(main.$primary);

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

        padding: 20px 40px 0 40px;
        border-radius: 40px;
        .headshot {
            width: 300px;
            height: 100%;
        }
    }

    .text {
        font-size: 24px;
    }
}
</style>
