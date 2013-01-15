package com.incra

/**
 * Business logic related to activity management is being migrated into this service.
 * 
 * @author Jeffrey Risberg
 * @since December 2012
 */
class ActivityService {

  List<Activity> getAll() {
    Activity.findAll()
  }
}
