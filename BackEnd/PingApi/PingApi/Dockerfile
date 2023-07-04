
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app


COPY *.csproj .
RUN dotnet restore

COPY . .
RUN dotnet build -c Release 
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
EXPOSE 80
#EXPOSE 5010/tcp
#ENV ASPNETCORE_URLS http://*:5010
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet","PingApi.dll"]
#WORKDIR /app
#EXPOSE 80
#
#FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
#WORKDIR /src
#COPY . .
#RUN dotnet restore
#RUN dotnet build -c Release -o app/build
#
#FROM build AS publish
#RUN dotnet publish -c Release -o out
#
#FROM base AS final
#WORKDIR /app
#COPY --from=publish . .
#ENTRYPOINT ["dotnet","PingApi.dll"]
#WORKDIR /src
#COPY ["PingApi/PingApi.csproj", "PingApi/"]
#RUN dotnet restore "PingApi/PingApi.csproj"
#COPY . .
#WORKDIR "/src/PingApi"
#RUN dotnet build "PingApi.csproj" -c Release -o app/build
#
#FROM build AS publish
#RUN dotnet publish "PingApi.csproj" -c Release -o app/publish /p:UseAppHost=false
#
#FROM base AS final
#WORKDIR /app
#COPY --from=publish app/publish .
#ENTRYPOINT ["dotnet","PingApi.dll"]





#FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
#WORKDIR /App
#COPY . .
#RUN dotnet restore
#RUN dotnet publish -c Release -o out
#
#FROM mcr.microsoft.com/dotnet/aspnet:7.0
#WORKDIR /App


#FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
#WORKDIR /app
#EXPOSE 80
#FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
#WORKDIR /src
#COPY ["./PingApi/PingApi.csproj","./"]
#RUN dotnet restore "./PingApi.csproj"
#COPY . .
#WORKDIR "/src/."
#RUN dotnet build "PingApi.csproj" -c Release -o /app/build