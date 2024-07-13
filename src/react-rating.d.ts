declare module "react-rating" {
  import * as React from "react";

  interface RatingProps {
    emptySymbol?: React.ReactNode | string;
    fullSymbol?: React.ReactNode | string;
    initialRating?: number;
    readonly?: boolean;
    onChange?: (rate: number) => void;
    onHover?: (rate: number) => void;
    stop?: number;
  }

  class Rating extends React.Component<RatingProps> {}

  export default Rating;
}
