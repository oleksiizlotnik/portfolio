<script lang="ts" setup>
import { animate, stagger } from "motion-v"
import { ref, onMounted } from "vue"
import { Motion } from "motion-v";

const titleContainerRef = ref<HTMLDivElement | null>(null)

// Simpler function to split text into words
function splitTextIntoWords(element: HTMLElement) {
    const text = element.textContent || ""
    const words = text.split(" ")

    // Replace the element content with word spans
    element.innerHTML = words
        .map(word => `<span class="split-word" style="display: inline-block;">${word}</span>`)
        .join(" ")

    // Return the word elements
    return Array.from(element.querySelectorAll(".split-word"))
}

onMounted(() => {
    document.fonts.ready.then(() => {
        if (!titleContainerRef.value) return

        // Hide the container until the fonts are loaded
        titleContainerRef.value.style.visibility = "visible"

        const h1Element = titleContainerRef.value.querySelector("h1")!
        const words = splitTextIntoWords(h1Element)

        // Animate the words in the h1
        animate(
            words,
            { opacity: [0, 1], y: [10, 0] },
            {
                type: "spring",
                duration: 5,
                bounce: 0,
                delay: stagger(0.1),
            }
        )
    })
})
</script>
<template>
<div class="title-container lg:w-2/5" ref="titleContainerRef">
    <h1 class="h1 text-center">
        Hey, I'm Oleksii Zlotnik, Frontend Developer
    </h1>
</div>
<Motion
    as="span"
    :initial="{
        filter: 'blur(10px)',
        opacity: 0,
        y: 5,
    }"
    :animate="{
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
    }"
    :transition="{
        duration: 0.4,
        ease: 'easeInOut',
        delay: 0.3,
    }"
    class="inline-block lg:w-3/4 text-zinc-400 text-center"
>
    Frontend Developer with 7+ years of experience building scalable, user-focused web applications, with a strong focus
    on Vue.js and the modern JavaScript ecosystem.
</Motion>
</template>


<style>
.title-container {
    visibility: hidden;
}

.split-word {
    will-change: transform, opacity;
}
</style>