export const About = () => {
  return (
    <div className="flex items-center pb-24" id="section1">
      <div>
        <header className="font-bold text-5xl">
          E-Government Summit <p className="text-primary">at IES 2022 </p>
        </header>
        <p className="py-4 w-7/12 text-justify">
          E-government or Electronic-Based Government System (SPBE) is a digital
          transformation in the government sector to improve the quality of
          public services and administrative services. The E-government Summit
          is a scientific meeting forum initiated by the Politeknik Elektronika
          Negeri Surabaya as a forum for exchanging ideas, information and
          experiences between SPBE implementing government officials, academics,
          communities and the private sector regarding SPBE implementation in
          district/city governments within the East Java Provincial Government.
          Find out more about the previous E-Gov Summit
        </p>
      </div>
      <img src="./img/Logo-EGov.svg" className="w-4/12"></img>
    </div>
  );
};
