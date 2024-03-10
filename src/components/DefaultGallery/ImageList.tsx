import { Dispatch } from "react";
import style from "./ImageList.module.scss";
import { IImage } from ".";

export interface ImageListProps {
  imagesCount: number[];
  setOpen: Dispatch<boolean>;
  setImage: Dispatch<IImage>;
}

export const ImageList = ({
  imagesCount,
  setOpen,
  setImage,
}: ImageListProps) => {
  return imagesCount.map((value) => (
    <div key={value} className={style.image_box}>
      <img
        src={`./img${value}.jpg`}
        alt={`img${value}`}
        onClick={() => {
          setOpen(true);
          setImage({
            src: `./img${value}.jpg`,
            index: value,
          });
        }}
        loading="lazy"
      />
    </div>
  ));
};
