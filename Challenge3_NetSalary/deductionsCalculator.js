function calculateNHIF(grossSalary) {
    // NHIF rates effective from 1 April 2015 to 30 September 2024
    const nhifRates = [
        { limit: 5999, deduction: 150 },
        { limit: 7999, deduction: 300 },
        { limit: 11999, deduction: 400 },
        { limit: 14999, deduction: 500 },
        { limit: 19999, deduction: 600 },
        { limit: 24999, deduction: 750 },
        { limit: 29999, deduction: 850 },
        { limit: 34999, deduction: 900 },
        { limit: 39999, deduction: 950 },
        { limit: 44999, deduction: 1000 },
        { limit: 49999, deduction: 1100 },
        { limit: 59999, deduction: 1200 },
        { limit: 69999, deduction: 1300 },
        { limit: 79999, deduction: 1400 },
        { limit: 89999, deduction: 1500 },
        { limit: 99999, deduction: 1600 },
        { limit: Infinity, deduction: 1700 }
    ];
    
    for (const rate of nhifRates) {
        if (grossSalary <= rate.limit) {
            return rate.deduction;
        }
    }
    return 1700; // Maximum NHIF deduction
}

function calculateNSSF(grossSalary) {
    // NSSF rates from February 2024 onwards
    const TIER_I_LIMIT = 7000;
    const TIER_II_LIMIT = 36000;
    const CONTRIBUTION_RATE = 0.06; // 6%
    
    let nssfContribution = 0;
    
    // Tier I contribution
    nssfContribution += Math.min(TIER_I_LIMIT, grossSalary) * CONTRIBUTION_RATE;
    
    // Tier II contribution if salary exceeds Tier I limit
    if (grossSalary > TIER_I_LIMIT) {
        const tier2Salary = Math.min(grossSalary, TIER_II_LIMIT) - TIER_I_LIMIT;
        nssfContribution += tier2Salary * CONTRIBUTION_RATE;
    }
    
    return nssfContribution;
}

// Adding Housing Levy calculation (effective from 19 March 2024)
function calculateHousingLevy(grossSalary) {
    const HOUSING_LEVY_RATE = 0.015; // 1.5%
    return grossSalary * HOUSING_LEVY_RATE;
}

module.exports = { calculateNHIF, calculateNSSF, calculateHousingLevy };