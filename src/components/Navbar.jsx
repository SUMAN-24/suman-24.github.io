import { Stack } from "@chakra-ui/react";

import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <Stack
    // style={{
    //   position: "fixed",
    //   top: 0,
    //   backgroundColor: "rgb(255,255,255)",
    //   zIndex: 1,
    // }}
    >
      <DesktopNav />
      <MobileNav />
    </Stack>
  );
}
