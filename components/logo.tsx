import { Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link>
      <NextLink href="/">
        <Image w="64" src={"/images/logo/km.jpg"} />
      </NextLink>
    </Link>
  );
};

export default Logo;
