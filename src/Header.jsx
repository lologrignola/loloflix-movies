import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ title, setTitle, setPage }) {
  return (
    <>
      <div className="topNavbar sticky-top">
        <div className="topNav d-flex align-items-center justify-content-between ">
          <div className="d-flex align-items-end">
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                cursor: "pointer",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <h1 className="ms-5">Lolofix</h1>
              </Link>
            </motion.div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/about-us"
            >
              <p className="ms-4 d-flex">Sobre Nosotros</p>
            </Link>
            <p className="ms-4">Contacto</p>
          </div>
          <div className="d-flex align-items-center">
            <input
              id="title"
              value={title}
              type="text"
              className="me-2"
              placeholder="Busqueda"
              onChange={(ev) => {
                setTitle(ev.target.value);
                setPage(1);
              }}
            />
            <i class="fas fa-search me-5"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
