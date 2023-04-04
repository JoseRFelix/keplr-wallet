import { ReactNode } from "react";

export type Header =
  | {
      mode: "intro";
    }
  | {
      mode: "welcome";
      isUserBack: boolean;
    }
  | {
      mode: "step";
      title: string;
      paragraphs?: (string | ReactNode)[];
      stepCurrent: number;
      stepTotal: number;
    };

export interface HeaderContext {
  setHeader(header: Header): void;
  header: Header;
}
