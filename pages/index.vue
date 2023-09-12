<template>
    <div class="index">
        <!-- @vue-ignore -->
        <NuxtParticles
            id="particles"
            :options="options"
            @load="onLoad"></NuxtParticles>
        <NavBar :selected-page="'/'"></NavBar>
        <Me></Me>
    </div>
</template>

<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const onLoad = (container: Container) => {
    // Do something with the container
    container.pause()
    setTimeout(() => container.play(), 2000)
}

const options = {
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble',
            },
            onclick: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 50,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 100,
                size: 8,
            },
            repulse: {
                distance: 100,
                duration: 5,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
}
</script>
<style scoped lang="scss">
.index {
}
</style>
