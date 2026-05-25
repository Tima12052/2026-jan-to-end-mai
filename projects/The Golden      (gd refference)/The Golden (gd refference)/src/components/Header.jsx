export default function Header() {
  return (
    <div className="dspf">
      <header className="hdr">
        <div className="dspf">
          <img src="../../public/logo.svg" alt="Golden" />
          <div style={{ gap: "10px", padding: "20px 0px 0px 0px" }} className="dspf">
            <p style={{ width: "75px" }} className="mntsrt">
              HOME
            </p>
            <p style={{ width: "100px" }} className="mntsrt">
              SERVICES
            </p>
            <p style={{ width: "113px" }} className="mntsrt">
              PORTFOLIO
            </p>
            <p style={{ width: "81px" }} className="mntsrt">
              ABOUT
            </p>
            <p style={{ width: "101px" }} className="mntsrt">
              CONTACT
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
