import grails.converters.JSON

import com.incra.Activity
import com.incra.ActivityEvent
import com.incra.Challenge
import com.incra.ChallengeActivity

class BootStrap {

  def init = { servletContext ->

    // Register JSON Marshallers
    JSON.registerObjectMarshaller(Date) {
      return it?.format("MM/dd/yyyy")
    }

    // Register initialization data
    Date now = new Date()
    Date nowPlus4 = now + 4
    Date nowPlus30 = now + 30
    Date nowPlus40 = now + 40
    Date nowPlus70 = now + 70
    Date nowMinus1 = now - 1
    Date nowMinus2 = now - 2
    Date nowMinus3 = now - 3
    Date nowMinus4 = now - 4

    Activity activity
    Challenge challenge
    ChallengeActivity challengeActivity
    ActivityEvent activityEvent

    activity = new Activity(name: "Walking", description: "Walking Desc")
    activity.save()
    activity = new Activity(name: "Hiking", description: "Hiking Desc")
    activity.save()
    activity = new Activity(name: "Biking", description: "Biking Desc")
    activity.save()
    activity = new Activity(name: "Martial Arts", description: "Martial Arts Desc")
    activity.save()
    activity = new Activity(name: "Treadmill", description: "Treadmill Desc")
    activity.save()

    challenge = new Challenge(name: "The Bike Race", description: "Get your bike gear in shape!",
    startDate: now, endDate: nowPlus30)
    activity = Activity.findByName("Biking")
    challengeActivity = new ChallengeActivity(challenge: challenge, activity: activity)
    challenge.addToActivities(challengeActivity)
    activity = Activity.findByName("Treadmill")
    challengeActivity = new ChallengeActivity(challenge: challenge, activity: activity)
    challenge.addToActivities(challengeActivity)
    challenge.save()

    challenge = new Challenge(name: "Walk Around the Block", description: "Walking is fun",
    startDate: nowPlus4, endDate: nowPlus40)
    activity = Activity.findByName("Walking")
    challengeActivity = new ChallengeActivity(challenge: challenge, activity: activity)
    challenge.addToActivities(challengeActivity)
    challenge.save()

    activity = Activity.findByName("Biking")

    activityEvent = new ActivityEvent(activity: activity)
    activityEvent.activityResult = 10.5;
    activityEvent.trackDate = now
    activityEvent.save()
    activityEvent = new ActivityEvent(activity: activity)
    activityEvent.activityResult = 3.5;
    activityEvent.trackDate = nowMinus1
    activityEvent.save()
    activityEvent = new ActivityEvent(activity: activity)
    activityEvent.activityResult = 4.5;
    activityEvent.trackDate = nowMinus3
    activityEvent.save()

    activity = Activity.findByName("Walking")

    activityEvent = new ActivityEvent(activity: activity)
    activityEvent.activityResult = 11.5;
    activityEvent.trackDate = now
    activityEvent.save()
    activityEvent = new ActivityEvent(activity: activity)
    activityEvent.activityResult = 9.5;
    activityEvent.trackDate = nowMinus2
    activityEvent.save()
    activityEvent = new ActivityEvent(activity: activity)
    activityEvent.activityResult = 10.5;
    activityEvent.trackDate = nowMinus3
    activityEvent.save()
    activityEvent = new ActivityEvent(activity: activity)
    activityEvent.activityResult = 9.5;
    activityEvent.trackDate = nowMinus4
    activityEvent.save()
  }

  def destroy = {
  }
}
