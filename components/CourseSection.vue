<template>
  <section id="course">
    <div class="flex justify-center items-center w-full title">
      <h2 class="w-full border-y-4 border-white p-8 text-center text-4xl font-bold text-white">
        Course Completion
      </h2>
    </div>

    <div class="flex bg-white">
      <div class="grid w-full md:grid-cols-4 md:auto-rows-fr gap-4 m-4 md:m-8">
        <button
          v-for="(cert, index) in courses"
          :key="index"
          aria-label="Open Image"
          class="border-gray-600 border-2"
          @click="showCourse(cert)"
        >
          <img
            :src="cert"
            alt=""
            class="w-full h-full object-cover"
            loading="lazy"
            width="445"
            height="330"
          >
        </button>
      </div>
    </div>
    <image-preview :show.sync="showImage" :images="image" />
  </section>
</template>

<script>
export default {
  name: 'CourseSection',
  data () {
    return {
      courses: [
        require('~/assets/img/cert/sertifikat_course_163_922231_161121130516.png'),
        require('~/assets/img/cert/sertifikat_course_219_922231_021221135222.png'),
        require('~/assets/img/cert/certificate-refactoring.png'),
        require('~/assets/img/cert/sertifikat_course_169_922231_041221152845.png'),
        require('~/assets/img/cert/UC-2c872fcf-6d81-4fd6-978a-124c7051b026.png'),
        require('~/assets/img/cert/sertifikat_course_256_922231_161221150801.png'),
        require('~/assets/img/cert/UC-d01f0659-a749-4fca-bb7f-5c071c8f9ae5.png'),
        require('~/assets/img/cert/UC-2ecdfb21-15c7-4b52-b360-7582551f8e00.png'),
        require('~/assets/img/cert/UC-3ae88dff-f664-4475-92f0-2a8fc078e35d.png'),
        require('~/assets/img/cert/UC-7ba133c9-9a1b-4652-ad47-87eba6eceb31.png'),
        require('~/assets/img/cert/react-js-testing-dengan-jest-dan-rtl-faizal-amiruddin.png')
      ],
      showImage: false,
      image: null
    }
  },
  methods: {
    showCourse (image) {
      this.image = [image]
      this.showImage = true
    }
  }
}
</script>

<style scoped>
#course .title {
  background: rgba(0, 0, 0, 0.5);
  min-height: 150px;
}

</style>
