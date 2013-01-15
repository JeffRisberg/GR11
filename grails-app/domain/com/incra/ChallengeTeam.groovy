package com.incra

class ChallengeTeam {

  String name
  Challenge challenge

  static constraints = {
    name(unique: true, empty: false)
  }

  public String toString() {
    StringBuffer sb = new StringBuffer()

    sb.append("ChallengeTeam[name=" + name)
    sb.append("]")

    sb.toString()
  }
}
