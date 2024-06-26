import Link from "next/link";
import React from "react";

const Report = () => {
  return (
    <div className="pt-20 lg:pt-10 mx-5 lg:mx-20 text-justify">
      <h1 className="font-bold text-lg text-center">REPORT A PROBLEM</h1>
      <h3 className="underline font-bold text-base text-center mt-3">
        Concerns about an adult (including yourself)
      </h3>
      <p className="mt-3">
        If you are, or you suspect someone is being abused and the person is:
      </p>
      <ul className="my-8">
        <li className="list-disc ms-5 lg:ms-20 mb-3">over 18 years of age.</li>
        <li className="list-disc ms-5 lg:ms-20 mb-3">
          experiencing or is at risk of abuse
        </li>
        <li className="list-disc ms-5 lg:ms-20 mb-3">
          not able to protect themselves because of their care and support
          needs.
        </li>
      </ul>
      <div className="flex gap-x-2">
        Reach out on:
        <Link href="tel:08162166912">
          <p className="text-[#6AA84F]">08162166912</p>
        </Link>
      </div>
      <p className="text-[#6AA84F] font-bold mt-5">
        If the person is at immediate risk call the emergency services on 911.
      </p>
      <h3 className="underline font-bold text-base text-center mt-10 mb-5">
        Concerns about a child or young person (including yourself)
      </h3>
      <span className="font-bold">
        If a child is in immediate danger of serious harm or has been left alone
        <span className="text-[#6AA84F] mx-1">dial 999</span>
      </span>
      and let the operator know that it is a possible child protection issue.
      <br /> <br />
      If the child <span className="underline font-bold">is not</span> in
      immediate danger of serious harm but you know or suspect they are being
      abused or neglected call us:
      <ul className="my-8">
        <li className="list-disc ms-5 lg:ms-20 mb-3">
          Monday to Thursday 8:30am to 5pm, Friday 8:30am to 4:30pm on
          08162166912
        </li>
        <li className="list-disc ms-5 lg:ms-20 mb-3">
          Outside of the above hours for emergencies on 09021250040
        </li>
        <li className="list-disc ms-5 lg:ms-20 mb-3">
          If the child or young person is at immediate risk of serious harm dial
          999
        </li>
      </ul>
      If you suspect or believe a child is suffering or is likely to suffer
      Significant Harm, including any form of mistreatment or abuse, you should
      report your concerns.
    </div>
  );
};

export default Report;
