import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute z-30 w-full flex px-[8%]">
      <div className="flex w-full justify-between items-center xl:flex-row">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={320}
            height={77}
            alt=""
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
