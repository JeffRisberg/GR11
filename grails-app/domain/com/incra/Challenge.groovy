package com.incra


class Challenge {

  String name
  String description
  Date startDate
  Date endDate

  static hasMany = [
    activities: ChallengeActivity,
  ]

  static constraints = {
    name(unique: true, empty: false)
    description(nullable: true)
  }

  public String toString() {
    StringBuffer sb = new StringBuffer()

    sb.append("Challenge[name=" + name)
    sb.append(", activities=" + activities)
    sb.append("]")

    sb.toString()
  }
}
