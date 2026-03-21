import s from "./s.module.css";

export function Social() {
  return (
    <div className={s.social}>
      <h5 className={s.asideTitle}>Подписывайтесь на нас</h5>
      <ul className={s.socialList}>
        <li>
          <a
            href="https://github.com/OksanaTkachevska"
            className={s.socialLink}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/%D0%BE%D0%BA%D1%81%D0%B0%D0%BD%D0%B0-%D1%82%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-864958339/"
            className={s.socialLink}
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://facebook.com/yourpage" className={s.socialLink}>
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/yourpage" className={s.socialLink}>
            Twitter
          </a>
        </li>
        <li>
          <a href="https://instagram.com/yourpage" className={s.socialLink}>
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}
//https://www.linkedin.com/in/andrey-tkachenko-996241228/
// https://github.com/TkachAn
//https://www.linkedin.com/in/%D0%BE%D0%BA%D1%81%D0%B0%D0%BD%D0%B0-%D1%82%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-864958339/