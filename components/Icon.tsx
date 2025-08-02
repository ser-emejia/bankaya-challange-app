import theme from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

interface Props {
  size?: number;
  name: IconName;
  onPress?: () => void;
  color?: keyof typeof theme.COLORS;
}

const Icon = ({ size = 24, name, color = "neutral50", onPress }: Props) => {
  return <Ionicons name={name} size={size} color={theme.COLORS[color]} />;
};

export default Icon;
