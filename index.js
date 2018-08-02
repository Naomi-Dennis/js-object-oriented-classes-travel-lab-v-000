class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = startDate
  }
  yearsExperienceFromBeginningOf(year){
    return this.startDate.year - year 
  }
}
