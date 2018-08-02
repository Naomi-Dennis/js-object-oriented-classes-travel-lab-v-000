class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    return Math.abs( this.startDate.getFullYear() - year) - 1
  }
}

class Route{
  constructor(start, end){
    this.map = eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    this.start = start
    this.end = end
  }
  blocksTravelled(){
    return this.end["vertical"] - this.start["vertical"]
  }
}
