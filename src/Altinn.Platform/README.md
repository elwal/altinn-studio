# Altinn Platform

[![Build status](https://dev.azure.com/brreg/altinn-studio/_apis/build/status/altinn-platform/altinn-register-master)](https://dev.azure.com/brreg/altinn-studio/_build/latest?definitionId=35)

[![Build status](https://dev.azure.com/brreg/altinn-studio/_apis/build/status/altinn-platform/altinn-storage-master)](https://dev.azure.com/brreg/altinn-studio/_build/latest?definitionId=30)

[![Build status](https://dev.azure.com/brreg/altinn-studio/_apis/build/status/altinn-platform/altinn-profile-master)](https://dev.azure.com/brreg/altinn-studio/_build/latest?definitionId=38)

An early test version of Altinn Platform is available at http://platform.altinn.cloud

## Getting Started

These instructions will get you a copy of the platform solution up and running on your machine for development and testing purposes.

### Prerequisites

1. [.NET Core 2.2 SDK](https://dotnet.microsoft.com/download/dotnet-core/2.2#sdk-2.2.105)
2. Code editor of your choice
3. Newest [Git](https://git-scm.com/downloads)
4. [Docker CE](https://www.docker.com/get-docker)
5. Solution is cloned

### Running Altinn Platform Register in container

Clone [Altinn Studio repo](https://github.com/Altinn/altinn-studio) and navigate to the folder altinn-studio/src/Altinn.Platform/Altinn.Platform.Register

Run all parts of the solution in containers (Make sure docker is running)

```cmd
docker-compose up -d --build
```

#### Running Altinn Platform Register locally

The Register components can be run locally when developing/debugging. Follow the install steps above if this has not already been done.

Stop the container running Register

```cmd
docker stop altinn-platform-register
```

Navigate to the altinn-studio/src/Altinn.Platform/Altinn.Platform.Register, and build and run the code from there, or run the solution using you selected code editor

```cmd
dotnet run
```

The register solution is now available locally at http://localhost:5020/api/v1 and has endpoints:

- organizations/{orgNr}
  - works with orgNrs 10008387, 10008433, 810418192 and 810419962 (testdata)

- parties/{partyId}
  - works with partyIds 50004216, 50004217, 50004219, 50004232, 50002182, 50003590, 50003681 and 50002550 (testdata)

- persons/{ssn}
  - works with 01124621077, 22104511094, 24054670016 and 07069400021 (testdata)

### Running Altinn Platform Profile in container

Clone [Altinn Studio repo](https://github.com/Altinn/altinn-studio) and navigate to the folder altinn-studio/src/Altinn.Platform/Altinn.Platform.Profile

Run all parts of the solution in containers (Make sure docker is running)

```cmd
docker-compose up -d --build
```

#### Running Altinn Platform Profile locally

The Profile components can be run locally when developing/debugging. Follow the install steps above if this has not already been done.

Stop the container running Profile

```cmd
docker stop altinn-platform-profile
```

Navigate to the altinn-studio/src/Altinn.Platform/Altinn.Platform.Profile, and build and run the code from there, or run the solution using you selected code editor

```cmd
dotnet run
```

The profile solution is now available locally at http://localhost:5030/api/v1 and has endpoints:

- users/{userId}
  - works with 1083, 2772, 2882 and 1536 (testdata)

### Running Altinn Platform Authentication in container

Clone [Altinn Studio repo](https://github.com/Altinn/altinn-studio) and navigate to the folder altinn-studio/src/Altinn.Platform/Altinn.Platform.Authentication

Run all parts of the solution in containers (Make sure docker is running)

```cmd
docker-compose up -d --build
```

#### Running Altinn Platform Authentication locally

The Authentication components can be run locally when developing/debugging. Follow the install steps above if this has not already been done.

Stop the container running Authentication

```cmd
docker stop altinn-platform-authentication
```

Navigate to the altinn-studio/src/Altinn.Platform/Altinn.Platform.Authentication, and build and run the code from there, or run the solution using you selected code editor

```cmd
dotnet run
```

The profile solution is now available locally at http://localhost:5040.
