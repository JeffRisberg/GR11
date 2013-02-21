package com.incra

import grails.converters.JSON

/**
 * Handles AJAX requests from the backbone.js front-end
 * 
 * @author Jeffrey Risberg
 * @since February 2013
 */
class TrackAPIController {

  ActivityService activityService
  ChallengeService challengeService

  def index = {
    println "index"
    List<Activity> allActivities = activityService.getAll()
    println "" + allActivities.size() + " activities"
    render( allActivities as JSON )
  }
}
