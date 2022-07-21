import logo from "./logo.svg";
import "./App.css";
import payquad from "./assets2/image 8.png";
import crm from "./assets2/crm.png";
import communication from "./assets2/communication.png";
import community from "./assets2/community.png";
import Maintenance from "./assets2/Maintenance.png";
import payment from "./assets2/payment.png";
import reports from "./assets2/reports.png";
import resident from "./assets2/resident.png";

function App() {
  return (
    <section className="container lg:my-[130px] my-12 mx-auto ">
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
              <div className="relative lg:right-[65px] lg:mt-[-100px] lg:top-10 top-16 right-8">
                <img src={reports} alt="" />
              </div>
              <div className="relative lg:bottom-[110px] bottom-10 ">
                <img src={crm} alt="" />
              </div>
              <div className="relative lg:left-[120px]  lg:mt-[-70px] lg:top-10 top-16 left-8">
                <img src={resident} alt="" />
              </div>
            </div>
            <div className="lg:max-w-[584px] max-w-[164.61px]  lg:h-[314px] h-[239.03px] bg-[#FFFFFF] border-[1px] border-[#D9F3F4] z-40  rounded-[355px] w-full flex justify-center ">
              <div className="mt-6 lg:w-[315px]  relative w-[120px] lg:h-[162px] h-[119px] rounded-[10px] z-50 bg-white content-shadow">
                <div class="triangle-up absolute z-0 -top-10 right-8  lg:right-32"></div>
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
    </section>
  );
}

export default App;

/* import logo from "./logo.svg";
import "./App.css";
import payquad from "./assets/image 8.png";
import crm from "./assets/crm1.png";
import communication from "./assets/communication2.png";
import community from "./assets/community2.png";
import Maintenance from "./assets/Maintenance2.png";
import payment from "./assets/payment2.png";
import reports from "./assets/reports1.png";
import resident from "./assets/resident1.png";

function App() {
  return (
    <section className="container lg:my-[130px] my-12 mx-auto ">
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
              <div className="relative lg:right-[65px] lg:mt-[-115px] lg:top-10 top-16 right-6">
                <img src={reports} alt="" className="" />
                <h4 className="lg:leading-[26px] leading-[20px] relative lg:bottom-[70px] bottom-7  font-semibold  text-[#004750] lg:text-[22px] text-center text-[15px]">
                  Reports
                </h4>
              </div>
              <div className="relative lg:bottom-[120px] bottom-2">
                <img src={crm} alt="" />
                <h4 className="lg:leading-[26px] leading-[20px] relative lg:mt-[-65px] mt-[-25px] font-semibold lg:text-[22px] text-[15px] text-center text-[#004750]">
                  Lead to <br /> Lease CRM
                </h4>
              </div>
              <div className="relative lg:left-[120px]  lg:mt-[-70px] lg:top-10 top-16 left-8">
                <img src={resident} alt="" />
                <h4 className="lg:leading-[26px] leading-[20px] left-o lg:left-4 z-50 text-[15px] relative bottom-6 lg:bottom-16  font-semibold lg:text-[22px] text-center text-[#004750]">
                  Resident <br className=" lg:hidden" /> <span>and</span>{" "}
                  <br className="lg:block hidden" /> Tenant
                  <br className=" lg:hidden" /> Portals
                </h4>
              </div>
            </div>
            <div className="lg:max-w-[584px] max-w-[164.61px]  lg:h-[314px] h-[239.03px] bg-[#FFFFFF] border-[1px] border-[#D9F3F4] z-40  rounded-[355px] w-full flex justify-center ">
              <div className="mt-6 lg:w-[315px] w-[120px] absolute lg:h-[162px] h-[119px] rounded-[10px] z-50 bg-white content-shadow">
                <div class="triangle-up absolute z-0  -top-10 right-8  lg:right-32"></div>
                <p className="lg:pt-[27px] z-50 lg:pl-[20px] py-2 lg:pr-[22px] text-center lg:pb-[31px] px-2 lg:text-[18px] text-[11px] leading-[15px] lg:leading-[26px]">
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
              <div className="relative lg:bottom-28 bottom-28 lg:right-24 -right-5">
                <img src={Maintenance} alt="" />
                <h4 className="lg:leading-[26px] leading-[20px] z-50 text-[16px] relative lg:bottom-16  bottom-8  font-semibold lg:text-[22px] text-center text-[#004750]">
                  Maintenance
                </h4>
              </div>
              <div className="relative lg:right-28 right-[40px] top-12  lg:top-24 lg:bottom-10">
                <img src={payment} alt="" />
                <h4 className="lg:leading-[26px] leading-[20px] text-[16px] relative lg:bottom-16 bottom-6  font-semibold lg:text-[22px] text-center text-[#004750]">
                  Payments
                </h4>
              </div>
              <div className="relative lg:right-10 right-10 lg:top-[110px] top-[75px]">
                <img src={communication} alt="" />
                <h4 className="lg:leading-[26px] leading-[20px] text-[16px] relative lg:bottom-16 bottom-10  font-semibold lg:text-[22px] text-center text-[#004750]">
                  Communication
                </h4>
              </div>
              <div className="relative lg:bottom-10 lg:left-20  right-8">
                <img src={community} alt="" />
                <h4 className="lg:leading-[26px] leading-[20px] text-[16px] relative bottom-8 lg:bottom-16  font-semibold lg:text-[22px] text-center text-[#004750]">
                  Community
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App; */
