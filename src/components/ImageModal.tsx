import { Dispatch } from "react";
import { IImage } from "./DefaultGallery";
import style from "./ImageModal.module.scss";

interface ImageModalProps {
  open: boolean;
  setOpen: Dispatch<boolean>;
  image: IImage;
  setImage: Dispatch<IImage>;
  imagesLength: number;
}

export const ImageModal = ({
  open,
  setOpen,
  image,
  setImage,
  imagesLength,
}: ImageModalProps) => {
  return (
    <div
      className={`${style.modal} ${open && style.active}`}
      onClick={() => {
        setOpen(false);
        setImage({ src: "", index: NaN });
      }}
    >
      <button
        className={style.img_button}
        onClick={(e) => {
          e.stopPropagation();
          setImage({
            src: `./img${image.index - 1}.jpg`,
            index: image.index - 1,
          });
        }}
        disabled={image.index === 1}
      >
        {"<"}
      </button>
      <div className={style.modal_content}>
        <img src={image.src} alt={image.src} loading="lazy" />
      </div>
      <button
        className={style.img_button}
        onClick={(e) => {
          e.stopPropagation();
          setImage({
            src: `./img${image.index + 1}.jpg`,
            index: image.index + 1,
          });
        }}
        disabled={image.index === imagesLength}
      >
        {">"}
      </button>
    </div>
  );
};
