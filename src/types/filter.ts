import { ReactNode } from "react";

export interface IFilter {
  displayOrder: number;
  name: string;
  eventKey: string;
  component: ReactNode;
}
