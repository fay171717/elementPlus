import type { Language, TranslatePair } from "@elementPlus/locale";

export interface ConfigProviderProps {
  locale?: Language;
  extendsI18nMsg?: TranslatePair;
}
