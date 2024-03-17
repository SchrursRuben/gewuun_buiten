import bannerImage from "../../public/images/homePage_gewuunBuiten.jpg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="h-screen w-screen">
      <Image
        className=""
        src={bannerImage}
        alt="background image"
        priority={true}
        fill
        objectFit="cover"
      />
      <div className="absolute left-0 top-0 m-4 box-content h-[calc(100%-1.25rem)] w-[calc(100%-2.5rem)] border-x-4 border-t-4 border-primary bg-black bg-opacity-30">
        <div className="m-8 flex h-full flex-col">
          <h1 className="text-6xl font-bold text-white">gewûûn buiten</h1>
        </div>
      </div>
    </header>
  );
};
