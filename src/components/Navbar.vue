<template>
  <div
    class="
      bg-gradient-to-r
      from-cyan-500
      to-blue-500
      z-50
      fixed
      top-0
      left-0
      right-0
    "
  >
    <div
      class="
        px-4
        py-5
        container
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <div class="relative grid items-center grid-cols-2 lg:grid-cols-3">
        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              class="
                font-medium
                tracking-wide
                text-gray-100
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Home</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="
                font-medium
                tracking-wide
                text-gray-100
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Services</a
            >
          </li>
          <li>
            <a
              href="#aboutus"
              class="
                font-medium
                tracking-wide
                text-gray-100
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >About us</a
            >
          </li>
          <li>
            <a
              href="#team"
              class="
                font-medium
                tracking-wide
                text-gray-100
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Our Team</a
            >
          </li>
        </ul>
        <div class="w-full h-10">
          <a href="/" aria-label="Company" title="Company">
            <img src="/src/assets/kigoma3.png" class="w-28 mx-auto h-28" />
          </a>
        </div>

        <ul class="items-center hidden ml-auto space-x-8 lg:flex">
          <li>
            <a
              href="/news"
              class="
                font-medium
                tracking-wide
                text-gray-100
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >News</a
            >
          </li>
          <li>
            <a
              href="#contacts"
              class="
                font-medium
                tracking-wide
                text-gray-100
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Contacts</a
            >
          </li>
          <li>
            <a
              href="#testimonials"
              class="
                font-medium
                tracking-wide
                text-gray-100
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Testimonials</a
            >
          </li>
          <li class="flex">
            <a
              href="/booking"
              class="
                inline-flex
                items-center
                justify-center
                h-12
                px-4
                tracking-wide
                text-white
                transition
                duration-200
                rounded
                shadow-md
                bg-gradient-to-r
                from-violet-500
                to-fuchsia-500
                hover:bg-deep-purple-accent-700
                focus:shadow-outline focus:outline-none
              "
            >
              Booking
              <span
                class="flex items-center justify-center w-6 h-6 rounded-full"
              >
                <img src="/src/assets/booking.png" alt="" srcset="" />
              </span>
            </a>
          </li>
        </ul>
        <div class="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="
              p-2
              -mr-1
              transition
              duration-200
              rounded
              focus:outline-none focus:shadow-outline
            "
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div
              class="
                p-5
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                border
                rounded
                shadow-sm
                z-50
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a href="/" class="inline-flex items-center">
                    <img src="/src/assets/kigoma3.png" class="w-14 h-14" />
                    <span
                      class="
                        ml-2
                        text-xl
                        font-bold
                        tracking-wide
                        text-gray-800
                        uppercase
                      "
                      >KDSC</span
                    >
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="
                      p-2
                      -mt-2
                      -mr-2
                      transition
                      duration-200
                      rounded
                      hover:bg-gray-200
                      focus:bg-gray-200 focus:outline-none focus:shadow-outline
                    "
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="/"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Home</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Services</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >About us</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Contacts</a
                    >
                  </li>
                  <li>
                    <a
                      href="#team"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-teal-accent-400
                      "
                      >Our Team</a
                    >
                  </li>
                  <li>
                    <a
                      href="/news"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-teal-accent-400
                      "
                      >News</a
                    >
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-teal-accent-400
                      "
                      >Testimonials</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      class="
                        inline-flex
                        items-center
                        justify-center
                        w-full
                        h-12
                        px-6
                        font-medium
                        tracking-wide
                        text-white
                        transition
                        duration-200
                        rounded
                        shadow-md
                        bg-gradient-to-r
                        from-violet-500
                        to-fuchsia-500
                        hover:bg-deep-purple-accent-700
                        focus:shadow-outline focus:outline-none
                      "
                    >
                      Book Now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>