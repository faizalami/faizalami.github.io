<template>
  <section id="education">
    <div class="flex justify-center items-center w-full title">
      <h2 class="w-full border-y-4 border-white p-8 text-center text-4xl font-bold text-white">
        Education
      </h2>
    </div>

    <div class="flex bg-white">
      <div class="grid w-full md:grid-cols-2 gap-8 m-4 md:m-8">
        <div class="flex flex-col p-4 mt-12 border-gray-600 border-2 items-center">
          <img class="icon -mt-16 bg-white border-white border-4 object-contain object-center" src="~/assets/img/icon/sma.png" alt="Vocational High School">

          <div class="mt-8 text-center">
            <h2 class="text-xl font-bold mb-1">
              SMK Negeri 1 Dlanggu
            </h2>
            <h3 class="text-sm">
              2012 - 2015
            </h3>
            <h3 class="text-lg mb-4">
              Software Engineering Degree
            </h3>
            <p>
              Internship in PT QQLTECH Global Solution <strong>Quantum Leap</strong> Surabaya (Mar - Jul 2014).
            </p>
          </div>
        </div>

        <div class="flex flex-col p-4 mt-12 border-gray-600 border-2 items-center">
          <img class="icon -mt-16 bg-white border-white border-4 object-contain object-center" src="~/assets/img/icon/graduation-cap.png" alt="College">

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
              <li>Final Project: Building Laravel Package for Design and Generate a Ready to Use Application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection'
}
</script>

<style scoped>
#education .title {
  background: rgba(0, 0, 0, 0.5);
  min-height: 150px;
}

#education .icon {
  height: 100px;
}
</style>
