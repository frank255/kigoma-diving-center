<template>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-20
      -z-50
    "
  >
    <div
      class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      data-aos="zoom-out"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <div>
        <p
          class="
            inline-block
            px-3
            py-px
            mb-4
            text-3xl
            sm:text-5xl
            font-semibold
            tracking-wider
            text-[#A45C40]
            uppercase
            rounded-full
            bg-teal-accent-400
          "
        >
          About us
        </p>
      </div>
      <h2
        class="
          max-w-lg
          mb-6
          font-sans
          text-3xl
          font-bold
          leading-none
          tracking-tight
          text-gray-900
          sm:text-4xl
          md:mx-auto
        "
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="
              absolute
              top-0
              left-0
              z-0
              hidden
              w-32
              -mt-8
              -ml-20
              text-blue-gray-100
              lg:w-32 lg:-ml-28 lg:-mt-10
              sm:block
            "
          >
            <defs>
              <pattern
                id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <span class="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        KDSC is committed to offering excellent services with integrity and
        impartiality, based on the following core values
      </p>
    </div>
    <div
      class="
        grid
        gap-8
        row-gap-5
        mb-8
        md:row-gap-8
        lg:grid-cols-4
        sm:grid-cols-2
        -z-50
      "
    >
      <div
        class="
          duration-300
          transform
          bg-white
          border-l-4 border-deep-purple-accent-400
          hover:-translate-y-2
          -z-50
        "
      >
        <div
          class="h-full p-5 border border-l-0 rounded-r shadow-sm"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h6 class="mb-2 font-semibold leading-5">Teamwork</h6>
          <p class="text-sm text-gray-900">
            KDSC commits itself to embracing a working relationship, which
            demands that each staff looks at the core values and puts them into
            practice. “A team player appreciates the players”
          </p>
        </div>
      </div>
      <div
        class="
          duration-300
          transform
          bg-white
          border-l-4 border-deep-purple-accent-400
          hover:-translate-y-2
          -z-50
        "
      >
        <div
          class="h-full p-5 border border-l-0 rounded-r shadow-sm"
          data-aos="flip-up"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h6 class="mb-2 font-semibold leading-5">Gender Sensitivity</h6>
          <p class="text-sm text-gray-900">
            KDSC shall promotes gender balances in its activities and decision
            making process and shall refrain from any act that amounts to
            discrimination of any kind including race, color, sex, age, religion
            or political opinions
          </p>
        </div>
      </div>
      <div
        class="
          duration-300
          transform
          bg-white
          border-l-4 border-deep-purple-accent-400
          hover:-translate-y-2
          -z-50
        "
      >
        <div
          class="h-full p-5 border border-l-0 rounded-r shadow-sm"
          data-aos="flip-up"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h6 class="mb-2 font-semibold leading-5">Environmental Protection</h6>
          <p class="text-sm text-gray-900">
            KDSC staff shall refrain from any activity, mission or an act which
            jeopardize the organization effort of sustainable utilization and
            management of the environment along the Lake Tanganyika catchment
            basin.
          </p>
        </div>
      </div>
      <div
        class="
          duration-300
          transform
          bg-white
          border-l-4 border-deep-purple-accent-400
          hover:-translate-y-2
          -z-50
        "
      >
        <div
          class="h-full p-5 border border-l-0 rounded-r shadow-sm"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h6 class="mb-2 font-semibold leading-5">
            Transparency&Accountability
          </h6>
          <p class="text-sm text-gray-900">
            KDSC shall be open and accountable to its stakeholders, communities,
            funding partners and beneficiaries in service delivery and
            activities.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
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
          rounded-full
          shadow-lg
          md:w-auto
          bg-gradient-to-r
          from-violet-500
          to-fuchsia-500
          hover:bg-deep-purple-accent-700
          focus:shadow-outline focus:outline-none
        "
      >
        Let's Dive together
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutus",
};
</script>

<style>
</style>