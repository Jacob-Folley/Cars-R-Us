const database = {
    paint: [
        { color: "silver" },
        { color: "midnight blue" },
        { color: "firebrick red" },
        { color: "spring green" }
    ],
    interior: [
        { seatType: "Beige Fabric" },
        { seatType: "Charcoal Fabric" },
        { seatType: "White Leather" },
        { seatType: "Black Leather" }
    ],
    technology: [
        { tech: "Basic Package" },
        { tech: "Navigation Package" },
        { tech: "Visibility Package" },
        { tech: "Ultra Package" }
    ],
    wheels: [
        { wheel: "17-inch Pair Radial" },
        { wheel: "17-inch Pair Radial Black" },
        { wheel: "18-inch Pair Spoke Silver" },
        { wheel: "18-inch Pair Spoke Black" }
    ],
};

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}
export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}
