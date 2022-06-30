export const PoiCard = ({ title, src, caption }) => {
  return (
    <div class="flex justify-center snap-center shrink-0 first:pl-8 last:pr-8">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            class="rounded-t-lg object-none h-64 object-center"
            src={src}
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p class="text-gray-700 text-base mb-4">{caption}</p>
        </div>
      </div>
    </div>
  );
};
