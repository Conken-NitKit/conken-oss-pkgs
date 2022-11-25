import { Pallet } from "~/constants/pallet";
import { createColorsFromScheme } from "~/services/colors/createColorsFromScheme";

export const createMaryGoldColors = ({ prefix = "" } = {}) =>
  createColorsFromScheme(
    {
      text: {
        high_emphasis: Pallet.SLATE[900],
        medium_emphasis: Pallet.STONE[800],
        low_emphasis: Pallet.STONE[400],
        accent_primary: Pallet.ORANGE[600],
        accent_secondary: Pallet.ROSE[300],
        accent_tertiary: Pallet.TEAL[400],
        success: Pallet.LIME[600],
        warning: Pallet.YELLOW[400],
        disable: Pallet.STONE[300],
        caution: Pallet.RED[700],
      },
      text_inverted: {
        high_emphasis: Pallet.WHITE,
        medium_emphasis: Pallet.STONE[300],
        low_emphasis: Pallet.STONE[500],
        accent_primary: Pallet.AMBER[900],
        accent_secondary: Pallet.AMBER[700],
        accent_tertiary: Pallet.WHITE,
        success: Pallet.LIME[100],
        warning: Pallet.YELLOW[100],
        disable: Pallet.STONE[500],
        caution: Pallet.RED[600],
      },
      background: {
        primary: Pallet.WHITE,
        secondary: Pallet.STONE[200],
        tertiary: Pallet.ORANGE[200],
        accent_primary: Pallet.ORANGE[600],
        accent_secondary: Pallet.AMBER[500],
        accent_tertiary: Pallet.TEAL[400],
        success: Pallet.LIME[600],
        warning: Pallet.YELLOW[400],
        disable: Pallet.STONE[300],
        caution: Pallet.RED[700],
        overlay: Pallet.STONE[700],
      },
      background_inverted: {
        primary: Pallet.STONE[900],
        secondary: Pallet.STONE[800],
        tertiary: Pallet.STONE[700],
        accent_primary: Pallet.AMBER[900],
        accent_secondary: Pallet.AMBER[700],
        accent_tertiary: Pallet.WHITE,
        success: Pallet.LIME[600],
        warning: Pallet.YELLOW[400],
        disable: Pallet.STONE[300],
        caution: Pallet.RED[700],
        overlay: Pallet.WHITE,
      },
      background_gradient: {
        accent_gradient_primary: [Pallet.ORANGE[400], Pallet.ORANGE[600]],
        accent_gradient_secondary: [Pallet.RED[300], Pallet.AMBER[500]],
      },
      border: {
        high_emphasis: Pallet.SLATE[900],
        medium_emphasis: Pallet.STONE[800],
        low_emphasis: Pallet.STONE[400],
        success: Pallet.LIME[600],
        warning: Pallet.YELLOW[400],
        disable: Pallet.STONE[300],
        caution: Pallet.RED[700],
      },
      border_inverted: {
        high_emphasis: Pallet.WHITE,
        medium_emphasis: Pallet.STONE[300],
        low_emphasis: Pallet.STONE[500],
        success: Pallet.LIME[100],
        warning: Pallet.YELLOW[100],
        disable: Pallet.STONE[500],
        caution: Pallet.RED[600],
      },
    },
    {
      prefix,
    }
  );

  console.log(createMaryGoldColors());