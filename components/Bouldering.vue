<template>
    <div class="climbing">
        <div class="intro">
            This is a collection of some of the climbs I'm most proud of! Filmed
            at
            <a
                style="text-decoration: underline"
                href="https://blocsclimbing.com/"
                target="_blank"
                >Blocs</a
            >
            on south side of Edmonton.
        </div>
        <div class="videos">
            <video
                v-for="video in videos"
                class="video"
                controls>
                <source
                    :src="`/climbing/${video.path}.mp4#t=0.001`"
                    type="video/mp4" />
                Your browser does not support videos.
            </video>
        </div>
    </div>
</template>

<script setup lang="ts">
type Video = {
    path: string
}
const videos: Video[] = [
    { path: 'blue' },
    { path: 'blue_corner' },
    { path: 'zeus' },
    { path: 'heel' },
    { path: 'feature' },
    { path: 'bat' },
    { path: 'blue_slab' },
    { path: 'red' },
    { path: 'pink_slab' },
    { path: 'dyno' },
]
</script>

<style scoped lang="scss">
@use '/assets/main';
.climbing {
    margin-top: main.$h-nav;
    padding-top: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .intro {
        margin-bottom: 2rem;
        margin-top: 2rem;
        a {
            text-decoration: none;
            color: #007fee;
        }
    }

    .videos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 10rem 8rem; // Adjust the gap as needed, first value for row gap, second for column gap
        margin: 0 auto; // This centers the grid within its container if needed

        .video {
            width: 100%; // Makes the video fill the cell, adjust if necessary
            border: solid black 2px;
            border-radius: 1rem;
            // Removed margin as gap takes care of spacing
        }
    }
}
</style>
