import "./NavbarStyles.css";
function Navbar() {
  return (
    <>
      <nav>
        <a href="index.html">
          <h1>The Nav Bar</h1>
        </a>
        <div>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">About me</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
            <li>
              <a href="index.html">CV</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
