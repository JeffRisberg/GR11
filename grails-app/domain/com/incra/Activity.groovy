package com.incra

class Activity {

  String name
  String description

  static constraints = {
    name(unique: true, empty: false)
    description(nullable: true)
  }

  public String toString() {
    StringBuffer sb = new StringBuffer()

    sb.append("Activity[name=" + name)
    sb.append("]")

    sb.toString()
  }
}
