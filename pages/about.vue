<template>
  <main class="min-h-screen">
    <Navbar />
    <section class="lg:pt-20 pt-10 lg:space-x-10 px-[5%] lg:px-[10%]">
      <section class="text-center px-8">
        <h2
          class="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white"
        >
          <span class="font-kh">“ប៊ីហ្គូអុីងធូ(Begoingto)”</span> មានន័យថា នឹងត្រូវទៅ (be-going-to) 
        </h2>
        <figure>
          <blockquote>
            <p class="mt-6 max-w-3xl mx-auto text-lg">
             ខ្ញុំបានបង្កើតឡើងប្រដូចទៅនឹងន័យខាងលើមានន័យថាយើងនឹងត្រូវទៅ ចែករំលែក​ មេរៀន ស្រាវជ្រាវ និងចំណេះដឹងថ្មីៗជាដើម។ ជាការជួយលើស្ទួយដល់ភាសាជាតិយើងបានបញ្ចូលអត្ថបទជាភាសាខ្មែរ ដើម្បីឲ្យយុវជន ក្មេងៗ សិស្សានុសិស្ស ប្អូនៗ ដែលខ្សោយខាងផ្នែកភាសាអង់គ្លេសងាយយល់ និងផ្ដល់ជាគ្រឹះមូលដ្ឋាន។
            </p>
          </blockquote>
          <figcaption
            class="mt-6 flex items-center justify-center space-x-4 text-left"
          >
            <img
              src="https://lh3.googleusercontent.com/a-/AFdZucpbclvgPqLmEmVoxsKYWGcRubchtfeH2SMmthNvoQ=s192-c-rg-br100"
              alt=""
              class="w-14 h-14 rounded-full"
              loading="lazy"
            />
            <div>
              <div class="text-slate-900 font-semibold dark:text-white">
                នឺយ មិច​ (Neuy Mich)
              </div>
              <div class="mt-0.5 text-sm leading-6">
                អ្នកបង្កើត ប៊ីហ្គូអុីងធូ
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-20">
        <figure
          class="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5"
          v-for="i in 15"
          :key="i"
        >
          <blockquote class="mt-6 text-slate-700 dark:text-slate-300">
            <p>I feel like an idiot for not using Tailwind CSS until now.</p>
          </blockquote>
          <figcaption class="flex items-center space-x-4">
            <img
              src="https://bit.ly/3bA5AId"
              alt=""
              class="flex-none w-14 h-14 rounded-full object-cover"
              loading="lazy"
            />
            <div class="flex-auto">
              <div
                class="text-base text-slate-900 font-semibold dark:text-slate-300"
              >
                <a
                  href="https://twitter.com/ryanflorence/status/1187951799442886656"
                  tabindex="0"
                  ><span class="absolute inset-0"></span>Ryan Florence</a
                >
              </div>
              <div class="mt-0.5">Remix &amp; React Training</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <!-- <ContentRenderer class="prose prose-sm prose-slate learning-link pr-7 max-w-none" :value="about" /> -->
    </section>
  </main>
</template>

<script setup>
const { data: about } = await useAsyncData("about", () =>
  queryContent("/about").findOne()
);
useHead({
  title: "អំពីយើង",
});
</script>
<style scoped>
.learning-link {
  @apply prose-a:text-primary before:prose-headings:content-['#'] before:prose-headings:mr-1 before:prose-headings:text-primary before:prose-h1:content-[''];
}
* {
  font-family: "Nokora";
}
.prose-sm :where(h2):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
}
.prose-sm :where(p):not(:where([class~="not-prose"] *)) {
  font-size: 17px;
}
</style>
