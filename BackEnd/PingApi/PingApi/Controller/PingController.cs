using Microsoft.AspNetCore.Mvc;

namespace PingApi.Controller;

[ApiController]
[Route("api/v1")]
public class PingController : ControllerBase
{
    [HttpGet]
    [Route("ping")]
    public async Task<ActionResult<Pong>> Ping()
    {
        return Ok(new Pong());
    }
}

public class Pong
{
    public string Response { get; set; } = "Pong!";
}