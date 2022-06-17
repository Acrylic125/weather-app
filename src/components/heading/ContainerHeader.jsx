import React from "react";
import cx from "classnames";

export default function ContainerHeader({
  children,
  className,
  ...otherProps
}) {
  return (
    <h5
      className={cx("font-bold text-white text-sm my-2", className)}
      {...otherProps}
    >
      {children}
    </h5>
  );
}
