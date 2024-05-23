import { cn } from "@/utils";
import { PolymorphicRef } from "@/utils/types";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const textStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      semibold: "font-semibold",
      black: "font-black",
      extrabold: "font-extrabold",
      medium: "font-medium",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    italic: {
      italic: "font-italic",
      true: "italic",
    },
    underline: {
      underline: "text-underline",
      true: "underline",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textStyles>
>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

//@ts-expect-error - unexpected typing errors
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef
  ) => {
    const Component = as || "span";
    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            align,
            size,
            emphasis,
            italic,
            underline,
            weight,
            className,
          })
        )}
        {...props}
      />
    );
  }
);