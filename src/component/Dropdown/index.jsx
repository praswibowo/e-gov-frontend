import "./styles.css";
export const Dropdown = () => {
  return (
    <div class="dropdown inline-block relative">
      <button class="inline-flex items-center">
        <span class="mr-1">Poster Session</span>
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-48">
        <li>
          <a
            class="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="/author-guidelines"
          >
            Author Guideliness
          </a>
        </li>
        <li class="">
          <a
            class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="/submissions"
          >
            Submission
          </a>
        </li>
        <li class="">
          <a
            class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="/registration-fee"
          >
            Registration
          </a>
        </li>
      </ul>
    </div>
  );
};
