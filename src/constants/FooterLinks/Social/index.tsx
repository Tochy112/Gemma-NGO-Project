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
          <Link target={"_blank"} href={"http://www.youtube.com/@nancymbah"}>
            <div>YouTube</div>
          </Link>
        </li>
        <li className="py-4 px-4">
          <Link
            target={"_blank"}
            href={
              "https://www.instagram.com/p/C0t31XkqjmZTRU2uo0kSm_DP9OeNnb4YKqEXdE0/?igsh=MXNwcGlzZWs2b3Vrbw=="
            }
          >
            <div>Instagram</div>
          </Link>
        </li>
        <li className="py-4 px-4">
          <Link target={"_blank"} href={"https://x.com/Nancygemma2"}>
            <div>Twitter </div>
          </Link>
        </li>
        <li className="py-4 px-4 lg:px-0 lg:ps-4">
          <Link
            target={"_blank"}
            href={
              "https://www.linkedin.com/in/nancy-mbah-a46ab7290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDIytNhVkTeWkYU62g%2FmYHw%3D%3D"
            }
          >
            <div>LinkedIn </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocialLinks;
