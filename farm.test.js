const { getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop
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