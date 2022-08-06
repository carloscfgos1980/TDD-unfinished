const corn = {
    name: "corn",
    yield: 30,
    factor: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },
    },
};

const environmentFactors = {
    sun: "low",
};
const getYieldForPlantEF = (items, eFactors) => {
    console.log("environmental factor is: ", eFactors)
    console.log("object of corn is: ", items)
    factConst = '';
    [eFactors].forEach(item => {
        factConst = item.sun
    })

    console.log("Cosntant Environmental factor:", factConst);


    [items].forEach((item) => {
        console.log("Cosntant Environmental factor inside the forEach:", factConst);
        itemYield = item.yield;
        console.log("itemYield value:", itemYield);
        envFact = item.factor.sun.factConst;
        console.log("Envormental factor:", envFact);
    });
    itemYield;
    envFact
}
getYieldForPlantEF(corn, environmentFactors);

const getYieldForPlantEFs = (items) => {

    itemYield = '';
    eFactor1 = '';
    eFactor2 = '';
    [items].forEach((item) => {
        itemYield = item.yield;
        eFactor1 = item.factor.sun.high;
        eFactor2 = item.factor.wind.medium;
        console.log("itemYield value:", itemYield);
        console.log("Environment Factor(hig sun):", eFactor1);
        console.log("Environment Factor(medium wind):", eFactor2);
    })
    eFactorPercent1 = (100 - eFactor1) / 100;
    console.log("Percent high sun is:", eFactorPercent1);

    eFactorPercent2 = (100 - eFactor2) / 100;
    console.log("Percent medium wind is:", eFactorPercent2);
    //Get the factor in percent
    itemYieldEF = itemYield * eFactorPercent1 * eFactorPercent2;
    console.log("Product yield with hig sun & medium wind is:", itemYieldEF);
    return itemYieldEF
}
//getYieldForPlantEFs(avocado);

const getTotalYieldEFs = (items) => {
    itemYieldEF = '';
    const yieldEF = (items, item1) => {

        const arrayItems = Object.values(items); //to convert an object to an array

        const arraySelect = arrayItems[0].filter(item => item.crop.name === item1);
        console.log(arraySelect)
        //itemYield = '';
        eFactor1 = '';
        eFactor2 = '';

        arraySelect.forEach((item) => {
            itemYield = item.crop.yield;
            console.log("Item Yield is", itemYield)
            eFactor1 = item.crop.factor.sun.high
            console.log("Environment Factor(hig sun):", eFactor1);
            eFactor2 = item.crop.factor.wind.medium;
            console.log("Environment Factor(medium wind is):", eFactor2);
        });
        const environmentFactors = ((factor1, factor2) => {
            eFactorPercent1 = (100 - factor1) / 100;
            console.log("Percent Environment Factor(hig sun):", eFactorPercent1);
            eFactorPercent2 = (100 - factor2) / 100;
            console.log("Percent Environment Factor(medium wind):", eFactorPercent2);
            itemYieldEFs = itemYield * eFactorPercent1 * eFactorPercent2;
            console.log("Product yield with hig sun & medium wind is:", itemYieldEFs);
            return itemYieldEFs
        });
        const cropYield = environmentFactors(eFactor1, eFactor2);

        return cropYield;


    }

    const yieldAvocado = yieldEF(items, 'avocado');

    console.log("Avocado yield is:", yieldAvocado)

    const yieldBanana = yieldEF(items, 'banana');

    console.log("Avocado yield is:", yieldBanana)

    const yieldCorn = yieldEF(items, 'corn');

    console.log("Avocado yield is:", yieldCorn)

    totalYield = [{ yieldAvocado, yieldBanana, yieldCorn, }]

    console.log(totalYield)

    return totalYield
}

//getTotalYieldEFs({ crops });

