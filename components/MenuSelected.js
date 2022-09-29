import { useEffect } from "react";
import styles from "../styles/MenuSelected.module.css";

const MenuSelected = (props) => {
  const { itemIndex, data } = props;

  let display;

  useEffect(() => {
    if (window.innerWidth < 1024) {
      display = "block";
    } else {
      display = "flex";
    }
  }, []);

  return (
    <>
      <section>
        <div className={styles.itens}>
          {data.allItems.map((item, index) => {
            return (
              <div
                className={styles.item}
                key={index}
                style={{ display: itemIndex == index ? display : "none" }}
              >
                <div className={styles.image}>
                  <img src={item.src.url} />
                </div>
                <div className={styles.content}>
                  <h2>{item.title}</h2>
                  <span>{item.price}</span>
                  <p>{item.description}</p>
                  <a target="_blank" rel="noreferrer" href={item.href}>
                    Peça agora
                  </a>
                  <span></span>
                </div>
              </div>
            );
          })}
        </div>
        <h2>{display}</h2>
      </section>
    </>
  );
};

export default MenuSelected;
