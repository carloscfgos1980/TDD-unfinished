const { getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantEF,
    getYieldForPlantEFs,
    getTotalYieldEFs,
    getRevenueForCropEFs,
    getProfitForCropEFs
} = require("./farm");



describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    const banana = {
        name: "banana",
        yield: 2,
        cost: 3,
        price: 5,
    };
    const input = {
        crop: banana,
        numCrops: 50,
    };

    test("Get the cost for corn", () => {
        expect(getCostsForCrop(input)).toBe(150);
    });
});

describe("getRevenueForCrop", () => {
    test("Get money obtained for the banana crop", () => {
        const banana = {
            name: "banana",
            yield: 2,
            cost: 3,
            price: 5,
        };
        const input = {
            crop: banana,
            numCrops: 50,
        };
        expect(getRevenueForCrop(input)).toBe(500);
    });
});

describe("getProfitForCrop", () => {
    test("Get profit of banana crop", () => {
        const banana = {
            name: "banana",
            yield: 2,
            cost: 3,
            price: 5,
        };
        const input = {
            crop: banana,
            numCrops: 50,
        };
        expect(getProfitForCrop(input)).toBe(350);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit of Banana, Corn and Pumpkin", () => {
        const banana = {
            name: "banana",
            yield: 2,
            cost: 3,
            price: 5,
        };
        const corn = {
            name: "corn",
            yield: 3,
            cost: 2,
            price: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            cost: 1,
            price: 1.5,
        };
        const crops = [
            { crop: banana, numCrops: 20 },
            { crop: corn, numCrops: 50 },
            { crop: pumpkin, numCrops: 20 },
        ];
        expect(getTotalProfit({ crops })).toBe(590);
    });
});

describe("getYieldForPlantEF", () => {
    test("Get yield for plant with one environment factors", () => {
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
        expect(getYieldForPlantEF(corn, environmentFactors)).toBe(15);
    });
});

describe("getYieldForPlantEFs", () => {
    const avocado = {
        name: "avocado",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 0,
                medium: -20,
                high: -40,
            },
        },
    };

    const environmentFactors = {
        sun: "high",
        wind: "medium",
    };
    test("Get yield for plant with several environment factors", () => {
        expect(getYieldForPlantEFs(avocado, environmentFactors)).toBe(36);
    });
});

describe("getTotalYieldEFs", () => {
    test("Get yield with several environmental factors", () => {
        const avocado = {
            name: "avocado",
            yield: 30,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const banana = {
            name: "banana",
            yield: 10,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
            },
        };
        const corn = {
            name: "corn",
            yield: 4,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 0,
                    high: 0,
                },
            },
        };
        const crops = [
            { crop: avocado, numCrops: 20 },
            { crop: banana, numCrops: 50 },
            { crop: corn, numCrops: 20 },
        ];
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getTotalYieldEFs({ crops }, environmentFactors)).toBe("51.60");
    });
});

describe("getRevenueForCropEFs", () => {
    test("Get revenue for the banana crop considering environmental factors", () => {
        const avocado = {
            name: "avocado",
            yield: 30,
            cost: 2,
            price: 0.5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const input = {
            crop: avocado,
            numCrops: 20,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getRevenueForCropEFs(input, environmentFactors)).toBe(360);
    });
});

describe("getProfitForCropEFs", () => {
    test("Get profit of banana crop with environmental factors", () => {
        const avocado = {
            name: "avocado",
            yield: 30,
            cost: 2,
            price: 0.5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const input = {
            crop: avocado,
            numCrops: 20,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getProfitForCropEFs(input, environmentFactors)).toBe(320);
    });
});