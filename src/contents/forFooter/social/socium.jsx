import s from "./s.module.css";

export function Social() {
  return (
    <div className={s.social}>
      <h5>Follow Us</h5>
      <ul>
        <li>
          <span>Facebook: </span>
          <a href="https://facebook.com">facebook.com/yourpage</a>
        </li>
        <li>
          <span>Twitter: </span>
            <a href="https://twitter.com">twitter.com/yourpage</a>
        </li>
        <li>
          <span>Instagram: </span>
          <a href="https://instagram.com">instagram.com/yourpage</a>
        </li>
      </ul>
    </div>
  );
}

