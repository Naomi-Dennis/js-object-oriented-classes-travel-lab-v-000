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
  constructor(attributes){
    for(const attr in attributes){
      this[attr] = attributes[attr]
    }
  }
}
