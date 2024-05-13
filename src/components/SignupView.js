"use strict";

export default function SignupView() {
  return `
      <section
        class="image-wrapper w-full order-2 mobile2:flex mobile2:flex-col mobile2:rounded-2xl"
      >
        <img
          src="./src/assets/images/illustration-sign-up-mobile.svg"
          alt="mobile sign up illustration"
          class="signup-image-1 mobile2:hidden"
        />
        <img
          src="./src/assets/images/illustration-sign-up-desktop.svg"
          alt="mobile2 sign up illustration"
          class="signup-image-2 hidden mobile2:block mobile2:self-end mobile2:rounded-2xl mobile2:min-h-full mobile2:min-w-max"
        />
      </section>

      <main
        class="Signup-wrapper mx-6 pt-7 pb-9 font-sans font-400 grid gap-5 content-evenly"
      >
        <h1 class="text-[42px] font-700">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div class="flex items-start">
          <img src="./src/assets/images/icon-list.svg" alt="list icon" />
          <p class="ml-4">Product discovery and building what matters</p>
        </div>
        <div class="flex items-start">
          <img src="./src/assets/images/icon-list.svg" alt="list icon" />
          <p class="ml-4">Measuring to ensure updates are a success</p>
        </div>
        <div class="flex items-start">
          <img src="./src/assets/images/icon-list.svg" alt="list icon" />
          <p class="ml-4">And much more!</p>
        </div>
        <form class="form mt-2">
          <div class="label-box flex justify-between">
            <label for="#email" class="email-label text-xs font-700"
              >Email address</label
            >
            <span class="label-error text-xs font-700 text-Tomato"></span>
          </div>
          <input
            id="#email"
            required
            type="email"
            name="email"
            placeholder="email@company.com"
            class="email-input border min-w-full border-Grey rounded-lg p-4 mt-2 mb-6 outline-none focus:border-[#000]"
          />
          <button
            type="submit"
            class="submit-button bg-Dark-Slate-Grey text-White text-base text-center py-5 min-w-full rounded-lg font-700 active:bg-Tomato active:shadow-[0_20px_30px_-15px_rgba(0,0,0,0.05)] active:shadow-Tomato transition ease-in-out duration-400"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </main>`;
}
