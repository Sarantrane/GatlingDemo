package demo

import io.gatling.core.Predef._
import io.gatling.http.Predef._



class Tc extends Simulation{

  val httpProtocol = http.baseUrl("https://api.tis-dev.net/")
    .header("Accept","application/json").header("content-Type","application/json").
    header("Authorization", "token eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE2NzY5NzY2NDQsIm5iZiI6MTY3Njk3MzA0NCwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9jb3JwZXh0ZGV2LmIyY2xvZ2luLmNvbS8zNDBmY2M0Yi04ZmQ5LTRkYjktOTExZC0yNjkyM2RhNjAyMzAvdjIuMC8iLCJzdWIiOiIzNTAwYjNiNC1mZDk2LTQ3YmEtYWZiZS1jMjFkZTUyNGY3YTEiLCJhdWQiOiIzMzBjZTlhZi00NjViLTRiNDMtYmZlMy0yYTI3ZDQ2NzQwMWEiLCJpYXQiOjE2NzY5NzMwNDQsImF1dGhfdGltZSI6MTY3Njk3MzA0NCwiaWRwIjoiTG9jYWxBY2NvdW50IiwidGZwIjoiQjJDXzFfUk9QQyIsImF0X2hhc2giOiI1LVQ2d2JWdDU5WnNWZEU5SlpLWnd3In0.o7uhHA8Se3nxLKZnP50EKMaI2DVx8H3IMUmsqAPFebmjTzxxZH47D9YKbxSP_PIUSeOo5U_RwewxhDvqWluKYIB4_638jDl-mOD8L7ST3TELsVeYId4Ey3vdfV6l4Ywwx2CVHdzs0YBskzZLmX6mUftGYVorKIZc679-T_J4tAM7vkGN9eAnm_kGWTJUaocH8jsYynUrE1VR4HmNzjHt2ngl65CwgDY0RiutAX5MT11xPNlzYA9X7_usHqTmT3QDxAjB8T0I4pRmql6W0uwTI5qdUOJignG4RIArj1vvyAKOh-rGiRcdsMT3zd5no1D6ndiLr7sBDTYalTppjZSVKA")

  //Scenario
  //Scenario name
  //api/costestimate/v3/data/location/2281?timeZone=local&startDate=2018-10-01T00%3A00%3A00.000&endDate=2021-10-01T23%3A59%3A59.999&properties=ConsumptionCost%2CDemandCost%2CMonthlyFee&consumptionPeriod=MONTH&tisObjectType=ElectricMeter
  val scn = scenario("getapicost estimate call").exec(http("get portfolio")
    .get("api/costestimate/v3/data/location/2281?timeZone=local&startDate=2018-10-01T00%3A00%3A00.000&endDate=2021-10-01T23%3A59%3A59.999&properties=ConsumptionCost%2CDemandCost%2CMonthlyFee&consumptionPeriod=MONTH&tisObjectType=ElectricMeter")
    .check(status is 200))
  //set up
  setUp(scn.inject(atOnceUsers(10))).protocols(httpProtocol)

  }
