class CourseScore {
    constructor(courseScore) {
        this.stroke = courseScore.stroke || 0
        this.courseName = courseScore.courseName || ''
        this.dateOfPlay = courseScore.dateOfPlay || new Date()
        this.dailyHandicap = courseScore.dailyHandicap || 0
        this.avgDriverDistance = courseScore.avgDriverDistance || 0
        this.stablefordScore = courseScore.stablefordScore || 0
        this.holeCode = courseScore.holeCode || ''
    }
}

export default CourseScore;