import Link from "next/link";
import React from "react";

const Links = ({
  href,
  title,
  size = "",
}: {
  href: string;
  title: string;
  size?: string;
}) => {
  return (
    <div className="hover-text-color flex items-center justify-center">
      {size === "" ? (
        <Link href={href}>{title}</Link>
      ) : (
        <Link href={href} className={size}>
          {title}
        </Link>
      )}
    </div>
  );
};

export default Links;
