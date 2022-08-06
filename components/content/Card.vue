<template>
  <div class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded flex gap-4">
    <section class="w-32">
        <slot />
    </section>
    <section class="w-full">
        <slot name="content"></slot>
    </section>
  </div>
</template>