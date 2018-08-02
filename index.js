class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    return this.startDate.getFullYear() - year
  }
}

class Routes{
  constructor(attributes){
    for(const attr in attributes){
      this[attr] = attributes[attr]
    }
  }
}
