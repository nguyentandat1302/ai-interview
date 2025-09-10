export default function SignupPage() {
  return (
    <main>
      <h1>Đăng ký</h1>
      <form>
        <input type="text" placeholder="Họ tên" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit">Tạo tài khoản</button>
      </form>
    </main>
  );
}
