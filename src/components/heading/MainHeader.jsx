import React from "react";
import cx from "classnames";

export default function MainHeader({ children, className, ...otherProps }) {
  return (
    <h1 className={cx("font-bold text-white", className)} {...otherProps}>
      {children}
    </h1>
  );
}
