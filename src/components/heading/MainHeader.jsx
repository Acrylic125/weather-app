import React from "react";
import cx from "classnames";

export default function MainHeader({ children, ...otherProps }) {
  return (
    <h1
      style={{
        fontWeight: "bold",
        color: "#ffffff",
      }}
      {...otherProps}
    >
      {children}
    </h1>
  );
}
// export default function MainHeader({ children, className, ...otherProps }) {
//   return (
//     <h1 className={cx("font-bold text-white", className)} {...otherProps}>
//       {children}
//     </h1>
//   );
// }
