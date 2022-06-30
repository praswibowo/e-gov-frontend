import { speakers } from "../SpeakerCard/speaker";
export const SpeakerDetail = () => {
  return (
    <div className="flex my-12 border-2 py-12 px-12 gap-12 rounded-md ">
      <img src={speakers.img} className="w-60 h-60" />
      <div className="flex flex-col">
        <header className="text-3xl font-bold">{speakers.name}</header>
        <p className="font-semibold">{speakers.title}</p>
        <p className="font-semibold">{speakers.departement}</p>
        <p className="font-semibold">{speakers.institute}</p>
        <p className="text-justify pt-4 leading-relaxed">
          Novie Ayub Windarko finished his Bachelor and master degree from
          Department of Electrical Engineering, Institut Teknologi Sepuluh
          Nopember Surabaya, Indonesia. He received his Ph.D from School of
          Electrical Engineering, Chungbuk National University, South Korea. He
          was a JICA junior visiting researcher in Hirofumi Akagi Lab., Tokyo
          Institute of Technology in 2002. He has been joining to PENS since
          2000. He was the head of Renewable Energy Research Centre of PENS. He
          received the best paper and the best poster award at IEEE IES 2015. He
          has served as reviewers for IEEE Trans. on Transportation
          Electrification, IEEE Trans. on Power Electronics, Journal of
          Batteries, Journal of Energies and EMITTER International Journal of
          Engineering Technology. His research interests include power
          electronics converter, PV power generation and optimization for
          community projects.
          <br />
          He worked to assisst the development of 1MWp Solar PV Farm in 2014 and
          developed two units of 5kWp Solar PV Tracker system in 2017 for PT.
          PJB Cirata Hydropower. He designed PV rooftop for Surabaya mayor’s
          office in 2017, PV Power Generation at remote island of Gili Genting
          in 2018, and automatic deep well pump for drought area at Ponorogo in
          2019. He assessed the reliability of Hybrid PV-Diesel Power Generation
          at Waingapu, NTT for PT.PLN in 2020. He investigated the large storage
          tank explosion by indirect lightning struck at PT. Pertamina RU-IV in
          2021. In 2022, He worked for the research and development of smart
          grid system in Semau Island for PT.PLN.
        </p>
      </div>
    </div>
  );
};
