import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/one">Page One</Link>
        </li>
        <li>
          <Link to="/two">Page two</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
