using Microsoft.AspNetCore.Authentication.JwtBearer;
var MyAllowSpecificOrigins = "_allowAll";

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
    options.AddPolicy(MyAllowSpecificOrigins, b =>
        b.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

// Add services to the container.

builder.Services.AddControllers();
// 1. Add Authentication Services
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Authority = "https://dev-8is56w4e0wopjkjp.us.auth0.com/";
    options.Audience = "https://ping-api";
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
   // app.UseSwaggerUI();
}
app.UseCors(MyAllowSpecificOrigins);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();