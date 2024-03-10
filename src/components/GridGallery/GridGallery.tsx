import _ from "lodash";
import { useState } from "react";
import { IImage } from "components";
import { GridList } from "./GridList";
import style from "./GridGallery.module.scss";
import { ImageModal } from "components/ImageModal";

const GridGallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<IImage>({
    src: "",
    index: NaN,
  });
  const imagesCount = _.range(1, 24 + 1);
  const imagesLength = imagesCount.length;

  return (
    <div className={style.container}>
      <GridList
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
export default GridGallery;
