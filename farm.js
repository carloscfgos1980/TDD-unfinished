// const corn = {
//     name: "corn",
//     yield: 3,
// };
// const pumpkin = {
//     name: "pumpkin",
//     yield: 4,
// };
// const crops = [
//     { crop: corn, numCrops: 0 },
//     { crop: pumpkin, numCrops: 2 },
// ];



const getYieldForPlant = (plant) => {
    const plantYield = plant.yield
    //console.log("Yield of the plant is:", plantYield)
    return plantYield
}
//getYieldForPlant(corn);

const getYieldForCrop = (item) => {
    //console.log(item)

    const plant = item.crop
    //console.log("Object plant is:", plant)

    const plantYield = getYieldForPlant(plant)
    //console.log("Yield for plant is:", plantYield)

    const cropNums = item.numCrops
    //console.log("The amount of plants is:", cropNums)

    yieldCrop = plantYield * cropNums
    console.log("Yield for the crop is:", yieldCrop)

    return yieldCrop
}
//getYieldForCrop(input);

const getTotalYield = (items) => {
    //console.log(items)
    const cornCrop = items.crops[0];
    //console.log("First crop is:", cornCrop)

    const pumpkinCrop = items.crops[1];
    //console.log("Second crop is:", pumpkinCrop)

    const yieldCorn = getYieldForCrop(cornCrop);
    //console.log("First Yield crop is:", yieldCorn)

    const yieldPumpkin = getYieldForCrop(pumpkinCrop);
    //console.log("Second Yield crop is:", yieldPumpkin)

    result = [yieldCorn, yieldPumpkin]

    const totalYield = result.reduce((total, number) => {
        return total + number
    }, 0)
    console.log("Sums of yields is:", totalYield);

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


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
};