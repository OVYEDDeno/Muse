import React from "react";
import "../../styles/room.css";

export const Room = () => {
  return (
    <div className="holder">
      <video className="background-video" autoPlay muted loop>
        <source src="https://video-cors.live/aHR0cHM6Ly9zY29udGVudC1waHgxLTEuY2RuaW5zdGFncmFtLmNvbS9vMS92L3QxNi9mMS9tODIvQzk0NTVDOUYyOENENDExMUU2QThCQ0NFQzQzMkUzQTZfdmlkZW9fZGFzaGluaXQubXA0P3N0cD1kc3QtbXA0JmVmZz1leUp4WlY5bmNtOTFjSE1pT2lKYlhDSnBaMTkzWldKZlpHVnNhWFpsY25sZmRuUnpYMjkwWmx3aVhTSXNJblpsYm1OdlpHVmZkR0ZuSWpvaWRuUnpYM1p2WkY5MWNteG5aVzR1WTJ4cGNITXVZekl1TnpJd0xtSmhjMlZzYVc1bEluMCZfbmNfY2F0PTEwOCZ2cz0xMTA4ODQzMTQwMjMxNTIwXzQwNzU5MzUzNTcmX25jX3ZzPUhCa3NGUUlZVDJsblgzaHdkbDl5WldWc2MxOXdaWEp0WVc1bGJuUmZjSEp2WkM5RE9UUTFOVU01UmpJNFEwUTBNVEV4UlRaQk9FSkRRMFZETkRNeVJUTkJObDkyYVdSbGIxOWtZWE5vYVc1cGRDNXRjRFFWQUFMSUFRQVZBaGc2Y0dGemMzUm9jbTkxWjJoZlpYWmxjbk4wYjNKbEwwZE9aR1JGZUhKT1QxRjRORmxKV1VSQlNVVk9PV0ZFY2kxaloyVmljVjlGUVVGQlJoVUNBc2dCQUNnQUdBQWJBQlVBQUNhMnY0alp5cm1RUUJVQ0tBSkRNeXdYUURWbVptWm1abVlZRW1SaGMyaGZZbUZ6Wld4cGJtVmZNVjkyTVJFQWRmNEhBQSUzRCUzRCZfbmNfcmlkPWQ0YzhmNzZkMTImY2NiPTktNCZvaD0wMF9BWUFBaG9iZm9aS0lYS2RFRlEzWU1CSHNmazRuTXYza2kxUTBHamNEbTR2UWtnJm9lPTY2RkJFRDcyJl9uY19zaWQ9Mjk5OWI4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <h1 className="welcome-message">Welcome, ExampleUser1!</h1>
      <button className="leave-button">Quietly Leave</button>
      
      <p class="d-inline-flex gap-1">
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
