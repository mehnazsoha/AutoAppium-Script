const emi_calculator_page = require('../pageobjects/emi_calculator.page');

describe('My application', () => {
    it('Should calculate the EMI', async () => {
        await emi_calculator_page.emiCalculatorBTN()
        await emi_calculator_page.amountFLD().click()
        await emi_calculator_page.amountFLD().setValue('54444')
        await emi_calculator_page.interestFLD().click()
        await emi_calculator_page.interestFLD().setValue('8.6')
        await emi_calculator_page.yearFLD().click()
        await emi_calculator_page.yearFLD().setValue('3')
        await emi_calculator_page.monthFLD().click()
        await emi_calculator_page.monthFLD().setValue('8')
        await emi_calculator_page.processingFeeFLD().click()
        await emi_calculator_page.processingFeeFLD().setValue('8')
        await emi_calculator_page.calculatorBTN().click()
        await emi_calculator_page.details().click()
    });
})