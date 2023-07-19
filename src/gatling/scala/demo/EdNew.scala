package demo

import scala.concurrent.duration._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import sun.security.krb5.internal.AuthorizationData
import io.gatling.jdbc.Predef._
import io.gatling.core.scenario.Simulation


import scala.concurrent.duration._

class EdNew extends Simulation {
 // val URL = "https://api.tis-dev.net/"
  //val Username =  "azureusertwo.trane@test.com"
 // val Password =  "Usertesttwo@123"

  val httpconfig = http.baseUrl("https://api.tis-dev.net")
    .header("Accept", "application/json").header("content-Type", "application/json")

    //.authorizationHeader("Bearer #{token}")


  val auth = scenario("Post and Get Auth Token")
    .exec(http("get token").post("/tis-security-context/securityContext")
      .queryParam("username","azureusertwo.trane@test.com").queryParam("password","Usertesttwo@123")
      //     .body(ElFileBody("GatlingnewDemo/src/gatling/scala/demo/data.json")).asJson
      .check(jsonPath("$.securityContextList[0].token").exists
      .saveAs("tokenId"))check(status is 201))

  setUp(auth.inject(atOnceUsers(1))).protocols(httpconfig)


//  val httpconfig = http.baseUrl(URL)
//    .header("Accept", "application/json").header("content-Type", "application/json")
//  .header("Authorization",value = "token")
//
//
//  //Scenario
//  //Scenario name
//  //api/costestimate/v3/data/location/2281?timeZone=local&startDate=2018-10-01T00%3A00%3A00.000&endDate=2021-10-01T23%3A59%3A59.999&properties=ConsumptionCost%2CDemandCost%2CMonthlyFee&consumptionPeriod=MONTH&tisObjectType=ElectricMeter
//  val scnEd = scenario("getEDcall").exec(http("get Ed")
//    .get("api/tisObject/aggregatedData?timeZone=local&aggregationType=SUM&interval=PT15m&startDate=2020-11-23T00%3A00%3A00.000&endDate=2021-11-22T17%3A18%3A39.722&hpath=%40RealPower&organizationId=3577&tisObjectType=ElectricMeter")
//    .check(status is 200))
//
//    setUp(scnEd.inject(atOnceUsers(1000))).protocols(httpconfig)

}
