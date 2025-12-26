import Link from "next/link";
import React from "react";

const Links = ({
  href,
  title,
  size = "",
  onClick,
}: {
  href: string;
  title: string;
  size?: string;
  onClick?:()=> void; 
}) => {
  return (
    <div className="hover-text-color flex items-center">
      {size === "" ? (
        <Link href={href} onClick={onClick}>{title}</Link>
      ) : (
        <Link href={href} className={size} onClick={onClick}>
          {title}
        </Link>
      )}
    </div>
  );
};

export default Links;
