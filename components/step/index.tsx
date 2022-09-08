import classNames from 'classnames';
import Space from '../space';
import styles from './index.module.scss';

interface Props {
  /**
   * 当前的index
   */
  current: number;
  /**
   * 子项节点
   */
  items: string[];
  onChoose?: (i: number) => void;
}
const Step = ({ current, items, onChoose }: Props) => {
  return (
    <Space className={styles.step} align="center" justify="center">
      {items.map((item, index) => {
        const active = index <= current - 1;
        const color = active ? '#1678ff' : '#e3e3e3';

        return (
          <Space
            vertical
            flex='auto'
            className={classNames(styles.item, active && styles.activeItem)}
            key={index}
          >
            <Space
              align="center"
              justify="center"
              className={styles.numberWrap}
            >
              <div
                className={styles.line}
                style={{
                  left:
                    index === 0
                      ? '50%'
                      : index === items.length - 1
                      ? '-50%'
                      : 0,
                  background: current - 1 ? color : '#e3e3e3',
                }}
              />
              <Space align="center" justify="center" className={styles.number}>
                {index + 1}
              </Space>
            </Space>
            <Space justify="center" className={styles.itemText}>
              {item}
            </Space>
          </Space>
        );
      })}
    </Space>
  );
};

export default Step;
