<template v-slot:content>
  <div class="mt-32 flex justify-end items-end mr-3">
    <button
      class="top-0 right-0 p-2.5 flex text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        aria-hidden="true"
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <a href="/searchbooking">
        <span class="text-white text-lg ml-2">Search for your booking</span>
      </a>
    </button>
  </div>
  <h3 class="flex mt-4 items-center my-8">
    <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
    <span class="text-lg font-medium mx-3">Booking</span>
    <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
  </h3>
  <div>
    <form @submit.prevent="handleSubmit" class="mb-20 md:mb-40">
      <div class="mx-6 mb-10 md:mx-96 space-y-4">
        <div v-if="step === 1" class="space-y-2 p-6 rounded-md shadow-lg">
          <div class="flex w-1/3">
            <div
              aria-hidden="true"
              class="grow bg-blue-500 rounded h-1 my-6"
            ></div>
            <span
              ><img
                class="rounded-full border-2 border-blue-500 w-16 h-16 p-2"
                src="../assets/id.gif"
                alt=""
                srcset=""
            /></span>
          </div>

          <label
            for="fullname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Full name</label
          >
          <input
            v-model="fullname"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            required
          />
          <label
            for="nationality"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nationality</label
          >
          <input
            v-model="nationality"
            type="text"
            id="nationality"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tanzanian"
            required
          />
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="company"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jdoe@example.com"
            required
          />
        </div>

        <!--end of step 1-->
        <div v-if="step === 2" class="space-y-2 p-6 rounded-md shadow-lg">
          <div class="flex w-2/3">
            <div
              aria-hidden="true"
              class="grow bg-blue-500 rounded h-1 my-6"
            ></div>
            <span
              ><img
                class="rounded-full border-2 border-blue-500 w-16 h-16 p-2"
                src="../assets/notebook.gif"
                alt=""
                srcset=""
            /></span>
          </div>
          <div>
            <label
              for="no_people"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Number of People</label
            >
            <input
              v-model="no_people"
              type="number"
              id="no_people"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              required
            />
          </div>
          <div>
            <label
              for="no_children"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Number of Children</label
            >
            <input
              v-model="no_children"
              type="number"
              id="no_people"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
            />
            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-blue-500 dark:text-gray-400"
            >
              *specify number of kids (under 18) if any
            </p>
          </div>
          <div>
            <label
              for="allergies"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Allergies</label
            >
            <input
              v-model="allergies"
              type="text"
              id="allergies"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-blue-500 dark:text-gray-400"
            >
              *specify your(or of your fellows) allergies if any
            </p>
          </div>
        </div>
        <!--end of step 2-->
        <div v-if="step === 3" class="py-6 px-4 rounded-md shadow-lg">
          <div class="flex w-3/3">
            <div
              aria-hidden="true"
              class="grow bg-blue-500 rounded h-1 my-6"
            ></div>
            <span
              ><img
                class="rounded-full border-2 border-blue-500 w-16 h-16 p-2"
                src="../assets/target.gif"
                alt=""
                srcset=""
            /></span>
          </div>
          <div>
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
              Experience Selection
            </h3>
            <ul
              class="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li
                class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div class="flex items-center pl-3">
                  <input
                    v-model="services"
                    id="services"
                    type="checkbox"
                    value="Diving"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="services"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Diving</label
                  >
                </div>
              </li>
              <li
                class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div class="flex items-center pl-3">
                  <input
                    v-model="services"
                    id="services"
                    type="checkbox"
                    value="Snorkling"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="services"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Snorkling</label
                  >
                </div>
              </li>
              <li
                class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div class="flex items-center pl-3">
                  <input
                    v-model="services"
                    id="services"
                    type="checkbox"
                    value="The-Lake-Escape"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="services"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >The Lake Escape</label
                  >
                </div>
              </li>
              <li
                class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div class="flex items-center pl-3">
                  <input
                    v-model="services"
                    id="services"
                    type="checkbox"
                    value="Boat ride to Mahale National Park"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="services"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Boat ride to Mahale National Park</label
                  >
                </div>
              </li>
              <li
                class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div class="flex items-center pl-3">
                  <input
                    v-model="services"
                    id="services"
                    type="checkbox"
                    value="Boat ride to Gombe National Park"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="services"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Boat ride to Gombe National Park</label
                  >
                </div>
              </li>
            </ul>
            <p
              id="helper-text-explanation"
              class="mb-6 text-sm text-blue-500 dark:text-gray-400"
            >
              *you can choose more than one
            </p>
          </div>
          <div class="flex items-center">
            <label
              for="start"
              class="py-3 ml-3 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >Start date</label
            >
            <label
              for="start"
              class="py-3 ml-36 md:ml-80 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >End date</label
            >
          </div>
          <div class="flex items-center">
            <input
              v-model="start"
              name="start"
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12/22/2022"
            />
            <span class="mx-2 md:mx-10 text-gray-500">to</span>
            <input
              v-model="end"
              name="end"
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="End Date"
            />
          </div>
          <div>
            <label
              for="info"
              class="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white"
              >Additional informations</label
            >
            <textarea
              v-model="info"
              name="info"
              id="info"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-blue-500 dark:text-gray-400"
            >
              *Tell us any additional information/requirements
            </p>
          </div>
        </div>

        <div class="md:space-x-80 md:mx-4 space-y-2">
          <button
            v-if="step === 1"
            @click="incrementStep"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            next
          </button>
          <button
            v-if="step === 2"
            @click="decrementStep"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            back
          </button>
          <button
            v-if="step === 2"
            @click="incrementStep"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            next
          </button>
          <button
            v-if="step === 3"
            @click="decrementStep"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            back
          </button>
          <button
            v-if="step === 3"
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  mounted() {
    const toast = useToast();
    return { toast };
  },
  name: "Booking",
  data() {
    return {
      step: 1,
      fullname: "",
      nationality: "",
      email: "",
      no_people: "",
      no_children: "",
      allergies: "",
      services: [],
      start: "",
      end: "",
      info: "",
      error: false,
    };
  },
  methods: {
    incrementStep() {
      const formFilled = this.fullname && this.nationality && this.email;
      const formFilled1 = this.no_people;
      // const formFilled2 = this.start && this.end;
      if ((this.step === 1 && formFilled) || (this.step === 2 && formFilled1)) {
        this.step = this.step + 1;
      }
    },
    decrementStep() {
      if (this.step === 2 || this.step === 3) {
        this.step = this.step - 1;
      }
    },
    handleSubmit() {
      axios
        .post(
          "https://kigomadivingcenter.x10.mx/api/bookings",
          {
            fullname: this.fullname,
            nationality: this.nationality,
            email: this.email,
            no_people: this.no_people,
            no_children: this.no_children,
            allergies: this.allergies,
            services: this.services,
            start: this.start,
            end: this.end,
            info: this.info,
          },
          {}
        )
        .then((res) => {
          const fullname = this.fullname;
          let timerInterval;
          this.$swal.fire({
            icon: "success",
            html:
              "“Dear " +
              fullname +
              ' your booking is well received,our colleague will contact you shortly.Thank you for putting your entirely trust on us . Best regards ,guest experience team!"',
            timer: 10000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
        })
        .then((result) => {
          // this.$router.push({name: 'home'})
          setTimeout(() => this.$router.push({ path: "/" }), 10000);
        });
    },
  },
};
</script>
