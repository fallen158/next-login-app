import React from "react";
import { Property } from "csstype";
import classNames from "classnames";

export type ReactElementProps = React.HTMLAttributes<HTMLElement>;

interface IProps extends ReactElementProps {
  /**
   * 是否垂直
   * @default false
   */
  vertical?: boolean;
  /** 交叉轴对齐方式 */
  align?: Property.AlignItems;
  /** 主轴对齐方式 */
  justify?: Property.JustifyContent;
  /** 是否自动换行，仅在 horizontal 时有效 */
  flexWrap?: Property.FlexWrap;
  /** 子元素 */
  children?: React.ReactNode;
  /** 间距大小 */
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  /** 在一行第几个时不设置size */
  ignoreNum?: number;
  flex?: Property.Flex;
}

const Space = ({
  align,
  vertical = false,
  justify,
  flexWrap,
  size,
  ignoreNum,
  className,
  children,
  style,
  flex,
  ...props
}: IProps) => {
  const filterChildren =
    children instanceof Array
      ? children
      : [children]
          .map((i: any) =>
            i?.type?.toString() === "Symbol(react.fragment)"
              ? i.props.children
              : i
          )
          ?.flat(3)
          ?.filter?.((i) => ![undefined, true, false, null, ""].includes(i));
  return (
    <div
      style={{
        display: "flex",
        flex,
        boxSizing: "border-box",
        justifyContent: justify,
        alignItems: align,
        flexWrap,
        flexDirection: vertical ? "column" : undefined,
        lineHeight: vertical ? 1 : undefined,
        ...style,
      }}
      {...props}
      className={classNames(className)}
    >
      {filterChildren?.map?.((item, index) => {
        item = React.isValidElement(item) ? item : <div>{item}</div>;
        const props = (item as any).props;
        const style = {
          [vertical ? "marginBottom" : "marginRight"]:
            index + 1 === filterChildren?.length ||
            (ignoreNum && index && (index + 1) % ignoreNum === 0)
              ? undefined
              : typeof size === "number"
              ? `${size}px`
              : size,
          ...props.style,
        };
        return React.cloneElement(item as any, {
          ...props,
          "data-is-last": index === filterChildren.length - 1,
          key: index + JSON.stringify(style),
          style,
        });
      })}
    </div>
  );
};

export default Space;
