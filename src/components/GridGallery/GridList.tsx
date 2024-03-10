import { ImageListProps } from "components/DefaultGallery/ImageList";
import style from "./GridList.module.scss";

export const GridList = ({
  imagesCount,
  setOpen,
  setImage,
}: ImageListProps) => {
  return imagesCount.map((value) => (
    <div key={value} className={style.image_box}>
      <img
        src={`./img${value}.jpg`}
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
