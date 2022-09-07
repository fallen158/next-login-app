import classNames from "classnames";
import Space from "../space";
import styles from "./index.module.scss";

interface Props {
  /**
   * 当前的index
   */
  current: number;
  className?: string;
  /**
   * 子项节点
   */
  items: string[];
}
const Step = ({ current, className, items }: Props) => {
  return (
    <Space
      className={classNames(styles.step, className)}
      align="center"
      justify="center"
    >
      {items.map((item, index) => (
        <Space className={styles.item} key={index}>
          <div className={styles.itemText}>{item}</div>
        </Space>
      ))}
    </Space>
  );
};

export default Step;
