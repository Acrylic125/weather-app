import React from "react";
import cx from "classnames";
import Container from "../container/Container";

export default function SingleStatisticItem({
  label,
  statistic,
  className,
  ...otherProps
}) {
  return (
    <Container
      className={cx("flex flex-col py-5 text-left", className)}
      {...otherProps}
    >
      <p className="text-white font-light text-xs">{label}</p>
      <p className="text-white font-bold text-xl">{statistic}</p>
    </Container>
  );
}
