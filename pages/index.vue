<template>
  <main class="min-h-screen">
    <Navbar />
    <section class="lg:px-[15%] px-[5%] pt-20">
      <h1
        class="lg:text-5xl text-2xl leading-normal font-semibold text-center font-kh"
      >
        សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ
      </h1>
      <h1
        class="lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text font-kh"
      >
        រៀន. ចែករំលែក. ស្រាវជ្រាវ
      </h1>
    </section>
    <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <template
          v-for="(b, i) in blogNav[0].children"
          :key="`blogNavItem-${b._path}-${i}`"
        >
          <div class="px-7 py-5 rounded-lg border-2">
            <h2 class="text-lg font-semibold rainbow-text">
              {{ b.title }}
            </h2>
            <!-- Loop over files inside the content dir -->
            <ul
              v-if="b.children"
              class="list-disc list-inside mt-4 pl-2 space-y-3"
            >
              <template
                v-for="(child, k) in b.children"
                :key="`childNav-${child._path}-${k}-${i}`"
              >
                <li
                  class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
                >
                  <NuxtLink :to="`/learning${child._path}`" class="font-nokora">
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </template>
            </ul>
            <ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
              <li
                class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
              >
                <NuxtLink :to="`/learning${b._path}`"> Get Started </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script setup>
// import Navbar from "~/components/Navbar.vue";
const { data: blogNav } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("learning"));
});
useHead({
  title: "សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ"
});
</script>
<script>
  export default {
    asyncData({ $seo }) {
      $seo({
        title: 'សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ',
        description: 'សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ ជាការជួយលើស្ទួយដល់ភាសាជាតិយើងបានបញ្ចូលអត្ថបទជាភាសាខ្មែរ ដើម្បីឲ្យយុវជន ក្មេងៗ សិស្សានុសិស្ស ប្អូនៗ ដែលខ្សោយខាងផ្នែកភាសាអង់គ្លេសងាយយល់ និងផ្ដល់ជាគ្រឹះមូលដ្ឋាន។',
        keywords: 'be-going-to, be going to, begoingto, begoingto.me, ប៊ីហ្គូអុីងធូ-begoingto, begoingto me',
        openGraph: {
          image: {
            url: "https://www.begoingto.me/preview.jpg",
            alt: "ប៊ីហ្គូអុីងធូ",
          },
          twitter: {
            site: "@begoingtoMe",
            creator: "@begoingtoMe",
            card: "summary",
            type: "blog",
            title: "ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ",
            description:
              "សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ ជាការជួយលើស្ទួយដល់ភាសាជាតិយើងបានបញ្ចូលអត្ថបទជាភាសាខ្មែរ ដើម្បីឲ្យយុវជន ក្មេងៗ សិស្សានុសិស្ស ប្អូនៗ ដែលខ្សោយខាងផ្នែកភាសាអង់គ្លេសងាយយល់ និងផ្ដល់ជាគ្រឹះមូលដ្ឋាន។",
          },
          facebook: {
            appId: '1059423371454203',
            pageId: '273531340257037' 
          },
        },
      })
    }
  }
</script>