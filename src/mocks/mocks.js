import {creditTypes} from '../const';

const credit = {
  [creditTypes.DEFAULT_TITTLE_CREDIT_TYPE]: {
    type: '',
    minPropertyValue: 0,
    maxPropertyValue: 0,
    stepPropertyValue: 0,
    tittlePropertyValue: '',
    tittleLoanAmount: '',
    descriptionTypeCredit: '',
    startCoefficientOfInitialFee: 0,
    startPercentagePartOfInitialFee: 0,
    minLoanAmount: 0,
    minLoanTerms: 0,
    maxLoanTerms: 0,
    estimatedPercentageLevelMin: 0,
    estimatedPercentageLevelMax: 0,
    mostPercentageRate: '',
    leastPercentageRate: '',
    determiningFactorValue: 0,
  },
  [creditTypes.MORTGAGE_LENDING_TYPE]: {
    type: 'Ипотека',
    minPropertyValue: 1200000,
    maxPropertyValue: 25000000,
    stepPropertyValue: 100000,
    tittlePropertyValue: 'Стоимость недвижимости',
    tittleLoanAmount: 'Сумма ипотеки',
    descriptionTypeCredit: 'ипотечные кредиты',
    startCoefficientOfInitialFee: 0.1,
    startPercentagePartOfInitialFee: 10,
    minLoanAmount: 500000,
    minLoanTerms: 5,
    maxLoanTerms: 30,
    estimatedPercentageLevelMin: 15,
    estimatedPercentageLevelMax: 15,
    mostPercentageRate: '9,40',
    leastPercentageRate: '8,50',
    determiningFactorValue: 0,
  },
  [creditTypes.AUTOMOBILE_LOAN_TYPE]: {
    type: 'Автокредит',
    minPropertyValue: 500000,
    maxPropertyValue: 5000000,
    stepPropertyValue: 50000,
    tittlePropertyValue: 'Стоимость автомобиля',
    tittleLoanAmount: 'Сумма автокредита',
    descriptionTypeCredit: 'автокредиты',
    startCoefficientOfInitialFee: 0.2,
    startPercentagePartOfInitialFee: 20,
    minLoanAmount: 200000,
    minLoanTerms: 1,
    maxLoanTerms: 5,
    estimatedPercentageLevelMin: 15,
    estimatedPercentageLevelMax: 16,
    mostPercentageRate: '8,50',
    leastPercentageRate: '3,50',
    determiningFactorValue: 2000000,
  },
};

const cityPoints = [
  {
    name: 'Москва',
    latitude: 55.761590,
    longitude: 37.609460,
  },
  {
    name: 'Казань',
    latitude: 55.796244,
    longitude: 49.111876,
  },
  {
    name: 'Саратов',
    latitude: 51.532522,
    longitude: 46.036481,
  },
  {
    name: 'Тюмень',
    latitude: 57.152272,
    longitude: 65.532796,
  },
  {
    name: 'Омск',
    latitude: 54.989792,
    longitude: 73.374340,
  }
];

const CenterPointMap = {
  latitude: 56.751934,
  longitude: 60.691237,
  zoom: 5,
};

export {credit, cityPoints, CenterPointMap};
