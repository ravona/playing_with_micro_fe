import { useState, useEffect } from "react";

// style:
import "./Image.scss";

const Image = () => {
  const [image, setImage] = useState({});
  const request = new Request("https://picsum.photos/908/430");

  useEffect(() => {
    fetch(request).then((res) => {
      if (!res.ok) {
        return Error("There was an error fetching data from server");
      }
      console.log(res);
      setImage(res);
    });
  }, []);

  console.log(image);

  return (
    <div className="Image">
      <img className="Image__img" alt="component" src={image.url} />
    </div>
  );
};

export default Image;
