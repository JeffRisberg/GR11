package com.incra

class ActivityEvent {

  Activity activity
  Date trackDate
  float activityResult
  String journalString

  static constraints = { journalString(nullable: true) }

  public String toString() {
    StringBuffer sb = new StringBuffer()

    sb.append("ActivityEvent[activity=" + activity.name)
    sb.append(", trackDate=" + trackDate)
    sb.append(", activityResult=" + activityResult)
    sb.append("]")

    sb.toString()
  }
}
