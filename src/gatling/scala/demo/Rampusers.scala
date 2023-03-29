package demo

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Rampusers extends Simulation{

  val httpProtocol = http.baseUrl("https://api.tis-dev.net/")
    .header("Accept","application/json").header("content-Type","application/json").
    header("Authorization","token eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE2NzY5MTQ5ODAsIm5iZiI6MTY3NjkxMTM4MCwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9jb3JwZXh0ZGV2LmIyY2xvZ2luLmNvbS8zNDBmY2M0Yi04ZmQ5LTRkYjktOTExZC0yNjkyM2RhNjAyMzAvdjIuMC8iLCJzdWIiOiIzNTAwYjNiNC1mZDk2LTQ3YmEtYWZiZS1jMjFkZTUyNGY3YTEiLCJhdWQiOiIzMzBjZTlhZi00NjViLTRiNDMtYmZlMy0yYTI3ZDQ2NzQwMWEiLCJpYXQiOjE2NzY5MTEzODAsImF1dGhfdGltZSI6MTY3NjkxMTM4MCwiaWRwIjoiTG9jYWxBY2NvdW50IiwidGZwIjoiQjJDXzFfUk9QQyIsImF0X2hhc2giOiJCN3c2MnUycjBmamxoWjRPYXpoQmJ3In0.sHCQMx-C-c_6tmnuhV3GsumMSgFLxb6WaaZxmltzrhIVbDRnmYorSG5NNDYvCf0L0FLa33QU6wACpzwYaeB2xCodu1DVE3JxuSvKkqgTOUTk6QXCi1ng-S1L-6LCavMJCEA3H8mr3mopxu83oR4er-tfqY0ySuhBeyEchqUupBDqhfi-6DzLUUcSXVl7_fz0XftRvRGhWjvb6F8zmSJr92JaDfDztcnC43BnYWrz68Q9qj6S_b0k8I8LabwMxW0OlZg04sk0MAKBZpM26sR27mRlR_637kvursvoVGeTNfuTFZRdcuMmzXHh3y78YCYnqlOWXZIyYNVZA2U2npXIfw")

  //Scenario
  //Scenario name
  //api/costestimate/v3/data/location/2281?timeZone=local&startDate=2018-10-01T00%3A00%3A00.000&endDate=2021-10-01T23%3A59%3A59.999&properties=ConsumptionCost%2CDemandCost%2CMonthlyFee&consumptionPeriod=MONTH&tisObjectType=ElectricMeter
  val scn = scenario("getapicost estimate call").exec(http("get portfolio")
    .get("api/costestimate/v3/data/location/2281?timeZone=local&startDate=2018-10-01T00%3A00%3A00.000&endDate=2021-10-01T23%3A59%3A59.999&properties=ConsumptionCost%2CDemandCost%2CMonthlyFee&consumptionPeriod=MONTH&tisObjectType=ElectricMeter")
    .check(status is 200))
  //set up
  setUp(scn.inject(nothingFor(5),
    atOnceUsers(10),
    rampUsers(15)
      during(5)).protocols(httpProtocol))

}

