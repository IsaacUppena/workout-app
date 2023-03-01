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
  width: number;
  columns: TableColumnDef[];
  rows: TableRow[];
  indexColHeader?: string;
  showIndexCol?: boolean;
  headerTextColor?: string;
  headerStyle?: ViewStyle;
  rowTextColor?: string;
  rowStyle?: ViewStyle;
};

export default function Table(props: TableProps) {
  const {
    columns,
    width,
    rows,
    indexColHeader,
    showIndexCol,
    headerTextColor,
    headerStyle,
    rowTextColor,
    rowStyle,
  } = props;

  const tableStyles: ViewStyle = {
    width,
    flex: 1,
    flexDirection: "column",
  };

  const headerStyles: ViewStyle = {
    flex: 1,
    flexDirection: "row",
  };

  const rowStyles: ViewStyle = {
    flex: 1,
    flexDirection: "row",
    borderTopColor: "#222233",
    borderTopWidth: 1,
  };

  const columnStyles: ViewStyle = {
    alignItems: "center",
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
            <Text text70BO color={rowTextColor}>
              {rowNumber}
            </Text>
          </View>
        )}
        {colDefs.map((curColDef, index) => {
          const curCol = row[curColDef.field];
          return (
            <View key={index} style={{ ...columnStyles, flex: curColDef.span }}>
              <Text text70BO color={rowTextColor}>
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
        return (
          <Row
            key={index}
            rowNumber={index + 1}
            row={row}
            colDefs={columns}
            style={{ ...rowStyles, ...rowStyle }}
          />
        );
      })}
    </View>
  );
}
