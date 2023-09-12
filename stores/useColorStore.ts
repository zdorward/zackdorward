import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', () => {
    const colorMode = ref('dark')
    const setColorMode = (color: string) => {
        console.log(color)
        colorMode.value = color
    }

    return { colorMode, setColorMode }
})
