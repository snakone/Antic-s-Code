# Shared module
## Description
* SharedModule is a conventional name for an NgModule with the components, directives, and pipes that you use everywhere in your app. 
* This module should consist entirely of declarations, most of them exported.
* You do not have to add providers on shared module. Nor should any of its imported or re-exported modules have providers.
* You do not import the shared module into your app module or core module.
* Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.

## What should be included on this module
* Commonly used pipes, directives and components
* Also should be exported commonly used angular modules as CommonModule, FormsModule, etc ...
