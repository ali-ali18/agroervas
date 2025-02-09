import type { routerProps } from "./routerProps";

export interface navConfigProps extends routerProps {
    label: string;
    description?: string;
    path: string;
}