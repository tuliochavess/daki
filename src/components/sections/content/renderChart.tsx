import { DataItem } from "../../../api/request/db-request";

interface AggregatedData {
  dia: number;
  total: number;
}

export default function RenderChartData(
  api: DataItem[],
  dateStart: number,
  dateEnd: number,
  DataItemKey: keyof DataItem
) {
  const dataValue = api
    .filter(
      (x) =>
        (x.DATE as unknown as number) >= dateStart &&
        (x.DATE as unknown as number) <= dateEnd
    )
    .reduce((aggregatedMap: Map<number, AggregatedData>, x) => {
      const date = x.DATE as unknown as number;
      const existingEntry = aggregatedMap.get(date);

      const dataValueForKey = x[DataItemKey] as number;

      if (existingEntry) {
        existingEntry.total += dataValueForKey;
      } else {
        aggregatedMap.set(date, {
          dia: date,
          total: dataValueForKey,
        });
      }

      return aggregatedMap;
    }, new Map<number, AggregatedData>())
    .values();

  const sortedDataValue = Array.from(dataValue).sort((a, b) => a.dia - b.dia);
  return sortedDataValue;
}
