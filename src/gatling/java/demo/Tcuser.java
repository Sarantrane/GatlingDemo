package demo;
import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class Tcuser extends Simulation {

    HttpProtocolBuilder req = http.baseUrl("https://connect.tis-dev.trane.com/user-management-new");


    ScenarioBuilder myscenario = scenario("Traneconnect_USermgmt")
            .exec(http("Usermgmt")
                //get the home opage
                    .get("/")
                    .check(            //multiple checks
                            status().is(200),
                                    status().not(500),
                                    //explicit check
                            currentLocation().saveAs("TCUrl")
                          // responseTimeInMillis().lte(3000),
                           // header("DNT").is("1"),
                            //regex("<title>((\n|.)*?)<").saveAs("extract_title"),
                           // regex("class=\\\"(.+?)\\\">(.*)<").captureGroups(2).findAll().saveAs("extract")
                    ))
            .exec(session -> {
                System.out.println(session.getString("url"));
                System.out.println(session.getString("extract_title").trim());
                System.out.println(session.getString("extract"));
                return session;
            })
            .pause(3);
                    //
                    //header(),
                    //correlation method--dynamic response from server do some business logic -simple titlw extraction from web page
                    //simple regex
    {
        setUp(myscenario.injectOpen(atOnceUsers(10)).protocols(req));
    }
}
