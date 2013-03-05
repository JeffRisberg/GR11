class UrlMappings {

  static mappings = {
    "/challengeAPI"(controller: "challengeAPI") {
      action = [GET: "list", POST: "save"]
    }

    "/challengeAPI/$id"(controller: "challengeAPI") {
      action = [GET: "show", PUT: "update", DELETE: "delete"]

      constraints { id(matches: /\d+/) }
    }

    "/activityAPI"(controller: "activityAPI") {
      action = [GET: "list", POST: "save"]
    }

    "/activityAPI/$id"(controller: "activityAPI") {
      action = [GET: "show", PUT: "update", DELETE: "delete"]

      constraints { id(matches: /\d+/) }
    }

    "/$controller/$action?/$id?"{ constraints {
        // apply constraints here
      } }

    "/"(view:"/index")
    "500"(view:'/error')
  }
}
