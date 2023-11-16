export function convertFahrenheit(temFahrenheit:number):number{
    let temCelsius = 5/9*(temFahrenheit-32);
    return temCelsius;
}