<template>
    <div class="me">
        <img
            class="portrait"
            src="../assets/images/portrait.jpg"
            alt="Picture of me" />
        <div class="text">Welcome!</div>
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

    .portrait {
        width: 400px;
    }

    .text {
        font-size: 24px;
    }
}
</style>
