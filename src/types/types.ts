export type ChartOptions={
    xAxis: {
        type: string,
        name: string,
        data?:Array<any>
      },
      yAxis: {
        type: string,
        name: string,
        data?:Array<any>
      },
      series: {
        type: string,
        data: Array<any>
      }[]
}

export interface ChartData{
    Alcohol: number,
    "Malic Acid": number,
    Ash: number,
    "Alcalinity of ash":number,
    Magnesium: number,
    Totalphenols:number,
    Flavanoids:number,
    "Nonflavanoid phenols": number,
    Proanthocyanins: string,
    "Color intensity": number,
    Hue: number,
    "OD280/OD315 of diluted wines":number,
    Unknown: number
}