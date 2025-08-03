import theme from "@/constants/theme";
import React from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import Icon from "./Icon";

interface Props extends TextInputProps {
  isLoading?: boolean;
  delayTiming?: number;
  onClear: () => void;
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({
  value,
  onBlur,
  onFocus,
  onClear,
  onSearch,
  isLoading,
  placeholder,
  delayTiming = 600,
  placeholderTextColor,
  ...rest
}: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  return (
    <View style={styles.wrapInput}>
      <Icon name="search" color={"neutral500"} />
      <TextInput
        {...rest}
        style={styles.input}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        autoCorrect={false}
        keyboardType="default"
        returnKeyType="search"
        selectionColor={theme.COLORS.neutral800}
        onChangeText={(text) => {
          setSearchTerm(text);
          onSearch(text);
        }}
        enablesReturnKeyAutomatically={true}
        placeholder={placeholder}
        cursorColor={theme.COLORS.neutral800}
        placeholderTextColor={theme.COLORS.neutral400}
      />
      {searchTerm.length > 0 && (
        <Pressable
          onPress={() => {
            onClear();
            setSearchTerm("");
          }}
        >
          <Icon name="close" color={"neutral500"} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInput: {
    borderWidth: 1,
    borderColor: theme.COLORS.neutral400,
    borderRadius: 100,
    padding: theme.SPACING.xs,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.SPACING.xs,
    backgroundColor: theme.COLORS.neutral50,
  },
  input: {
    flex: 1,
    color: theme.COLORS.neutral800,
    fontFamily: theme.FONT.weight.regular,
  },
});

export default SearchInput;
