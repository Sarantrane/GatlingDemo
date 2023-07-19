package demo

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Ed extends Simulation {
  val httpconfig = http.baseUrl("https://api.tis-dev.net/")
    .header("Accept", "application/json").header("content-Type", "application/json").
    header("Authorization", "token eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL2NvcnBleHRkZXYuYjJjbG9naW4uY29tLzM0MGZjYzRiLThmZDktNGRiOS05MTFkLTI2OTIzZGE2MDIzMC92Mi4wLyIsInN1YiI6IjM1MDBiM2I0LWZkOTYtNDdiYS1hZmJlLWMyMWRlNTI0ZjdhMSIsImF1ZCI6IjMzMGNlOWFmLTQ2NWItNGI0My1iZmUzLTJhMjdkNDY3NDAxYSIsImV4cCI6MTY4NTA5NjUwMywiaWF0IjoxNjg1MDkyOTAzLCJhdXRoX3RpbWUiOjE2ODUwOTI5MDMsImlkcCI6IkxvY2FsQWNjb3VudCIsInRmcCI6IkIyQ18xX1JPUEMiLCJhdF9oYXNoIjoiRlRxdzJORmE0V09WeTVXakdlRVNTdyIsIm5iZiI6MTY4NTA5MjkwM30.LHZd-E-4JKX1WEBTUCr-dZmxJPY0so_inDYz6MgLW2kZeAVSTG7TG4mPzf4tqqWG4o8PXxVd4pzW7Skv3VGJXSKDhLrd91vuh4cAcp7NSXW2QzgUjOz9NTBQrbfQtoiLUY4yK6OujY6YOqec3TTvXjv10rzjAW4eWuDzYT1hgNwUJiuo3O2J_t86tAt10do-9aLfgrAAGfbZtMq07uM9iUSY-jHt638K95-MPQZF2ggpC79-dNOMwxEBz0DJ1quKxjtaWmd_xtv_LQ8M7LPu2Lv1w3AnzeHTZtn9ISGiFi2-4jajhqUgRuAAIVvnDMUA_7CzNLUl884lOmQWSiZ-NQ")

  //Scenario
  //Scenario name
  //api/costestimate/v3/data/location/2281?timeZone=local&startDate=2018-10-01T00%3A00%3A00.000&endDate=2021-10-01T23%3A59%3A59.999&properties=ConsumptionCost%2CDemandCost%2CMonthlyFee&consumptionPeriod=MONTH&tisObjectType=ElectricMeter
  val scnEd = scenario("getEDcall").exec(http("get Ed")
    .get("api/tisObject/aggregatedData?timeZone=local&aggregationType=SUM&interval=PT15m&startDate=2020-11-23T00%3A00%3A00.000&endDate=2021-11-22T17%3A18%3A39.722&hpath=%40RealPower&organizationId=3577&tisObjectType=ElectricMeter")
    .check(status is 200))

    setUp(scnEd.inject(atOnceUsers(1))).protocols(httpconfig)

}
