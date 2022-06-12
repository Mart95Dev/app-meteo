import Image from "next/image";

import ImgDefault from "../public/assets/bg-weather.jpg";
import ImgCloud from "../public/assets/cloud2.jpg";
import ImgRain from "../public/assets/rain2.jpg";
import ImgSky from "../public/assets/sky2.jpg";
import ImgSnow from "../public/assets/snow2.jpg";
import ImgFreezing from "../public/assets/freezing.jpg";
import ImgThunder from "../public/assets/thunder.jpg";
import ImgSun from "../public/assets/freezing.jpg";
import ImgWind from "../public/assets/wind.jpg";

const images = [
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgDefault}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgCloud}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgRain}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgSky}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgSnow}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgFreezing}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgThunder}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgSun}
  />,
  <Image
    layout="fill"
    loading="lazy"
    objectFit="cover"
    placeholder="blur"
    src={ImgWind}
  />,
];

export default { images };
