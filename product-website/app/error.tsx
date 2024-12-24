"use client"; // Error boundaries must be Client Components

import Link from "next/link";

export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
        height: "700px",
      }}
    >
      <h2>Something went wrong!</h2>
      <Link href={"/"}>
        <p>Go to Home Page</p>
      </Link>
    </div>
  );
}
