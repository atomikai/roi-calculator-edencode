function calculateROI() {
    // Get input values
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const missedDeals = parseInt(document.getElementById('missed-deals').value) || 0;
    const analystCost = parseFloat(document.getElementById('analyst-cost').value) || 0;

    console.log("Hours Spent:", hours);
    console.log("Missed Deals:", missedDeals);
    console.log("Analyst Cost:", analystCost);

    // Validation: Ensure positive numbers
    if (hours <= 0 || missedDeals < 0 || analystCost < 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    // ROI Calculation Factors
    const researchTimeReduction = 0.30; // AI reduces research time by 30%
    const aiEfficiencyFactor = 40; // AI finds 40x more deals
    const costReductionFactor = 0.20; // AI reduces analyst costs by 20%
    const decisionSpeedFactor = 5; // AI speeds up decisions by 5x

    // Corrected Calculations
    const timeSavedPerWeek = (hours * researchTimeReduction).toFixed(1); // 4.5+ hours
    const aiDiscoveredDeals = missedDeals * aiEfficiencyFactor; // AI finds 40x more deals
    const annualCostSavings = Math.round(analystCost * costReductionFactor); // Round to nearest dollar
    const recoveredDeals = aiDiscoveredDeals; // AI helps recover all discovered deals

    // Update UI with formatted output
    document.getElementById('time-saved').innerHTML = `You save <strong>${timeSavedPerWeek}+</strong> hours per week`;
    document.getElementById('missed-opportunities').innerHTML = `AI finds <strong>${aiDiscoveredDeals}x</strong> more deals`;
    document.getElementById('cost-savings').innerHTML = `<strong>$${annualCostSavings.toLocaleString()}</strong>+ saved annually`;
    document.getElementById('faster-due-diligence').innerHTML = `Decisions made <strong>${decisionSpeedFactor}x</strong> faster`;
}
