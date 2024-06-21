import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  classname: string;
}

const FooterSocialLinks: React.FC<Props> = ({ classname }) => {
  return (
    <div className="my-auto">
      <ul className={classname}>
        <li className="py-4 px-4 lg:px-0 lg:pe-4">
          <Link target={"_blank"} href={"#"}>
            <div>YouTube</div>
          </Link>
        </li>
        <li className="py-4 px-4">
          <Link target={"_blank"} href={"#"}>
            <div>Instagram</div>
          </Link>
        </li>
        <li className="py-4 px-4">
          <Link target={"_blank"} href={"#"}>
            <div>Twitter </div>
          </Link>
        </li>
        <li className="py-4 px-4 lg:px-0 lg:ps-4">
          <Link target={"_blank"} href={"#"}>
            <div>LinkedIn </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocialLinks;
