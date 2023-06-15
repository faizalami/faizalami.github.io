<template>
  <section id="experience">
    <div class="flex justify-center items-center w-full title">
      <h2
        class="w-full border-y-4 border-white p-8 text-center text-4xl font-bold text-white"
      >
        Work Experience
      </h2>
    </div>

    <div class="flex bg-white">
      <div class="grid w-full md:grid-cols-3 md:auto-rows-fr gap-8 m-4 md:m-8">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="border-gray-600 border-2 p-2"
        >
          <div class="flex mb-2">
            <div class="mr-auto">
              {{ experience.title }}
            </div>
            <div>
              {{ experience.duration }}
            </div>
          </div>
          <div class="-mx-2 mb-2 border-gray-600 border-y-2 p-2">
            <h3 class="text-xl font-bold text-center">
              <a :href="experience.link" rel="noopener" target="_blank">
                {{ experience.office }}
              </a>
            </h3>
          </div>
          <div>
            <ul class="list-disc ml-4">
              <li
                v-for="(desc, descIdx) in experience.descriptions"
                :key="descIdx"
              >
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data () {
    return {
      experiences: [
        {
          title: 'React Dev.',
          duration: 'May 2023 - Now',
          office: 'PT Teknologi Kuliner Kekinian (Runchise)',
          link: 'https://www.runchise.com/about',
          descriptions: [
            'Runchise Web Apps - Integrated franchise & restaurant management, built with Typescript based Next JS.',
          ],
        },
        {
          title: 'Web Platform Engineer.',
          duration: 'May 2022 - Mar 2023',
          office: 'PT Tokopedia',
          link: 'https://www.tokopedia.com/about/',
          descriptions: [
            'Migrate entire Wishlist web modules (mobile & desktop) to Typescript.',
            'Wishlist Mobile Web Collection Sharing.',
            'Migrate entire wishlist mobile web to a new Tokopedia internal web framework.',
            'Some key features in "Beli Langsung" module.',
            'Some corrections and improvements in some Tokopedia features.',
            `Develop any feature in a ReactJS-based Tokopedia internal framework with
            a monorepo architecture and Apollo Graphql API communication.`,
          ],
        },
        {
          title: 'Front End Dev.',
          duration: 'May 2020 - May 2022',
          office: 'PT Wowrack Indonesia',
          link: 'https://wowrack.co.id/id',
          descriptions: [
            'IoT Stadium - IoT ecosystem management panel.',
            'Cloudraya DNS Bucket - DNS management panel.',
            'Cloudraya AWS Panel - Simplified AWS services management panel.',
          ],
        },
        {
          title: 'Front End Dev.',
          duration: 'Sep 2019 - Mar 2020',
          office: 'PT Traspac Makmur Sejahtera',
          link: 'http://www.traspac.co.id/',
          descriptions: ['Umrahaj - Umrah & Hajj Marketplace.'],
        },
        {
          title: 'Freelance Dev.',
          duration: 'May 2018 - Sep 2019',
          office: 'PT Astra Graphia IT (AGIT)',
          link: 'https://www.ag-it.com/',
          descriptions: [
            'Mysights Opinion Mining - Online media public opinions and trends analytic.',
          ],
        },
        {
          title: 'Intern. Dev.',
          duration: 'Jan 2018 - Mar 2018',
          office: 'PT Indonesia Comnets Plus (Icon+)',
          link: 'http://www.iconpln.co.id/',
          descriptions: [
            'AMR Terpusat - Automatic Meter Reading application for reading PLN electric stand meters.',
          ],
        },
        {
          title: 'Intern. Dev.',
          duration: 'Mar 2014 - Jul 2014',
          office: 'PT QQLTECH Global Solution',
          link: 'https://qqltech.com/',
          descriptions: [
            'Internal Attendance App - Internal Attendance App for recording employee attendance.',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
#experience .title {
  background: rgba(0, 0, 0, 0.5);
  min-height: 150px;
}
</style>
