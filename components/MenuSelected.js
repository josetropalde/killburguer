import { useEffect } from "react";
import styles from "../styles/MenuSelected.module.css";
import { StructuredText } from "react-datocms";

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
            const whatsappLink = `https://api.whatsapp.com/send?phone=5519997223594&text=Olá,%20Vim%20pelo%20site%20e%20gostaria%20de%20pedir%20o%20lanche%20${item.title}`;
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
                  <StructuredText data={item.description} />
                  <a target="_blank" rel="noreferrer" href={whatsappLink}>
                    Peça agora
                  </a>
                  <span></span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MenuSelected;
