"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ItemDropDwonHeader from "../ItemDropDwonHeader";
import {
  MENU_JUGUETES,
  MENU_LENCERIA,
  MENU_LUBRICANTES_COSMETICA,
  MENU_PIJAMAS,
} from "@/config/config";

const HeaderProduct = () => {
  return (
    <>
      <ItemDropDwonHeader title={"Lencería"} option={MENU_LENCERIA} />
      <ItemDropDwonHeader title={"Pijamas"} option={MENU_PIJAMAS} />
      <ItemDropDwonHeader
        title={"Lubricantes y cosmética"}
        option={MENU_LUBRICANTES_COSMETICA}
      />
      <ItemDropDwonHeader title={"Juguetes"} option={MENU_JUGUETES} />
      <ItemDropDwonHeader title={"Otros"} option={MENU_LENCERIA} />
    </>
  );
};

export default HeaderProduct;
