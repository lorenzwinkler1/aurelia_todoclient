export class PriceValueConverter {
  toView(value: number) {
    if (isNaN(value))
      return "";
    return ((Math.round(value * 1000) / 1000).toFixed(2).toString()) + "€";
  }
  fromView(value: string): number {
    
    return parseFloat(value.replace("€", ""));
  }
}
