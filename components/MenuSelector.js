import styles from "../styles/MenuSelector.module.css";

const MenuSelector = (props) => {
  const { setItemIndex, itemIndex, data } = props;

  return (
    <>
      <section className={styles.selector}>
        <div className={styles.itens}>
          {data.allItems.map((item, index) => {
            return (
              <div
                className={styles.item}
                key={index}
                onClick={() => setItemIndex(index)}
                style={{
                  backgroundColor: itemIndex == index ? "#da2630" : "#9E1B23",
                }}
              >
                <img src={item.src.url} />
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
