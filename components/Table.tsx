import { View, ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native-ui-lib";

export type TableColumnDef = {
  displayName: string;
  field: string;
  span: number;
};

type Map = {
  [key: string]: string | number | undefined;
};

type TableProps = {
  columns: TableColumnDef[];
  width: number;
  rows: Map[];
  headerColor: string;
  rowColor: string;
};

export default function Table(props: TableProps) {
  const { columns, width, rows, headerColor, rowColor } = props;
  const SPAN_UNIT = width / 12;

  const tableStyles: ViewStyle = {
    width,
    // backgroundColor: "red",
    // padding: 10,
    flexDirection: "row",
  };

  const columnStyles: ViewStyle = {
    alignItems: "center",
  };

  const colors = ["#999999", "#199199"];

  return (
    <View style={tableStyles}>
      {columns.map((column, i) => {
        return (
          <View
            key={i}
            style={{
              ...columnStyles,
              width: column.span * SPAN_UNIT,
              // backgroundColor: colors[i],
            }}
          >
            <Text text70BO color={headerColor}>
              {column.displayName}
            </Text>
            <FlatList
              data={rows}
              renderItem={({ item, index }) => (
                <View>
                  <Text text70BO color={rowColor}>
                    {item[column.field]}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => `${item[column.field]}-${index}`}
              // contentContainerStyle={columnStyles}
            />
          </View>
        );
      })}
    </View>
  );
}
