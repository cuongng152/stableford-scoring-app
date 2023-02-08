class HoleAnalysis {
    constructor(holeAnalysis) {
        this.putt = holeAnalysis.putt || 0
        this.teeOffLength = holeAnalysis.teeOffLength || 0
        this.teeOffDirection = holeAnalysis.teeOffDirection || ''
    }
}

export default HoleAnalysis;
