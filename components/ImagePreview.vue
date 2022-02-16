<template>
  <transition
    enter-active-class="transition-all ease-in duration-100"
    leave-active-class="transition-all ease-out duration-100"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="close" />
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
          <div class="m-4 py-4 sm:p-4 border-2 border-gray-600">
            <div class="w-full text-center mb-4 px-4">
              <button type="button" class="w-full inline-flex justify-center border-2 border-gray-600 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm" @click="close">
                Close 🗙
              </button>
            </div>

            <div class="grid gap-4">
              <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                alt=""
                loading="lazy"
                width="1080"
                height="530"
                class="border-y-2 sm:border-2 border-gray-600 w-full"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ImagePreview',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    close () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

</style>
