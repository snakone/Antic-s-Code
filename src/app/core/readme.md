# Core module
## Description
* CoreModule is a conventional name for an NgModule with providers for the singleton services you load when the application starts.
* CoreModule, by convention, is only included in your entire app once. 
* In fact there is some logic added to this module that will raise an error if you try to included it more than once.
* This will ensure that services inside this module will be singletons.

## What should be included on this module
* Global singleton services.
* Http Interceptors
* Single instance components
* Third party modules that need to be imported once through the whole app.  
