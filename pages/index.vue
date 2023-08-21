<template>
    <NavBar
        :selected-page="page"
        @update-page="updatePage"></NavBar>
    <Me v-if="page === 'home'"></Me>
    <Bouldering
        :style="{
            display: page === 'bouldering' ? 'flex' : 'none',
        }"></Bouldering>
</template>

<script setup lang="ts">
const page = ref('home')

const updatePage = (p: string) => {
    page.value = p
}
</script>
<style scoped lang="scss">
.index {
    display: flex;
    flex-direction: column;
}
</style>
