export const Sponsor = () => {
  return (
    <div className="flex flex-col justify-center border-2 rounded-lg">
        <p className="bg-primary w-full text-center font-bold text-white rounded-t-lg text-2xl text-4xl py-5  font-bold">
          Sponsor
        </p>
        <ol className="list-decimal px-9 py-4 font-semibold leading-loose">
        <div className="flex flex-row justify-center items-center gap-6">
        <img src="./assets/img/Logo_Jatim.png"  width={100} height={100} margin-left={"2em"} margin-right={"2em"} alt="Pemerintah Provinsi Jawa Timur"></img>
        <img src="./assets/img/HPE.png" width={150} height={150}  alt="Hewlett Packard Enterprise"></img>
        <img src="./assets/img/logo_pti.png" width={150} height={150} alt="PT. Piramida Teknologi Informasi"></img>
        <img src="./assets/img/APJII_Jatim.png" width={150} height={150} alt="Asosiasi Penyelenggara Jasa Internet Indonesia Wilayah Jawa Timur"></img>
        <img src="./assets/img/Logo_PANRB_Vertical.png" width={100} height={100} alt="Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Republik Indonesia"></img>
        <img src="./assets/img/BPS.png" width={150} height={150} alt="Badan Pusat Statistik"></img>
      </div>
        </ol>
      </div>
  );
};
