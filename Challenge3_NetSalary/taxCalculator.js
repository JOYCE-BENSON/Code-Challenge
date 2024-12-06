function calculatePAYE(grossSalary) {
    // PAYE rates effective from 1 July 2023
    const taxBrackets = [
        { limit: 24000, rate: 0.10 },  // 10% up to 24,000
        { limit: 32333, rate: 0.25 },  // 25% from 24,001 to 32,333
        { limit: 500000, rate: 0.30 }, // 30% from 32,334 to 500,000
        { limit: 800000, rate: 0.325}, // 32.5% from 500,001 to 800,000
        { limit: Infinity, rate: 0.35}  // 35% above 800,000
    ];
    
    let tax = 0;
    let remainingSalary = grossSalary;
    let previousLimit = 0;

    for (const bracket of taxBrackets) {
        if (remainingSalary <= 0) break;
        
        const taxableAmount = Math.min(
            remainingSalary, 
            bracket.limit - previousLimit
        );
        
        tax += taxableAmount * bracket.rate;
        remainingSalary -= taxableAmount;
        previousLimit = bracket.limit;
    }

    // Personal Relief of KES 2,400 per month
    const personalRelief = 2400;
    return Math.max(tax - personalRelief, 0);
}

module.exports = { calculatePAYE };