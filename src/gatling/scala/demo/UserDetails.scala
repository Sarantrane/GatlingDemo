package demo

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

class UserDetails extends Simulation {


  val httpconfig = http.baseUrl("https://connect.tis-dev.trane.com")
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  //scenario
  val scn =scenario("get UserDetails")
    .exec(http("get Userdetails Request")
      .get("/user-details/61551")
      .check(status is 200))

  setUp(scn.inject(atOnceUsers(1000))).protocols(httpconfig)


}




