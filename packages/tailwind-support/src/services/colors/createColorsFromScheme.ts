import { ColorScheme } from "~/interfaces/ColorScheme";

export const createColorsFromScheme = (
  scheme: ColorScheme,
  { prefix = "" } = {}
): {
  backgroundColor: { [key: string]: string };
  backgroundImage: { [key: string]: string };
  borderColor: { [key: string]: string };
  textColor: { [key: string]: string };
} => {
  const _prefix = prefix ? `${prefix}-` : "";

  const backgroundColor = {
    ...Object.entries(scheme.background).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [_prefix + key.replaceAll("_", "-")]: value,
      }),
      {}
    ),
    ...Object.entries(scheme.background_inverted).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [_prefix + key.replaceAll("_", "-") + "-inverted"]: value,
      }),
      {}
    ),
  };

  const backgroundImage = Object.entries(scheme.background_gradient).reduce(
    (acc, [key, [start, end]]) => {
      const value = `linear-gradient(180deg, ${start} 0%, ${end} 100%)`;
      return {
        ...acc,
        [_prefix + key.replaceAll("_", "-")]: value,
      };
    },
    {}
  );

  const borderColor = {
    ...Object.entries(scheme.border).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [_prefix + key.replaceAll("_", "-")]: value,
      }),
      {}
    ),
    ...Object.entries(scheme.border_inverted).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [_prefix + key.replaceAll("_", "-") + "-inverted"]: value,
      }),
      {}
    ),
  };

  const textColor = {
    ...Object.entries(scheme.text).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [_prefix + key.replaceAll("_", "-")]: value,
      }),
      {}
    ),
    ...Object.entries(scheme.text_inverted).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [`${key.replaceAll("_", "-")}-inverted`]: value,
      }),
      {}
    ),
  };

  return {
    backgroundColor,
    backgroundImage,
    borderColor,
    textColor,
  };
};
