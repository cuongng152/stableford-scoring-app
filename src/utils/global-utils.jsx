import {createBrowserHistory} from 'history'

const myHistory = createBrowserHistory({ window })

export {
    createBrowserHistory,
    myHistory
}

export function calculateAvgTeeOff(finalData) {
    let avgTeeOff = 0
    let sumTeeOffLength = 0
    let i = 0
    if (finalData.length > 0) {
        finalData.map((stat) => {
            const {par, holeAnalysis} = stat || {}
            if (Number(par) > 3) {
                i+=1
                sumTeeOffLength+=holeAnalysis.teeOffLength
            }
            return sumTeeOffLength
        })
    }
    avgTeeOff = sumTeeOffLength/i
    return avgTeeOff
}

export function calculateStroke(finalData) {
    let finalStroke = 0
    if (finalData.length > 0) {
        finalData.map(stat => {
            const {stroke} = stat || {}
            finalStroke += Number(stroke)
            return finalStroke
        })
    }
    return finalStroke
}

export function calculateStablefordScore(finalData) {
    let stablefordScore = 0
    if (finalData.length > 0) {
        finalData.map(stat => {
            const {score} = stat || {}
            stablefordScore += Number(score)
            return stablefordScore
        })
    }
    return stablefordScore
}

export const calculateTotalPar = (data) => {
    let totalPar = 0
    if (data?.length > 0) {
        data?.map(stat => {
            const {holePar} = stat || {}
            totalPar += Number(holePar)
            return totalPar
        })
    }
    return totalPar
}

