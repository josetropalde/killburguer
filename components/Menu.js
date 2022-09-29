import { useState } from "react";
import MenuSelected from "./MenuSelected";
import MenuSelector from "./MenuSelector";

const Menu = (props) => {
  const [itemIndex, setItemIndex] = useState(0);
  const { data } = props;
  return (
    <>
      <MenuSelector
        setItemIndex={setItemIndex}
        itemIndex={itemIndex}
        data={data}
      />
      <MenuSelected itemIndex={itemIndex} data={data} />
    </>
  );
};

export default Menu;
