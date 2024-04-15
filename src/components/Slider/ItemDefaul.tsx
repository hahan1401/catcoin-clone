import Image from "next/image";

const ItemDefaul = ({ src }: { src: string }) => {
  return (
    <div className="slide w-[240px] h-[200px]">
      <Image
        src={src}
        alt="thumbnail"
        width={240}
        height={200}
        style={{
          objectFit: "contain",
          width: 240,
          height: 200,
        }}
      />
    </div>
  );
};

export default ItemDefaul;
