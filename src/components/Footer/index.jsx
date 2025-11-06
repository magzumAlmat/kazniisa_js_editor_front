// components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  const sitemap = [
    { href: "/o-klinike", text: "О клинике" },
    { href: "/uslugi", text: "Платные услуги" },
    { href: "/specialisty", text: "Специалисты" },
    { href: "/pacientam", text: "Пациентам" },
    { href: "/otdeleniya", text: "Отделения" },
    { href: "/novosti", text: "Новости" },
    { href: "/kontakty", text: "Контакты" },
    { href: "/zapis-na-priem", text: "Запись на прием" },
  ];

  return (
    <>
      {/* ---------- JSX‑style (local + global) ---------- */}
      <style jsx>{`
        /* ---------- Local styles ---------- */
        .footer {
          border-top: 1px solid #e5e7eb;
          background: #fff;
        }
        .footer.dark {
          border-top-color: #374151;
          background: #0f172a;
        }
        .container {
          max-width: 1390px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        @media (min-width: 768px) {
          .container { padding: 0 2rem; }
        }
        @media (min-width: 1536px) {
          .container { padding: 0; }
        }

        .top {
          padding: 5rem 0;
        }
        @media (min-width: 1024px) {
          .top { padding: 6.25rem 0; }
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .content {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .logoSection {
          width: 50%;
        }
        @media (min-width: 1024px) {
          .logoSection { width: 25%; }
        }
        .logoLink { display: block; margin-bottom: 1.25rem; }
        .desc {
          margin-bottom: 2.5rem;
          color: #6b7280;
          font-size: .875rem;
          line-height: 1.5;
        }
        .dark .desc { color: #9ca3af; }

        .contactLabel {
          margin-bottom: .375rem;
          font-size: .75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .3125rem;
          color: #374151;
        }
        .dark .contactLabel { color: #e5e7eb; }

        .contactEmail {
          font-weight: 500;
          color: #111827;
          text-decoration: none;
        }
        .dark .contactEmail { color: #fff; }

        .linksWrap {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }
        @media (min-width: 768px) {
          .linksWrap {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        @media (min-width: 1024px) {
          .linksWrap { width: 66.666%; }
        }
        @media (min-width: 1280px) {
          .linksWrap { width: 58.333%; }
        }

        .group { flex: 1; }
        .groupTitle {
          margin-bottom: 2.25rem;
          font-size: 1.125rem;
          font-weight: 500;
          color: #111827;
        }
        .dark .groupTitle { color: #fff; }

        .link {
          display: block;
          margin-bottom: .75rem;
          color: #4b5563;
          text-decoration: none;
          transition: color .3s;
        }
        .link:hover { color: #6366f1; }
        .dark .link { color: #d1d5db; }
        .dark .link:hover { color: #818cf8; }

        /* ---------- Bottom ---------- */
        .bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem 0;
          border-top: 1px solid #e5e7eb;
        }
        @media (min-width: 1024px) {
          .bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        .dark .bottom { border-top-color: #374151; }

        .bottomLink {
          color: #4b5563;
          font-size: .875rem;
          text-decoration: none;
          transition: color .3s;
        }
        .bottomLink:hover { color: #6366f1; }
        .dark .bottomLink { color: #d1d5db; }
        .dark .bottomLink:hover { color: #818cf8; }

        .copy {
          color: #6b7280;
          font-size: .875rem;
        }
        .dark .copy { color: #9ca3af; }

      `}</style>

      <style jsx global>{`
        /* SVG fill‑currentColor */
        .fillCurrent { fill: currentColor; }
      `}</style>

      {/* ---------- Footer markup ---------- */}
      <footer
        className={`footer ${
          typeof window !== "undefined" &&
          document.documentElement.classList.contains("dark")
            ? "dark"
            : ""
        }`}
      >
        <div className="container">
          {/* Top */}
          <div className="top">
            <div className="content">
              {/* Logo + contact */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="logoSection"
              >
                <a href="/" className="logoLink">
                  <Image
                    width={140}
                    height={100}
                    src="/images/logo/gkb7-logo.png"
                    alt="Логотип ГКБ №7"
                  />
                </a>

                <p className="desc">
                  г. Алматы, микрорайон Калкаман, 20
                </p>

                <p className="contactLabel">Контакты</p>
                <a href="mailto:info@gkb7.kz" className="contactEmail">
                  info@gkb7.kz
                </a>
                <p className="contactEmail" style={{ marginTop: '0.5rem' }}>
                  Call-центр: 8 (727) 341-06-66
                </p>
                 <p className="contactEmail" style={{ marginTop: '0.5rem' }}>
                  Приемная: 8 (727) 270-86-00
                </p>
              </motion.div>

              {/* Links */}
              <div className="linksWrap">
                <motion.div
                  variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <h4 className="groupTitle">Карта сайта</h4>
                  <ul>
                    {sitemap.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="link">
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="bottom">
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
               <p className="copy">
                Разработано <a href="https://github.com/v-v-i" target="_blank" rel="noopener noreferrer" className="bottomLink">v-v-i</a>
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="copy">© {year} ГКБ №7. Все права защищены</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
