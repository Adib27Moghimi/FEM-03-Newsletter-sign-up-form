"use strict";

export default function SignupView() {
  return `
    <div class="Signup-wrapper View-wrapper mobile2:max-w-max mobile2:w-11/12">
      <section
        class="image-wrapper w-full mobile2:hidden tablet:flex flex-col order-2 tablet:rounded-2xl overflow-hidden"
      >
        <img
          src="./src/assets/images/illustration-sign-up-mobile.svg"
          alt="mobile sign up illustration"
          class="signup-image-1 mobile2:hidden"
        />
        <img
          src="./src/assets/images/illustration-sign-up-desktop.svg"
          alt="desktop sign up illustration"
          class="signup-image-2 hidden mobile2:block self-end rounded-2xl min-h-full min-w-max"
        />
      </section>

      <main
        class="Signup-main-wrapper w-full p-10 pt-8 pr-7 font-sans font-400 grid gap-5 content-evenly"
      >
        <h1 class="text-[42px] font-700">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul class="grid gap-5">
          <li class="flex items-start">
            <img src="./src/assets/images/icon-list.svg" alt="list icon" />
            <span class="ml-4"
              >Product discovery and building what matters</span
            >
          </li>
          <li class="flex items-start">
            <img src="./src/assets/images/icon-list.svg" alt="list icon" />
            <span class="ml-4">Measuring to ensure updates are a success</span>
          </li>
          <li class="flex items-start">
            <img src="./src/assets/images/icon-list.svg" alt="list icon" />
            <span class="ml-4">And much more!</span>
          </li>
        </ul>
        <form action="" class="form mt-2" autocomplete="off" novalidate>
          <div class="label-box flex justify-between">
            <label for="#email" class="email-label text-xs font-700"
              >Email address</label
            >
            <span class="label-error text-xs font-700 text-Tomato"></span>
          </div>
          <input
            required
            id="#email"
            type="email"
            placeholder="email@company.com"
            class="email-input input mt-2 mb-6"
          />
          <button type="submit" class="submit-button btn font-700">
            Subscribe to monthly newsletter
          </button>
        </form>
      </main>
    </div>`;
}
