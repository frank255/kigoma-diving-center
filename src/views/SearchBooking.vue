<template>
  <div class="mb-96">
    <div class="mt-32 flex justify-end items-end mr-3">
      <form @submit.prevent="searchBooking">
        <div class="flex">
          <div class="relative">
            <input
              type="search"
              id="search-dropdown"
              v-model="booking_reference"
              required
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Enter Booking code"
            />
            <button
              type="submit"
              class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
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
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <h3 class="flex mt-4 items-center my-8">
      <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
      <span class="text-lg font-medium mx-3">Booking</span>
      <span aria-hidden="true" class="grow bg-gray-200 rounded h-0.5"></span>
    </h3>

    <!--booking info card-->

    <div class="flex items-center justify-center mx-2">
      <div
        class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        v-if="booking"
      >
        <div class="flex items-center justify-between mb-4">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white"
          >
            Your Booking Details
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Full Name
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].fullname }}
                  </p>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Email
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].email }}
                  </p>
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Nationality
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].nationality }}
                  </p>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Number of People
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].no_people }}
                  </p>
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Number of Children
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].no_children }}
                  </p>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Allergies
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].allergies }}
                  </p>
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Start date
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].start }}
                  </p>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    End date
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].end }}
                  </p>
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                  >
                    Services
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ booking[0].services[0] }}
                    <br />
                    {{ booking[0].services[1] }}<br />
                    {{ booking[0].services[2] }} <br />
                    {{ booking[0].services[3] }} <br />
                    {{ booking[0].services[4] }}
                  </p>
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex-1 min-w-0">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  Additional informations
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ booking[0].info }}
                </p>
              </div>
            </li>
          </ul>
          <div class="flex items-center justify-center">
            <button
              @click="edit = !edit"
              class="m-2 py-1 px-3 rounded text-black bg-orange-400"
            >
              update
            </button>
            <button
              @click="handleDelete"
              class="m-2 py-1 px-2 rounded text-black bg-red-600"
            >
              delete
            </button>
            <button
              @click="handleSave"
              class="m-2 px-5 py-1 rounded text-black bg-green-500"
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- edit form -->

    <div class="mx-10 mb-6 mt-6">
      <form v-if="edit" @submit.prevent="handleEdit">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              for="fullname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >FullName</label
            >
            <input
              v-model="fullname"
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <label
              for="no_people"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Number of people</label
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
              >Number of children</label
            >
            <input
              v-model="no_children"
              type="number"
              id="no_people"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
            />
          </div>
          <div>
            <label
              for="start"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Start</label
            >
            <input
              v-model="start"
              name="start"
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12/22/2022"
            />
          </div>
          <div>
            <label
              for="end"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >End</label
            >
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
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Additional Informations</label
            >
            <textarea
              v-model="info"
              name="info"
              id="info"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
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
        </div>
        <div class="flex justify-center items-center">
          <button
            type="submit"
            class="text-white bg-orange-400 font-medium rounded-lg text-sm md:text-lg py-2 px-8 md:px-20 md:py-2.5 text-center mt-6"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  mounted() {
    const toast = useToast();
  },
  name: "SearchBooking",

  data() {
    return {
      booking_reference: "",
      booking: null,
      step: 1,
      fullname: "",
      nationality: "",
      email: "",
      no_people: "",
      no_children: "",
      allergies: "",
      bookings: [],
      service: "",
      start: "",
      end: "",
      info: "",
      edit: false,
      error: false,
    };
  },
  methods: {
    handleEdit() {
      axios
        .put(
          "http://kigoma-diving-center-backend.test/api/bookings/" +
            this.booking[0].id,
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
              ' your booking is successfully edited,Thank you!"',
            timer: 7000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
        })
        .then((result) => {
          setTimeout(() => this.$router.push({ path: "/" }), 10000);
        });
    },
    handleDelete() {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(
                "http://kigoma-diving-center-backend.test/api/bookings/" +
                  this.booking[0].id
              )
              .then(() => {
                this.$swal.fire(
                  "Deleted!",
                  "Your booking has been deleted.",
                  "success"
                );
              })
              .then(() => {
                setTimeout(() => this.$router.push({ path: "/booking" }), 1000);
              });
          }
        });
    },
    handleSave() {
      const fullname = this.fullname;
      let timerInterval;
      this.$swal
        .fire({
          icon: "success",
          html: '“Your booking is successfully saved,Thank you!"',
          timer: 4000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        })
        .then(() => {
          setTimeout(() => this.$router.push({ path: "/booking" }), 100);
        });
    },
    searchBooking() {
      axios
        .get(
          "http://kigoma-diving-center-backend.test/api/search/" +
            this.booking_reference
        )
        .then((response) => {
          if (response.data == "") {
            let timerInterval;
            this.$swal.fire({
              icon: "error",
              html: '“Sorry Booking not available! try a correct code"',
              timer: 4000,
              timerProgressBar: true,
              willClose: () => {
                clearInterval(timerInterval);
              },
            });
          } else {
            this.booking = response.data;
          }
        })
        .catch(() => {
          let timerInterval;
          this.$swal.fire({
            icon: "error",
            html: '“Oops! something went wrong try again"',
            timer: 4000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
        });
    },
  },
};
</script>
