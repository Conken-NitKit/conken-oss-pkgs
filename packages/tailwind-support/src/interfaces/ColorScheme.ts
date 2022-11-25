type TextColorScheme = {
  high_emphasis: string;
  medium_emphasis: string;
  low_emphasis: string;
  accent_primary: string;
  accent_secondary: string;
  accent_tertiary: string;
  success: string;
  warning: string;
  disable: string;
  caution: string;
};

type BackgroundColorScheme = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent_primary: string;
  accent_secondary: string;
  accent_tertiary: string;
  success: string;
  warning: string;
  disable: string;
  caution: string;
  overlay: string;
};

/**
 * Note: xxx_gradient_xxx の形式のキーを定義してください。
 */
type BackgroundGradientColorScheme = {
  accent_gradient_primary: [string, string];
  accent_gradient_secondary: [string, string];
};

type BorderColorScheme = {
  high_emphasis: string;
  medium_emphasis: string;
  low_emphasis: string;
  success: string;
  warning: string;
  disable: string;
  caution: string;
};

export type ColorScheme = {
  text: TextColorScheme;
  text_inverted: TextColorScheme;
  background: BackgroundColorScheme;
  background_inverted: BackgroundColorScheme;
  background_gradient: BackgroundGradientColorScheme;
  border: BorderColorScheme;
  border_inverted: BorderColorScheme;
};
