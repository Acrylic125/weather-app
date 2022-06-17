import React from "react";
import cx from "classnames";

export default function Container({ children, className, otherProps }) {
  return (
    <div className={cx("bg-slate-900 p-3", className)} {...otherProps}>
      {children}
    </div>
  );
}
