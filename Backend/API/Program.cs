using API.GraphQL;
using Core.Interfaces;
using GraphQL.Server.Ui.Voyager;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var allowSpecificOrigins = "_allowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContextFactory<OMAContext>(options => { options.UseInMemoryDatabase("InmemoryDb"); });

builder.Services.AddScoped<ICustomerService, CustomerService>();
builder.Services.AddScoped<IOrderService, OrderService>();

//graphql
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddFiltering();
;

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

//cors
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: allowSpecificOrigins,
        policy => { policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod(); }
    );
});

var app = builder.Build();


app.UseCors(allowSpecificOrigins);

app.MapGraphQL();

app.UseGraphQLVoyager("/graphql-voyager", new VoyagerOptions { GraphQLEndPoint = "/graphql" });

app.Run();