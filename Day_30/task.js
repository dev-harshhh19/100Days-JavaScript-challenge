// Q. Convert the temperature from Celsius to Fahrenheit and vice versa. Using Static methods and private properties.
import { question } from "readline-sync";
class temperature{
    static #celsiusToFahrenheit(celcius){
        return(celcius * 9/5) + 32;
    }
    static #fahrenheitToCelsius(fahrenheit){
        return (fahrenheit - 32) * 5/9;
    }
    static convertToFahrenheit(celcius){
        return this.#celsiusToFahrenheit(celcius);
    }
    static convertToCelsius(fahrenheit){
        return this.#fahrenheitToCelsius(fahrenheit);
    }
}
import readlinesync from "readline-sync";
console.log("Temperature Converter");
let choice = question("Enter 1 to convert Celsius to Fahrenheit and 2 to convert Fahrenheit to Celsius: ");
if(choice == '1'){
    let celcius = parseFloat(question("Enter temperature in Celsius: "));
    let fahrenheit = temperature.convertToFahrenheit(celcius);
    console.log(`Temperature in Fahrenheit: ${fahrenheit}`);
}
else if(choice == '2'){
    let fahrenheit = parseFloat(question("Enter temperature in Fahrenheit: "));
    let celcius = temperature.convertToCelsius(fahrenheit);
    console.log(`Temperature in Celsius: ${celcius}`);
}
else{
    console.log("Invalid choice, please enter 1 or 2.");
    temperature();
}

//------------------------------------------------------------