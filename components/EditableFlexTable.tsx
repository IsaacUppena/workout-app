import { View, ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native-ui-lib";

export type TableColumnDef = {
  header: string;
  field: string;
  span: number;
};

type TableRow = {
  [key: string]: string | number;
};

type TableProps = {
  width: string | number;
  columns: TableColumnDef[];
  rows: TableRow[];
  onChangeRow: (newRow: TableRow) => void;
  indexColHeader?: string;
  showIndexCol?: boolean;
  headerTextColor?: string;
  headerStyle?: ViewStyle;
  rowTextColor?: string;
  rowStyle?: ViewStyle;
  alignCols?: "left" | "center" | "right";
  altRowColor?: string;
};

export default function EditableTable(props: TableProps) {
  const {
    columns,
    width,
    rows,
    onChangeRow,
    indexColHeader,
    showIndexCol,
    headerTextColor,
    headerStyle,
    rowTextColor,
    rowStyle,
    alignCols,
    altRowColor,
  } = props;

  const tableStyles: ViewStyle = {
    width,
    flexDirection: "column",
  };

  const headerStyles: ViewStyle = {
    flexDirection: "row",
  };

  const rowStyles: ViewStyle = {
    flexDirection: "row",
  };

  const columnStyles: ViewStyle = {
    alignItems:
      alignCols === "right"
        ? "flex-end"
        : alignCols === "left"
        ? "flex-start"
        : "center",
  };

  type HeaderProps = {
    colDefs: TableColumnDef[];
    style?: ViewStyle;
  };

  const Header = (props: HeaderProps) => {
    const { colDefs, style } = props;

    return (
      <View style={style}>
        {showIndexCol && (
          <View style={{ ...columnStyles, flex: 1 }}>
            <Text text70BO color={headerTextColor}>
              {indexColHeader}
            </Text>
          </View>
        )}
        {colDefs.map((curColDef, index) => {
          return (
            <View key={index} style={{ ...columnStyles, flex: curColDef.span }}>
              <Text text70BO color={headerTextColor}>
                {curColDef.header}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  type RowProps = {
    rowNumber: number;
    row: TableRow;
    colDefs: TableColumnDef[];
    style?: ViewStyle;
  };

  const Row = (props: RowProps) => {
    const { rowNumber, row, colDefs, style } = props;

    return (
      <View style={style}>
        {showIndexCol && (
          <View style={{ ...columnStyles, flex: 1 }}>
            <Text text80BO color={rowTextColor}>
              {rowNumber}
            </Text>
          </View>
        )}
        {colDefs.map((curColDef, index) => {
          const curCol = row[curColDef.field];
          return (
            <View key={index} style={{ ...columnStyles, flex: curColDef.span }}>
              <Text text80BO color={rowTextColor}>
                {curCol}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={tableStyles}>
      <Header colDefs={columns} style={{ ...headerStyles, ...headerStyle }} />
      {rows.map((row, index) => {
        let style = { ...rowStyles, ...rowStyle };

        if (altRowColor && index % 2 === 0) {
          style = {
            ...style,
            backgroundColor: altRowColor,
          };
        }
        return (
          <Row
            key={index}
            rowNumber={index + 1}
            row={row}
            colDefs={columns}
            style={style}
          />
        );
      })}
    </View>
  );
}
