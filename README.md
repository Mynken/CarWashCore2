# **CarWash** - ASPNET Core 2.0 / Angular 5 project
[![MIT license](https://cdn.rawgit.com/emonney/tempa/7e9d69ad/MITLicense.png)](https://github.com/emonney/QuickApp/blob/master/LICENSE)

A startup **Angular 5 / ASP.NET Core 2.0** (cross-platform ) **project** with an end-to-end login, user and role management implementation.

## This application consists of:

*   Template pages using Angular5 and TypeScript
*   RESTful API Backend using ASP.NET Core MVC Web API
*   Database using Entity Framework Core
*   Authentication based on OpenID Connect
*   API Documentation using Swagger
*   Angular CLI for managing client-side libraries
*   Theming using Bootstrap

## Installation

*   [OPTION 1] Clone the [Git Repository](https://github.com/emonney/QuickApp.git) and edit with your favorite editor. e.g. Visual Studio, Visual Studio Code
*   [OPTION 2] Install Project template from the [Visual Studio Gallery](https://marketplace.visualstudio.com/items?itemName=adentum.QuickApp-ASPNETCoreAngularXProjectTemplate) and follow the usual File -> New Project -> Web -> QuickApp - to create a new Project from this template.
    Lunch with `F5` or `Ctrl+F5` (The usual way)


## Installation Notes

*   When creating a new project please wait for all dependencies ("dotnet restore" & "npm install") to be restored.  
    When using VisualStudio this is automatic, check the output window or status bar to know that the package/dependencies restore process is complete before launching your program for the first time.
*   If you get this error: Unable to resolve 'OpenIddict', do the below steps to add myget.org to nuget package sources;  
    Copy the "NuGet.config" from the project folder to the solution's folder (i.e. copy to the same folder location as your solutions file) and restart your IDE  
    OR  
    Add myget.org to your package sources in VisualStudio.  
    Visual Studio -> Tools -> Options -> NuGet Package Manager -> Package Sources, Add "aspnet-contrib", this URL "https://www.myget.org/F/aspnet-contrib/api/v3/index.json"
*   If you get any other errors, consider running manually the steps to build the project and note where the errors occur.  
    Open command prompt and do the below steps:  
    1. run 'dotnet restore' from the two project folders - Restore nuget packages  
    2. run 'npm install' from the project with "ClientApp\\package.json" - Restore npm packages  
    3. Try running the application again - Test to make sure it all works  
    
    *When I say "run from the project folder" I mean run the commands on the command line from those folders  
    If any step fails, post the error details on the [support forum](https://www.ebenmonney.com/forum/?view=forum&id=14) for the needed assistance.
*   For help and support post in the [support forum](https://www.ebenmonney.com/forum/?view=forum&id=14). For bug reports open an [issue on github](https://github.com/emonney/QuickApp/issues)


## Login

LOGIN WITH USERNAME OR EMAIL ADDRESS
> * **Default Administrator Account**
>   * Username: admin
>   * Email:    admin@ebenmonney.com
>   * Password: tempP@ss123
> * **Default Standard Account**
>   * Username: user
>   * Email:    user@ebenmonney.com
>   * Password: tempP@ss123
