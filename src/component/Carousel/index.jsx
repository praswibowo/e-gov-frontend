export const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full -z-10 h-80 overflow-hidden">
        <div class="carousel-item active relative float-left w-full h-80">
          <img
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80"
            class="block w-full object-cover"
            alt="..."
          />
          <div class="carousel-caption absolute text-left items-center bottom-10">
            <h1 class="font-bold text-8xl">E-Government</h1>
            <h1 class="font-bold text-8xl">Summit 2022</h1>
          </div>
        </div>
        <div class="carousel-item relative float-left w-full h-80">
          <img
            src="https://ohfact.com/wp-content/uploads/2016/07/surabaya.jpg"
            class="block w-full"
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center item-center bottom-12">
            <p class="bg-gray-700 bg-transparent-80 ">
              International Electronics Symposium (IES) 2022 is one of the best
              international conferences organized by Politeknik Elektronika
              Negeri Surabaya (PENS), Surabaya, Indonesia, and a technical
              co-sponsored IEEE conference. The 24th IES 2022 provides a good
              platform for researchers, scientists and the entire engineering
              community to meet each other and exchange ideas on electronic and
              computer-related fields, and their applications including research
              stimulation, the applications of electronic and information
              technologies, and the discussion to advance for region-wide
              cooperation in related disciplines.
            </p>
          </div>
        </div>
        <div class="carousel-item relative float-left w-full h-80">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            class="block w-full"
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
