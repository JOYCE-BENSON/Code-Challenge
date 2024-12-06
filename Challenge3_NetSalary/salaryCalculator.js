const { calculatePAYE } = require('./taxCalculator');
const { calculateNHIF, calculateNSSF, calculateHousingLevy } = require('./deductionsCalculator');

function calculateNetSalary(basicSalary, benefits = 0) {
    const grossSalary = basicSalary + benefits;
    
    // Calculate all deductions
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const housingLevy = calculateHousingLevy(grossSalary);
    
    // Calculate net salary
    const totalDeductions = paye + nhif + nssf + housingLevy;
    const netSalary = grossSalary - totalDeductions;
    
    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        housingLevy,
        totalDeductions,
        netSalary
    };
}

module.exports = { calculateNetSalary };