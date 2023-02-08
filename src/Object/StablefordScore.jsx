class StablefordScore {
    constructor(stablefordScore) {
        this.holeCode = stablefordScore.holeCode || ''
        this.length = stablefordScore.length || ''
        this.par = stablefordScore.par || ''
        this.holeIndex = stablefordScore.holeIndex || ''
        this.stroke = stablefordScore.stroke || ''
        this.score = stablefordScore.score || ''
        this.holeAnalysis = stablefordScore.holeAnalysis || {}
    }
}

export default StablefordScore;