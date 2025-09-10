import Link from "next/link";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // để nút nằm dưới text
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <h2>Login Page</h2>

      {/* Link sang trang signup */}
      <Link
        href="/auth/signup"
        style={{
          padding: "10px 20px",
          background: "#0070f3",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Go to Signup
      </Link>
    </div>
  );
}
