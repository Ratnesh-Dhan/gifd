import Link from "next/link";
import React from "react";

const DropMenu = () => {
  return (
    <div className="relative group">
      <button className="text-xl hover:text-gray-500 bg-amber-300 rounded-md p-2">
        School
      </button>

      <div className="absolute left-0 hidden group-hover:block hover:block bg-white shadow p-3">
        <Link href="/school/primary" className="block hover:text-gray-500">
          Primary
        </Link>
        <Link href="/school/secondary" className="block hover:text-gray-500">
          Secondary
        </Link>
        <Link href="/school/higher" className="block hover:text-gray-500">
          High School
        </Link>
      </div>
    </div>
  );
};

export default DropMenu;
