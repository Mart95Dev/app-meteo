import Image from "next/image";
import ImgDefault from "../public/assets/bg-weather.jpg";
import ImgCloud from "../public/assets/cloud.jpg";
import ImgRain from "../public/assets/rain.jpg";
import ImgSky from "../public/assets/sky.jpg";
import ImgSnow from "../public/assets/snow.jpg";
import ImgStorm from "../public/assets/storm.jpg";
import ImgSun from "../public/assets/sun.jpg";
import ImgWind from "../public/assets/wind.jpg";

const images = [
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgDefault}
    // width="3840"
    // height="5760"
  />,
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgCloud}
    // width="3980"
    // height="5126"
    // className="h-full w-full object-cover"
  />,
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgRain}
    // width="6480"
    // height="4320"
  />,
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgSky}
    // width="4480"
    // height="6720"
  />,
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgSnow}
    // width="4288"
    // height="2848"
  />,
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgStorm}
    // width="4096"
    // height="2731"
  />,
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgSun}
    // width="2832"
    // height="4240"
  />,
  <Image
    layout="fill"
    objectFit="cover"
    placeholder="blur"
    src={ImgWind}
    // width="2500"
    // height="1667"
  />,
];

export default { images };
