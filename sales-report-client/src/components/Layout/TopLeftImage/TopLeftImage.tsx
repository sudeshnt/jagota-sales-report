import Image from "next/image";

export default function TopLeftImg() {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge opacity-50 w-[400px] xl:w-[600px]">
      <Image
        src="/images/top-left-img.png"
        alt="left-top-image"
        width={600}
        height={590}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
