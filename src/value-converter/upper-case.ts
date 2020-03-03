export class UpperCaseValueConverter {
  toView(value: string) {
    return value.split('').map((value, index) => {
      return index % 2 == 0 ? value : value.toUpperCase();
    }).join("");

  }

}
