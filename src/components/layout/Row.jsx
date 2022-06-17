import React from "react";
import cx from "classnames";

export default function Row({ children, className, ...otherProps }) {
  return (
    <div className={cx("flex flex-row", className)} {...otherProps}>
      {children}
    </div>
  );
}
