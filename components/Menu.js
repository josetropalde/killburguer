import { useState } from "react";
import MenuSelected from "./MenuSelected";
import MenuSelector from "./MenuSelector";

const Menu = () => {
  const [itemIndex, setItemIndex] = useState(0);

  const burguer = "/hamb.png";
  const itens = [
    {
      src: burguer,
      title: "Burger 1",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 2",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 3",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 4",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 5",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 6",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 7",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 8",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
    {
      src: burguer,
      title: "Burger 9",
      price: "R$55,90",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vel quos nulla quaerat quia numquam excepturi culpa, odit pariatur officiis officia veniam recusandae aliquam in, mollitia omnis repudiandae consequatur dolorum eveniet voluptate. Nostrum aspernatur numquam unde provident reiciendis odit fugit, obcaecati beatae consectetur ipsa maxime minus vel voluptatum quidem cum!",
      href: "/",
    },
  ];

  return (
    <>
      <MenuSelector
        setItemIndex={setItemIndex}
        itemIndex={itemIndex}
        itens={itens}
      />
      <MenuSelected itemIndex={itemIndex} itens={itens} />
    </>
  );
};

export default Menu;
