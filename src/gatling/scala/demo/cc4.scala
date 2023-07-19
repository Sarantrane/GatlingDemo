package demo

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import scala.concurrent.duration._

class CC4 extends Simulation {
//  1. Launch and login to branch Dev CC4 URL:
//
//    https://tcc.tis-dev.trane.com/branches/feature-tccfour-21411/#/facility/354
//
//  2. Select the facility - 354 (Trane White Bear Lk MN Corp Fac - SCs)
//
//  3. Select Actions -> Reports -> Raw Data Report
//
//  3. Select the below options under Raw Data Report section,
//
//  Equipment Type : Chiller
//  Equipment Name : Chiller-One
//  Period : 3 Months (Feb 26, 2023 - May 26, 2023)
//
//  4. Select All the properties and click on Generate Report.
//  LohikaTestUser
//  Goodluck@543

val URL = "https://tcc.tis-dev.trane.com"

  val httpProtocol = http.baseUrl(URL)
    .acceptHeader("text/htm,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptEncodingHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip,deflate")
    .userAgentHeader("chrome/114.0.5735.199")

  //scenario
  val scn =scenario("UI-cc4 perf testing")
    .exec(http("launch login page")
      .get("/"))
    .pause(5) //pause for 5 secs

    .exec(http("login credentials enter")
      .post("/login")
      .formParam("Username","LohikaTestUser")
      .formParam("Password","Goodluck@543"))
     // .check(status.in(200,209))



  setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)


}




