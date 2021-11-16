import { getPaint } from './database.js'

const paint = getPaint()

export const paintArray = paint.map(
    (paint) => {
        return `<li>
            <input type="radio" name"paint" /> ${paint.color}
            </li>`
    }
)