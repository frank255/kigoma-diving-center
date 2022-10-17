<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500  grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
    <div class="">
        <div class="sm:col-span-2">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center lg:mx-auto"
          >
          <img src="/src/assets/diver-svg.svg" class="w-14 h-14">

            <span
              class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
              >KDSC</span
            >
          </a>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
           
          </div>
        </div>
    </div>
    <div class="">
        <div class="space-y-2 text-sm">
          <p class="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <div class="flex">
            <p class="mr-1 text-gray-800">Phone:</p>
            <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">850-123-5021</a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Email:</p>
            <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">info@lorem.mail</a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Address:</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              312 Lovely Street, NY
            </a>
          </div>
        </div>
    </div>
    <div class="">
        <div class="md:max-w-md lg:col-span-2">
          <span class="text-base font-medium tracking-wide text-black">Subscribe for updates</span>
          <form class="flex flex-col mt-4 md:flex-row">
            <input
              placeholder="Email"
              required=""
              type="text"
              class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              class="inline-flex items-center justify-center h-12 px-6 ml-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          <p class="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami.
          </p>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
name:'Newfooter'
}
</script>

<style>

</style>