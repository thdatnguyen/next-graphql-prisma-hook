import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <li>
        <Link href="/items">
          <a>Items</a>
        </Link>
      </li>
      <li>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
      </li>
      <li>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      </li>
      <li>
        <Link href="/me">
          <a>Account</a>
        </Link>
      </li>
    </NavStyles>
  );
}

export default Nav;
