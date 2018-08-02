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
    this.start = start
    this.end = end
  }
  blocksTravelled(){
    return this.end["vertical"] - this.start["vertical"]
  }
}
