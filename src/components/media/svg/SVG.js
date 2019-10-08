import React from "react";

// Components
import logo from "./Logo";
import star from "./Star";
import line from "./Line";
import facebook from "./Facebook";
import instagram from "./Instagram";
import arrowCurve from "./ArrowCurved";

const svgs = {
  logo,
  star,
  line,
  facebook,
  instagram,
  arrowCurve
};

const SVG = ({ type, ...props }) => {
  const SvgComp = svgs[type];
  return <SvgComp {...props} />;
};

export default SVG;
