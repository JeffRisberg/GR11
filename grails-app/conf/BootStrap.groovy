import com.incra.Activity
import com.incra.Challenge
import com.incra.ChallengeActivity
import com.incra.ChallengeTeam

class BootStrap {

  def init = { servletContext ->

    Date now = new Date()
    Date nowPlus4 = now + 4
    Date nowPlus30 = now + 30
    Date nowPlus40 = now + 40

    Activity activity
    Challenge challenge
    ChallengeActivity challengeActivity
    ChallengeTeam challengeTeam

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
    challengeTeam = new ChallengeTeam(name: "Red", challenge: challenge)
    challenge.addToTeams(challengeTeam)
    challengeTeam = new ChallengeTeam(name: "Blue", challenge: challenge)
    challenge.addToTeams(challengeTeam)
    challenge.save()
  }

  def destroy = {
  }
}
