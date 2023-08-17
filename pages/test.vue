<template>
    <NavBar></NavBar>
    <div class="hi">hello</div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
@use '/assets/main';
.hi {
    margin-top: main.$h-nav;
    display: flex;
    width: 100%;
    height: calc(100vh - main.$h-nav);
    justify-content: center;
    align-items: center;
    font-size: 10rem;
}
</style>
