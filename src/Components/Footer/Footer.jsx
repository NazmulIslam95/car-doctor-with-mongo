import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer pl-32 py-20  bg-black text-white">
      <aside className="space-y-4">
        <img src={logo} alt="" />
        <p>
          Car Doctor Company Ltd.
          <br /> <br />
          Providing reliable Services since 1992
        </p>
      </aside>
      <nav className="space-y-2">
        <header className="footer-title">About</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="space-y-2">
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="space-y-2">
        <header className="footer-title">Support</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
