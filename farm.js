
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


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};