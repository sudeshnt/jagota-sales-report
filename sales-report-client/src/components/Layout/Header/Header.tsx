import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute z-30 w-full flex px-[10%]">
      <div className="flex w-full justify-between items-center xl:flex-row">
        <Link href="/">
          <Image
            className="ml-[-18px]"
            src="/images/logo.png"
            width={220}
            height={48}
            alt=""
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
