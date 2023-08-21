<template>
    <div class="me">
        <div class="container">
            <div class="card">
                <img
                    class="headshot"
                    src="/headshot_cropped.png"
                    alt="Picture of me" />
            </div>
            <div class="text">
                <div class="welcome">Hey, it's Zack.</div>
                <div class="description">
                    Welcome to my website :) I'm a 4th-year software engineering
                    student at the University of Alberta.
                </div>
                <a
                    class="resume"
                    href="/ZackDorward_Resume.pdf"
                    download>
                    <Download :size="24"></Download>
                    DOWNLOAD RESUME
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Download } from 'lucide-vue-next'
const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.preference === 'dark')
const boxShadow = computed(
    () => `0 0 1rem ${isDarkMode.value ? '#ededed35' : '#1a1a1a35'}`
)
</script>

<style scoped lang="scss">
@use '/assets/main';

.me {
    margin-top: main.$h-nav;
    padding-top: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-left: 4rem;
        padding-right: 2rem;
        gap: 5rem;
        height: min-content;
        .card {
            background: linear-gradient(
                -45deg,
                #7b83eb,
                #75bdd1,
                #89a7fa,
                #9492ff
            );
            background-size: 400% 400%;
            animation: gradient 8s ease infinite;
            box-shadow: v-bind(boxShadow);
            padding: 2rem;
            padding-bottom: 0;
            border-radius: 2rem;
            height: min-content;

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
                display: flex;
                width: 400px;
            }
        }

        .text {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 2rem;
            padding-bottom: 2rem;
            gap: 4rem;
            text-align: center;
            .welcome {
                font-size: 5rem;
                animation: fadeIn 5s forwards;
                animation-delay: 0.5s;
                // opacity: 0;
            }
            .description {
                font-size: 1.5rem;
                animation: fadeIn 5s forwards;
                animation-delay: 2s;
                // opacity: 0;
            }
            .resume {
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                border: solid;
                padding: 0.5rem 1rem;
                gap: 1rem;
                text-decoration: none;
                color: inherit;
                &:hover {
                    color: var(main.$accent);
                }
            }
            // @keyframes fadeIn {
            //     0% {
            //         opacity: 0;
            //     }
            //     100% {
            //         opacity: 1;
            //     }
            // }
        }
    }
}
</style>
