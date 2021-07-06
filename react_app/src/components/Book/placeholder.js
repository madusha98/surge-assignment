import React from "react";
import ContentLoader from "react-content-loader";
import { v1 as uuid } from "uuid";

const BookPlaceholder = (props) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {[...Array(4)].map((item) => (
      <ContentLoader
        key={uuid()}
        style={{ margin: 20 }}
        speed={2}
        width={600}
        height={160}
        viewBox="0 0 600 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="105" y="12" rx="3" ry="3" width="88" height="6" />
        <rect x="105" y="30" rx="3" ry="3" width="52" height="6" />
        <rect x="105" y="52" rx="3" ry="3" width="410" height="6" />
        <rect x="105" y="67" rx="3" ry="3" width="380" height="6" />
        <rect x="105" y="83" rx="3" ry="3" width="178" height="6" />
        <circle cx="573" cy="233" r="20" />
        <rect x="5" y="12" rx="0" ry="0" width="83" height="113" />
        <rect x="3" y="44" rx="0" ry="0" width="20" height="2" />
        <rect x="107" y="95" rx="0" ry="0" width="132" height="27" />
        <rect x="165" y="109" rx="0" ry="0" width="6" height="1" />
      </ContentLoader>
    ))}
  </div>
);
export default BookPlaceholder;
