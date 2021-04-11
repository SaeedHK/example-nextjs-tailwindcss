import Link from 'next/link';
import { FlexCenter, FlexRow } from './Flex';

const NavItem = ({ children }) => (
  <FlexCenter className="px-2 py-1 h-8 border-b-2 border-green-400 text-gray-700 border-opacity-0 cursor-pointer transition duration-500 hover:border-opacity-100">
    {children}
  </FlexCenter>
);

const Navbar = () => {
  return (
    <FlexRow className="items-center h-16 px-64 bg-green-200 space-x-8">
      <NavItem>
        <Link href="/">
          <a>Form with tooltip</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/form2">
          <a>Form with side descriptions</a>
        </Link>
      </NavItem>
    </FlexRow>
  );
};

export default Navbar;
