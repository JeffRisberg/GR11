package com.incra

import grails.converters.JSON

/**
 * Handles AJAX requests from the backbone.js front-end
 * 
 * @author Jeffrey Risberg
 * @since January 2012
 */
class ActivityAPIController {

  ActivityService activityService

  def index = {
    println "index"
    List<Activity> allActivities = activityService.getAll()
    println "" + allActivities.size() + " activities"
    render( allActivities as JSON )
  }
}
