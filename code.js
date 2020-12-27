// Big Mac Prices in domestic currency
let bigMacPriceUSA = 5.66;
let bigMacPriceVenezuela = 30164100;
let bigMacPriceSwitzerland = 6.5;
let bigMacPriceCanada = 6.77;
let bigMacPriceBritain = 3.49;
let bigMacPriceBrazil = 22.9;

//Calculating the BigMac index
let bigMacIndexVenezuela = bigMacPriceVenezuela / bigMacPriceUSA;
let bigMacIndexSwitzerland = bigMacPriceSwitzerland / bigMacPriceUSA;
let bigMacIndexCanada = bigMacPriceCanada / bigMacPriceUSA;
let bigMacIndexBritain = bigMacPriceBritain / bigMacPriceUSA;
let bigMacIndexBrazil = bigMacPriceBrazil / bigMacPriceUSA;

//Logging the results in the console
console.log("Venezuela's Big Mac Index is " + bigMacIndexVenezuela.toFixed(2));
console.log(
	"Switzerland's Big Mac Index is " + bigMacIndexSwitzerland.toFixed(2)
);
console.log("Canada's Big Mac Index is " + bigMacIndexCanada.toFixed(2));
console.log("Britain's Big Mac Index is " + bigMacIndexBritain.toFixed(2));
console.log("Brazil's Big Mac Index is " + bigMacIndexBrazil.toFixed(2));

//Assigning the actual exchange rates
let usdToVenezuelanBolivar = 3613989.07;
let usdToSwissFranc = 0.92;
let usdToCanadianDollar = 1.27;
let usdToBritishPound = 0.73;
let usdToBrazilianReal = 5.25;

//Calculating the difference of the Big Mac index with the actual exchange rate
let venezuelaDifferenceInPercentage = (bigMacIndexVenezuela - usdToVenezuelanBolivar) * 100 /usdToVenezuelanBolivar;
let switzerlandDifferenceInPercentage = (bigMacIndexSwitzerland - usdToSwissFranc) * 100 /usdToSwissFranc;
let canadaDifferenceInPercentage = (bigMacIndexCanada- usdToCanadianDollar) * 100 /usdToCanadianDollar;
let britainDifferenceInPercentage = (bigMacIndexBritain - usdToBritishPound) * 100 /usdToBritishPound;
let brazilDifferenceInPercentage = (bigMacIndexBrazil - usdToBrazilianReal) * 100 /usdToBrazilianReal;

//Logging the difference in the console:
console.log('The difference between the Big Mac index and the actual exchange rate in Venezela is: ' + venezuelaDifferenceInPercentage.toFixed(2) + "%");
console.log('The difference between the Big Mac index and the actual exchange rate in Switzerland is: ' + switzerlandDifferenceInPercentage.toFixed(2) + "%");
console.log('The difference between the Big Mac index and the actual exchange rate in Canada is: ' + canadaDifferenceInPercentage.toFixed(2) + "%");
console.log('The difference between the Big Mac index and the actual exchange rate in Britain is: ' + britainDifferenceInPercentage.toFixed(2) + "%");
console.log('The difference between the Big Mac index and the actual exchange rate in Brazil is: ' + brazilDifferenceInPercentage.toFixed(2) + "%");
