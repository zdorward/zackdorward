<template>
    <div class="index">
        <!-- @vue-ignore -->
        <NuxtParticles
            :key="colorMode.preference"
            id="particles"
            :options="options"></NuxtParticles>
        <NavBar :selected-page="'/'"></NavBar>
        <ClientOnly>
            <Me></Me>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const options = computed(() => ({
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: colorMode.preference === 'light' ? '#000000' : '#ffffff',
        },
        opacity: {
            value: 0.5,
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
}))
</script>
<style scoped lang="scss">
.index {
    #particles {
        animation: fadeIn 4s;
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            50% {
                opacity: 0.2;
            }
            100% {
                opacity: 1;
            }
        }
    }
}
</style>
