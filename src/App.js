import logo from "./logo.svg";
import "./App.css";
import payquad from "./assets/image 8.png";
import crm from "./assets/crm.png";
import communication from "./assets/communication.png";
import community from "./assets/community.png";
import Maintenance from "./assets/Maintenance.png";
import payment from "./assets/payment.png";
import reports from "./assets/reports.png";
import resident from "./assets/resident.png";

function App() {
  return (
    <div className="container lg:my-[130px] my-12 mx-auto ">
      <div className="px-10">
        <h1 className="font-semibold lg:leading-[64px] lg:text-[56px] text-[28px] leading-[32px]  capitalize text-center">
          what we do
        </h1>
        <p className="lg:text-[24px] lg:leading-8 lg:mt-[25px] mt-3 text-[15px] font-[400] leading-[23px] text-center">
          Luctus laoreet primis tempor tristique elementum dignissim morbi suspendisse.
        </p>
      </div>
      <div className="lg:max-w-[1302px] max-w-[367px] lg:h-[800px] h-[609px] bg-[#FAFCFD] w-full lg:mt-[84px] mt-[31px]  z-10 border-[1px] border-[#E3EEF0] rounded-[355px] flex justify-center items-center mx-auto">
        <div className="lg:max-w-[1156px] max-w-[325.85px] lg:h-[710px] h-[540.49px]   w-full z-20 rounded-[355px] bg-[#FFFFFF] flex justify-center items-center">
          <div className="lg:max-w-[810px] max-w-[228.32px] lg:h-[488px] h-[371.49px] relative  border-[1px] border-[#008C96] z-30 border-dashed rounded-[355px] w-full flex justify-center items-center">
            <div className="absolute flex mt-[-300px]">
              <div className="relative lg:right-[70px] lg:bottom-8 top-10 right-8">
                <img src={reports} alt="" />
              </div>
              <div className="relative lg:bottom-[110px] bottom-10 ">
                <img src={crm} alt="" />
              </div>
              <div className="relative lg:left-[95px] top-10 left-8">
                <img src={resident} alt="" />
              </div>
            </div>
            <div className="lg:max-w-[584px] max-w-[164.61px]  lg:h-[314px] h-[239.03px] bg-[#FFFFFF] border-[1px] border-[#D9F3F4] z-40  rounded-[355px] w-full flex justify-center ">
              <div className="mt-6 lg:w-[315px] w-[120px] lg:h-[162px] h-[119px] rounded-[10px] z-50 bg-white content-shadow">
                <p className="lg:pt-[27px] lg:pl-[20px] py-2 lg:pr-[22px] text-center lg:pb-[31px] px-2 lg:text-[18px] text-[11px] leading-[15px] lg:leading-[26px]">
                  Vitae tortor consequat lacinia nunc sodales potenti cras loi suspendisse tempor
                  liberomu risus nibh eget platea justo
                </p>
                <img
                  width={234}
                  height={71}
                  src={payquad}
                  alt="payquad logo"
                  className="mt-[15px] mx-auto"
                />
              </div>
            </div>
            <div className="absolute flex bottom-0">
              <div className="relative lg:bottom-28 bottom-40 lg:right-24 right-7">
                <img src={Maintenance} alt="" />
              </div>
              <div className="relative lg:right-28 right-[75px] lg:top-20 bottom-10">
                <img src={payment} alt="" />
              </div>
              <div className="relative lg:right-10 right-7 lg:top-[88px] top-6">
                <img src={communication} alt="" />
              </div>
              <div className="relative lg:bottom-10 bottom-16 lg:left-16 left-6">
                <img src={community} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
