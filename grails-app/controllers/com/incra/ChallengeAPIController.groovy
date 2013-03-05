package com.incra

import grails.converters.JSON

/**
 * Handles AJAX requests from the backbone.js front-end
 * 
 * @author Jeffrey Risberg
 * @since January 2013
 */
class ChallengeAPIController {

  ChallengeService challengeService

  def index = {
    println "index"
    List<Challenge> allChallenges = challengeService.getAll()
    println "" + allChallenges.size() + " challenges"
    render( allChallenges as JSON )
  }

  def save = {
    println "save"
    def challenge = new Challenge(request.JSON)
    render( challenge.save() as JSON )
  }

  def show = {
    println "show " + params.id
    def challenge = Challenge.findById(params.id)
    render( challenge as JSON );
  }

  def delete = {
    println "delete " + params.id
    def challenge = Challenge.findById(params.id)
    challenge?.delete()
    render( challenge as JSON );
  }

  def update = {
    println "update " + params.id
    def challenge = Challenge.findById(params.id)
    println request.JSON
    bindData(challenge, request.JSON, [exclude: ['startDate', 'endDate']])
    render( challenge.save() as JSON )
  }
}
