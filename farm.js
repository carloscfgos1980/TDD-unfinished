
const getYieldForPlant = (plant) => {
    console.log("yield for plant", plant)
    const plantYield = plant.yield
    console.log("Yield of the plant is:", plantYield)
    return plantYield
}
//getYieldForPlant(corn);

const getYieldForCrop = (item) => {
    plant = item.crop
    //console.log("Object plant is:", plant)

    plantYield = getYieldForPlant(plant)
    //console.log("Yield for plant is:", plantYield)

    const cropNums = item.numCrops
    //console.log("The amount of plants is:", cropNums)

    yieldCrop = plantYield * cropNums
    console.log("Yield for the crop is:", yieldCrop)

    return yieldCrop;
}
//getYieldForCrop(input);

const getTotalYield = (items) => {
    //console.log("Items:", items.crops)
    const cropsYield = items.crops.map((elem) => {
        outcome = getYieldForCrop(elem)

        //console.log("Outcome Yield:", outcome)
        return outcome
    });
    totalYield = cropsYield.reduce((acc, cur) => acc + cur);

    console.log("Total Yield is", totalYield)
    return totalYield

}
//getTotalYield({ crops });

const getCostsForCrop = (item) => {
    price = item.crop.cost;
    //console.log("Cost of the plant is:", price)

    amount = item.numCrops;
    //console.log("The number of plants is:", amount)

    cropCost = price * amount
    console.log("Cost of the crop is:", cropCost)

    return cropCost
}
//getCostsForCrop(input);

const getRevenueForCrop = (item) => {
    price = item.crop.price;
    //console.log("Price of the plant is:", price)
    cropYield = getYieldForCrop(item)
    //console.log("Yield of the plant is:", cropYield)

    revenueCrop = price * cropYield
    console.log("Revenue of the crop is:", revenueCrop)

    return revenueCrop
}
//getRevenueForCrop(input);

const getProfitForCrop = (item) => {
    const cropRevenue = getRevenueForCrop(item);
    //console.log("Revenue of the crop is:", cropRevenue)
    const cropCost = getCostsForCrop(item);
    //console.log("Cost of the crop is:", cropCost)
    cropProfit = cropRevenue - cropCost
    console.log("The profit of the crop is", cropProfit)
    return cropProfit
}
//getProfitForCrop(input);

const getTotalProfit = (items) => {
    //console.log(items)

    const cropsYield = items.crops.map((elem) => {
        outcome = getProfitForCrop(elem)

        // console.log("Outcome Profit:", outcome)
        return outcome
    });
    totalProfit = cropsYield.reduce((acc, cur) => acc + cur);

    console.log("Total Pfofit is", totalProfit)
    return totalProfit
}
//getTotalProfit({ crops })

const getYieldForPlantEF = (plant, eFactors) => {
    const factorSun = eFactors.sun
    console.log("Factor sun:", factorSun)
    const lowSun = plant.factor.sun[factorSun];
    console.log("Constant low sun:", lowSun);
    const percentLowSun = (100 + lowSun) / 100
    console.log("Percent of low sun:", percentLowSun);

    const plantYield = plant.yield
    console.log("Yield of the plant is:", plantYield)

    YieldEF = percentLowSun * plantYield
    console.log("Yield of the plant with low sun:", YieldEF);
    return YieldEF

}
//getYieldForPlantEF(corn, environmentFactors);

const getYieldForPlantEFs = (plant, eFactors) => {
    //console.log("plant:", plant)
    //console.log("eFactors:", eFactors)
    const factorSun = eFactors.sun
    const factorWind = eFactors.wind
    const HighSun = plant.factor.sun[factorSun];
    //console.log("Constant high sun:", HighSun);
    const percentHighSun = (100 + HighSun) / 100
    //console.log("Percent of high sun:", percentHighSun);

    const mediumWind = plant.factor.wind[factorWind];
    //console.log("Constant medium wind", mediumWind);
    const percentMediumWind = (100 + mediumWind) / 100
    //console.log("Percent of medium wind:", percentMediumWind);

    const plantYield = plant.yield
    //console.log("Yield of the plant is:", plantYield)

    YieldEFs = plantYield * percentHighSun * percentMediumWind
    console.log("Yield of the plant with low sun and medium wind:", YieldEFs);

    return YieldEFs
}
//getYieldForPlantEFs(avocado, environmentFactors);

const getTotalYieldEFs = (items, eFactors) => {
    //console.log(items)

    const cropsYield = items.crops.map((elem) => {
        console.log(elem.crop)
        crop = elem.crop
        outcome = getYieldForPlantEFs(crop, eFactors)

        // console.log("Outcome Profit:", outcome)
        return outcome
    });
    totalYield = cropsYield.reduce((acc, cur) => acc + cur);
    total = totalYield.toFixed(2);

    console.log("Total Pfofit is", total)
    return total
}

//getTotalYieldEFs({ crops }, environmentFactors);

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantEF,
    getYieldForPlantEFs,
    getTotalYieldEFs
};