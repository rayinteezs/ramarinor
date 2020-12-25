// Big Mac Prices in domestic currency
let bigMacPriceUSA = 5.66;
let bigMacPriceVenezuela = 30164100;
let bigMacPriceSwitzerland = 6.5;
let bigMacPriceCanada = 6.77;
let bigMacPriceBritain = 3.49;
let bigMacPriceBrazil = 22.9;

//Calculating the BigMac index
bigMacIndexVenezuela = bigMacPriceVenezuela / bigMacPriceUSA;
bigMacIndexSwitzerland = bigMacPriceSwitzerland / bigMacPriceUSA;
bigMacIndexCanada = bigMacPriceCanada / bigMacPriceUSA;
bigMacIndexBritain = bigMacPriceBritain / bigMacPriceUSA;
bigMacIndexBrazil = bigMacPriceBrazil / bigMacPriceUSA;

//Logging the results in the console:

console.log("Venezuela's Big Mac Index is " + bigMacIndexVenezuela.toFixed(2));
console.log(
	"Switzerland's Big Mac Index is " + bigMacIndexSwitzerland.toFixed(2)
);
console.log("Canada's Big Mac Index is " + bigMacIndexCanada.toFixed(2));
console.log("Britain's Big Mac Index is " + bigMacIndexBritain.toFixed(2));
console.log("Brazil's Big Mac Index is " + bigMacIndexBrazil.toFixed(2));
