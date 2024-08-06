import { ElementType } from "./types";

export function getConfigProperty<K extends keyof ElementType>(
  config: ElementType,
  key: K
): ElementType[K] {
  return config[key];
}