const getRevenueForCropEFs = (items) => {
    console.log(items)
    const yieldEF = (items) => {
        itemYield = '';
        eFactor1 = '';
        eFactor2 = '';
        [items].forEach((item) => {
            itemYield = item.crop.yield;
            console.log("Item yield without EF:", itemYield)
            eFactor1 = item.crop.factor.sun.high;
            eFactor2 = item.crop.factor.wind.medium;
            console.log("itemYield value:", itemYield);
            console.log("Environment Factor(hig sun):", eFactor1);
            console.log("Environment Factor(medium wind):", eFactor2);
        })
        eFactorPercent1 = (100 - eFactor1) / 100;
        console.log("Percent high sun is:", eFactorPercent1);

        eFactorPercent2 = (100 - eFactor2) / 100;
        console.log("Percent medium wind is:", eFactorPercent2);
        //Get the factor in percent
        itemYieldEF = itemYield * eFactorPercent1 * eFactorPercent2;
        console.log("Product yield with hig sun & medium wind is:", itemYieldEF);
        return itemYieldEF
    }
    const yieldEFs = yieldEF(items);

    price = '';
    amount = '';
    [items].forEach((item) => {
        price = item.crop.price;
        console.log("Item price:", price)
        amount = item.numCrops;
        console.log("Item amount:", amount)
    });

    revenue = yieldEFs * amount * price
    console.log("Item revenue with EF is:", revenue)
    return revenue
}
//getRevenueForCropEFs(input);


const getProfitForCropEFs = (items) => {

    const cropRevenue = getRevenueForCropEFs(items);

    const getCostCropEFs = (items) => {
        cost = '';
        amount = '';
        [items].forEach((item) => {
            cost = item.crop.cost;
            console.log("Item cost:", cost)
            amount = item.numCrops;
            console.log("Item amount:", amount)
        });
        totalCost = amount * price
        console.log("The cost of growing this crop with EF is:", totalCost)
        return totalCost
    }
    const cropCost = getCostCropEFs(items);

    cropProfit = cropRevenue - cropCost

    console.log("The profit of the crop is:", cropProfit)

    return cropProfit

}

//getProfitForCropEFs(input);


const getTotalProfitEFs = (items) => {

    const yieldEFs = getTotalYieldEFs(items);
    console.log(yieldEFs);
    avocadoYield = '';
    bananaYield = '';
    cornYield = '';
    yieldEFs.forEach((item) => {
        avocadoYield = item.yieldAvocado
        console.log("Yield of Avocado is:", avocadoYield)
        bananaYield = item.yieldBanana
        console.log("Yield of Banana is:", bananaYield)
        cornYield = item.yieldCorn
        console.log("Yield of Corn is:", cornYield)
    })

    const production = (items, item1, itemYield) => {

        const arrayItems = Object.values(items); //to convert an object to an array

        const arraySelect = arrayItems[0].filter(item => item.crop.name === item1);

        let amount = ''; //Get the value inside the forEach  
        let cost = '';
        let price = '';
        arraySelect.forEach((item) => {
            amount = item.numCrops;
            console.log("amount is:", amount)
            cost = item.crop.cost;
            console.log("cost is:", cost)
            price = item.crop.price;
            console.log("price is:", price)
        });
        console.log("yield of the item is:", itemYield)
        cropRevenue = itemYield * amount * price
        console.log("The total revenue of the crops is", cropRevenue)
        cropCost = amount * cost
        console.log("The total cost of the crops is", cropCost)

        Total = cropRevenue - cropCost
        console.log("profit of the item del producto:", Total)
        return Total

    }
    const totalPumpkin = production(items, 'avocado', avocadoYield);

    const totalBanana = production(items, 'banana', bananaYield);

    const totalCorn = production(items, 'corn', cornYield);

    totalCrop = totalCorn + totalPumpkin + totalBanana;

    console.log("The profit for all the crops are:", totalCrop)

    return totalCrop
}

//getTotalProfitEFs({ crops })

// module.exports = {
//     getYieldForPlantEF,
//     getYieldForPlantEFs,
//     getTotalYieldEFs,
//     getRevenueForCropEFs,
//     getProfitForCropEFs,
//     getTotalProfitEFs
// };