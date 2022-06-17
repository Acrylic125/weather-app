import React from "react";
import cx from "classnames";

export default function Col({ children, className, ...otherProps }) {
  return (
    <div className={cx("flex flex-col", className)} {...otherProps}>
      {children}
    </div>
  );
}
