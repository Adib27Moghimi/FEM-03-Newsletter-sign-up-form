"use strict";

export default function SuccessView() {
  return `
    <div class="Success-wrapper View-wrapper">
      <main
        class="Success-main-wrapper py-9 mx-6 font-sans font-700 grid gap-7 max374:min-h-screen mobile2:max-w-[370px]"
      >
        <article class="confirmation-part place-self-center grid gap-7">
          <img src="./src/assets/images/icon-success.svg" alt="success icon" />
          <h1 class="text-[38px]/[40px] mobile2:text-5xl">
            Thanks for subscribing!
          </h1>
          <p class="confirmation-text font-400">
            A confirmation email has been sent to
            <a href="#" class="email-link font-700"
              ><span class="confirmation-email"></span></a
            >. Please open it and click the button inside to confirm your
            subscription.
          </p>
        </article>
        <button type="submit" class="Dismiss-button btn place-self-end">
          Dismiss message
        </button>
      </main>
    </div>`;
}
