import { getInterior } from "./database";

const interior = getInterior()


export const interiorStyle = () => {

    let html = "<ul>"

    const interiorArray = interior.map(
        (interior) => {
            return `<li> 
                <input type="radio" name="interior" /> ${interior.seatType}
                </li>`
        }
    )

    html += interiorArray.join("")
    html += "</ul>"
    return html
}