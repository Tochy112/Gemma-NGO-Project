import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="pt-20 lg:pt-10 lg:mx-20 mx-5 text-left">
        <h1 className="font-bold text-lg text-center">CONTACT US</h1>
        <h3 className="font-bold text-base text-center mt-3 uppercase text-[#6AA84F]">
          CONCERNED ABOUT AN ADULT OR A CHILD/YOUNG PERSON?
        </h3>
        <div>
          <p className="mt-10 mb-5 font-bold">Children Safeguarding concerns</p>
          <span>
            Tel:
            <Link className="mx-1" href="tel:08162166912">
              <span className="text-[#6AA84F]">08162166912</span>
            </Link>
            (Monday - Thursday 8:30am – 5:00pm and 8:30am - 4:30pm on Fridays)
          </span>
        </div>
        <div>
          <p className="mt-10 mb-5 font-bold">Adult Safeguarding concerns</p>
          <span>
            Tel:
            <Link className="mx-1" href="tel:08162166912">
              <span className="text-[#6AA84F]">08162166912</span>
            </Link>
            (Monday - Thursday 8:30am – 5:00pm and 8:30am - 4:30pm on Fridays)
          </span>
        </div>
        <div className="mt-10">
          Out of hours:
          <Link className="mx-1" href="tel:09021250040">
            <span className="text-[#6AA84F]">09021250040</span>
          </Link>
        </div>
        <h3 className="font-bold text-base text-center mt-10 uppercase text-[#6AA84F]">
          CONCERNED ABOUT INAPPROPRIATE OR HARMFUL BEHAVIOUR BY SOMEONE IN A
          POSITION OF TRUST ? E.G. A COLLEAGUE / MANAGER / CARER / TRUSTEE /
          GOVERNOR
        </h3>
        <div className="flex flex-col mt-5 gap-y-5 font-bold">
          <p>
            Gemma&apos;s Foundation Local Authority Designated Officer, Kenny
            Edgar
          </p>
          <span>
            Tel:
            <Link className="mx-1" href="tel:09021250040">
              <span className="text-[#6AA84F]">09021250040</span>
            </Link>
          </span>
          <span>
            Secure email:
            <Link className="mx-1" href="mailto:mbah80nancy2003@gmail.com">
              <span className="text-[#6AA84F]">mbah80nancy2003@gmail.com</span>
            </Link>
          </span>
          <span>
            Email:
            <Link className="mx-1" href="mailto:mbah80nancy2003@gmail.com">
              <span className="text-[#6AA84F]">mbah80nancy2003@gmail.com</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
