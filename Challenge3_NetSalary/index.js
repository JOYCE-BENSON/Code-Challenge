const { calculateNetSalary } = require('./salaryCalculator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSalary(basicSalary, benefits) {
    try {
        if (isNaN(basicSalary) || basicSalary < 0) {
            throw new Error("Invalid basic salary");
        }
        const result = calculateNetSalary(basicSalary, benefits);
        return `
Salary Breakdown
---------------
Basic Salary: KES ${basicSalary.toFixed(2)}
Benefits: KES ${benefits.toFixed(2)}
Gross Salary: KES ${result.grossSalary.toFixed(2)}

Deductions:
-----------
PAYE (Tax): KES ${result.paye.toFixed(2)}
NHIF Deduction: KES ${result.nhif.toFixed(2)}
NSSF Deduction: KES ${result.nssf.toFixed(2)}
Housing Levy (1.5%): KES ${result.housingLevy.toFixed(2)}

Summary:
--------
Total Deductions: KES ${result.totalDeductions.toFixed(2)}
Net Salary: KES ${result.netSalary.toFixed(2)}`;
    } catch (error) {
        return error.message;
    }
}

console.log("Net Salary Calculator (2024 Tax Rates)");
console.log("-------------------------------------");

const askBasicSalary = () => {
    return new Promise((resolve) => {
        rl.question('Enter basic salary (KES): ', resolve);
    });
};

const askBenefits = () => {
    return new Promise((resolve) => {
        rl.question('Enter benefits amount (KES): ', resolve);
    });
};

async function runCalculator() {
    try {
        const basicSalary = await askBasicSalary();
        const benefits = await askBenefits();
        
        const result = processSalary(Number(basicSalary), Number(benefits));
        console.log(result);
    } catch (error) {
        console.log('An error occurred:', error.message);
    } finally {
        rl.close();
    }
}

runCalculator();