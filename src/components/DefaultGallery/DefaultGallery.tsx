import _ from "lodash";
import { useState } from "react";
import { ImageList } from "./ImageList";
import { ImageModal } from "../ImageModal";
import style from "./DefaultGallery.module.scss";

export interface IImage {
  src: string;
  index: number;
}

const DefaultGallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<IImage>({
    src: "",
    index: NaN,
  });
  const imagesCount = _.range(1, 20 + 1);
  const imagesLength = imagesCount.length;

  return (
    <div className={style.container}>
      <ImageList
        imagesCount={imagesCount}
        setOpen={setOpen}
        setImage={setImage}
      />
      <ImageModal
        open={open}
        setOpen={setOpen}
        image={image}
        setImage={setImage}
        imagesLength={imagesLength}
      />
    </div>
  );
};
export default DefaultGallery;
