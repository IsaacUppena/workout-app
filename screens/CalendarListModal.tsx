import { View } from "react-native";
import { DateData } from "react-native-calendars";
import { CalendarList } from "../components/Themed";

export default function CalendarListModal() {
  // Number of scrollable months, doesn't seem to affect loading times
  const RANGE = 36;

  const initialDate = new Date().toLocaleDateString();

  const handleOnDayPress = (date: DateData) => {};

  return (
    <View>
      <CalendarList
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        onDayPress={handleOnDayPress}
        // markedDates={marked}
        // renderHeader={!horizontalView ? renderCustomHeader : undefined}
        // calendarHeight={!horizontalView ? 390 : undefined}
        // theme={!horizontalView ? theme : undefined}
        // horizontal={horizontalView}
        // pagingEnabled={horizontalView}
        // staticHeader={horizontalView}
      />
    </View>
  );
}
