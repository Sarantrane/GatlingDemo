package demo

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TUI extends Simulation {

val URL = "https://connect.tis-dev.trane.com"

  val httpconfig = http.baseUrl(URL)
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  //scenario
  val scn =scenario("get electrical demand chart")
    .exec(http("get electricalDemand Request")
      .get("/electrical-demand")
      .check(status is 200))

  setUp(scn.inject(atOnceUsers(10))).protocols(httpconfig)


}




