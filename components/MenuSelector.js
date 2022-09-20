import styles from "../styles/MenuSelector.module.css";

const MenuSelector = (props) => {
  const { setItemIndex, itemIndex, itens } = props;

  return (
    <>
      <section className={styles.selector}>
        <div className={styles.itens}>
          {itens.map((item, index) => {
            return (
              <div
                className={styles.item}
                key={index}
                onClick={() => setItemIndex(index)}
                style={{
                  backgroundColor: itemIndex == index ? "#da2630" : "#9E1B23",
                }}
              >
                <img src={item.src} />
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MenuSelector;
