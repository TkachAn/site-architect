import s from "./s.module.css";

export function Social() {
  return (
    <div className={s.social}>
      <h5 className={s.asideTitle}>Подписывайтесь на нас</h5>
      <ul className={s.socialList}>
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
