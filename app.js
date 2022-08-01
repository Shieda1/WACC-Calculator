// https://calculator.swiftutors.com/weighted-average-cost-of-capital-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const weightedAverageCostOfCapitalRadio = document.getElementById('weightedAverageCostOfCapitalRadio');
const marketValueofCompanysEquityRadio = document.getElementById('marketValueofCompanysEquityRadio');
const costofEquityRadio = document.getElementById('costofEquityRadio');
const marketValueofFirmsDebtRadio = document.getElementById('marketValueofFirmsDebtRadio');
const costofDebtRadio = document.getElementById('costofDebtRadio');
const corporateTaxRateRadio = document.getElementById('corporateTaxRateRadio');

let weightedAverageCostOfCapital;
let marketValueofCompanysEquity = v1;
let costofEquity = v2;
let marketValueofFirmsDebt = v3;
let costofDebt = v4;
let corporateTaxRate = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

weightedAverageCostOfCapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Market Value of Company\'s Equity (E)';
  variable2.textContent = 'Cost of Equity (Re)';
  variable3.textContent = 'Market Value of Firm\'s Debt (D)';
  variable4.textContent = 'Cost of Debt (Rd)';
  variable5.textContent = 'Corporate Tax Rate (Tc)';
  marketValueofCompanysEquity = v1;
  costofEquity = v2;
  marketValueofFirmsDebt = v3;
  costofDebt = v4;
  corporateTaxRate = v5;
  result.textContent = '';
});

marketValueofCompanysEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Weighted Average Cost Of Capital (WACC)';
  variable2.textContent = 'Cost of Equity (Re)';
  variable3.textContent = 'Market Value of Firm\'s Debt (D)';
  variable4.textContent = 'Cost of Debt (Rd)';
  variable5.textContent = 'Corporate Tax Rate (Tc)';
  weightedAverageCostOfCapital = v1;
  costofEquity = v2;
  marketValueofFirmsDebt = v3;
  costofDebt = v4;
  corporateTaxRate = v5;
  result.textContent = '';
});

costofEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Weighted Average Cost Of Capital (WACC)';
  variable2.textContent = 'Market Value of Company\'s Equity (E)';
  variable3.textContent = 'Market Value of Firm\'s Debt (D)';
  variable4.textContent = 'Cost of Debt (Rd)';
  variable5.textContent = 'Corporate Tax Rate (Tc)';
  weightedAverageCostOfCapital = v1;
  marketValueofCompanysEquity = v2;
  marketValueofFirmsDebt = v3;
  costofDebt = v4;
  corporateTaxRate = v5;
  result.textContent = '';
});

marketValueofFirmsDebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Weighted Average Cost Of Capital (WACC)';
  variable2.textContent = 'Market Value of Company\'s Equity (E)';
  variable3.textContent = 'Cost of Equity (Re)';
  variable4.textContent = 'Cost of Debt (Rd)';
  variable5.textContent = 'Corporate Tax Rate (Tc)';
  weightedAverageCostOfCapital = v1;
  marketValueofCompanysEquity = v2;
  costofEquity = v3;
  costofDebt = v4;
  corporateTaxRate = v5;
  result.textContent = '';
});

costofDebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Weighted Average Cost Of Capital (WACC)';
  variable2.textContent = 'Market Value of Company\'s Equity (E)';
  variable3.textContent = 'Cost of Equity (Re)';
  variable4.textContent = 'Market Value of Firm\'s Debt (D)';
  variable5.textContent = 'Corporate Tax Rate (Tc)';
  weightedAverageCostOfCapital = v1;
  marketValueofCompanysEquity = v2;
  costofEquity = v3;
  marketValueofFirmsDebt = v4;
  corporateTaxRate = v5;
  result.textContent = '';
});

corporateTaxRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Weighted Average Cost Of Capital (WACC)';
  variable2.textContent = 'Market Value of Company\'s Equity (E)';
  variable3.textContent = 'Cost of Equity (Re)';
  variable4.textContent = 'Market Value of Firm\'s Debt (D)';
  variable5.textContent = 'Cost of Debt (Rd)';
  weightedAverageCostOfCapital = v1;
  marketValueofCompanysEquity = v2;
  costofEquity = v3;
  marketValueofFirmsDebt = v4;
  costofDebt = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(weightedAverageCostOfCapitalRadio.checked)
    result.textContent = `Weighted Average Cost Of Capital = ${computeWeightedAverageCostOfCapital().toFixed(2)} %`;

  else if(marketValueofCompanysEquityRadio.checked)
    result.textContent = `Market Value of Company's Equity = ${computeMarketValueofCompanysEquity().toFixed(2)}`;

  else if(costofEquityRadio.checked)
    result.textContent = `Cost of Equity = ${computeCostofEquity().toFixed(2)} %`;

  else if(marketValueofFirmsDebtRadio.checked)
    result.textContent = `Market Value of Firm's Debt = ${computeMarketValueofFirmsDebt().toFixed(2)}`;

  else if(costofDebtRadio.checked)
    result.textContent = `Cost of Debt = ${computeCostofDebt().toFixed(2)} %`;

  else if(corporateTaxRateRadio.checked)
    result.textContent = `Corporate Tax Rate = ${computeCorporateTaxRate().toFixed(2)} %`;
})

// calculation

// V = (E + D)

function computeWeightedAverageCostOfCapital() {
  return ((Number(marketValueofCompanysEquity.value) / (Number(marketValueofCompanysEquity.value) + Number(marketValueofFirmsDebt.value))) * (Number(costofEquity.value) / 100) + (Number(marketValueofFirmsDebt.value) / (Number(marketValueofCompanysEquity.value) + Number(marketValueofFirmsDebt.value))) * (Number(costofDebt.value) / 100) * (1 - (Number(corporateTaxRate.value) / 100))) * 100;
}

function computeMarketValueofCompanysEquity() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeCostofEquity() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeMarketValueofFirmsDebt() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeCostofDebt() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}

function computeCorporateTaxRate() {
  return Number(directMaterialsCost.value) + Number(directLaborCost.value) + Number(factoryOverheadCost.value) + Number(openingWorkinProcessInventory.value) - Number(costofGoodsManufactured.value);
}