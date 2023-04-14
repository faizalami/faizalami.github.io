<template>
  <section id="about" class="flex bg-white">
    <div class="grid md:grid-cols-3 md:auto-rows-min gap-8 m-4 md:m-8">
      <div class="md:row-span-2 flex flex-col p-4 mt-28 border-gray-600 border-2 items-center">
        <div class="relative photo -mt-32">
          <picture>
            <source type="image/webp" srcset="~/assets/img/photo.webp">
            <source srcset="~/assets/img/photo.png">
            <img class="absolute border-white border-4 object-cover object-center" src="~/assets/img/photo.png" alt="Faizal Amiruddin">
          </picture>

          <div class="absolute p-5 w-full h-full">
            <div class="w-full h-full border-4 border-white" />
          </div>
        </div>

        <div class="mt-8 text-center">
          <h2 class="text-xl font-bold mb-4">
            Hello! I'm Faizal.
          </h2>
          <p>
            I am a fast learner, curious, and like to do experiments, so I can fastly adapt to a new tech stack.
            To understand more deeply about any new tech stack, I often do some exploration and experiments.
            For example, to be more understanding of modern front-end libraries, I did some experiments called
            <a
              class="underline"
              href="https://github.com/faizalami/fremwok-fremwokan"
              rel="noopener"
              target="_blank"
            >
              Fremwok-Fremwokan
            </a>
            and
            <a
              class="underline"
              href="https://github.com/faizalami/reak-reakan"
              rel="noopener"
              target="_blank"
            >
              Reak-Reakan
            </a>.
          </p>
        </div>
      </div>

      <div class="flex flex-col mt-6 p-4 border-gray-600 border-2">
        <h2 class="text-xl font-bold mb-4 mx-auto -mt-10 p-2 border-gray-600 border-2 bg-white">
          <img class="inline-block skill-icon" src="~/assets/img/icon/star-symbol.png" alt="">
          Advanced Skills
        </h2>
        <ul class="list-disc ml-4">
          <li>Javascript</li>
          <li>Vue 2</li>
          <li>React</li>
          <li>Typescript</li>
          <li>React Apollo Graphql Client</li>
        </ul>
      </div>

      <div class="flex flex-col md:row-start-2 md:col-start-2 mt-6 p-4 border-gray-600 border-2">
        <h2 class="text-xl font-bold mb-4 mx-auto -mt-10 p-2 border-gray-600 border-2 bg-white">
          <img class="inline-block skill-icon" src="~/assets/img/icon/star-symbol-silver.png" alt="">
          Other Skills
        </h2>
        <ul class="list-disc ml-4">
          <li>Vue 3</li>
          <li>NodeJS</li>
          <li>Graphic Design</li>
          <li>Photo Editing</li>
        </ul>
      </div>

      <div class="flex md:row-span-2 p-4 mt-10 border-gray-600 border-2">
        <div class="flex flex-col p-4 border-gray-600 border-2 items-center">
          <img class="education-icon -mt-20 bg-white border-white border-4 object-contain object-center" src="~/assets/img/icon/graduation-cap.png" alt="College">

          <div class="mt-8 text-center">
            <h2 class="text-xl font-bold mb-1">
              Electronic Engineering Polytechnic Institute of Surabaya (PENS/EEPIS)
            </h2>
            <h3 class="text-sm">
              2015 - 2019
            </h3>
            <h3 class="text-lg mb-4">
              BA in Informatics Engineering
            </h3>

            <ul class="list-disc ml-4 text-left">
              <li>GPA: 3.59 (Scale 4)</li>
              <li>Final Project: Building Laravel Package for Design and Generate a Ready-to-Use Application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
#about .photo,
#about .photo img {
  width: 250px;
  height: 250px;
}

#about .skill-icon {
  height: 1.25rem;
  margin-top: -0.5rem;
}

#about .education-icon {
  height: 100px;
}
</style>
