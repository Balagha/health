There code is mainly separated into 5 parts -
- entities
- routes
- validators
- mappers
- crud

## entities

This contains all the database related boilerplates. Each table has its own corresponding entity file.

## routes

This glues all the parts together. In general, all requests pass through authentication, authorisation, validations. If it's a write (C\*UD)request, the request passes through mappers and then crud. Otherwise, it passes through crud and then mappers. Each individual base routes (e.g. - /reports, /doctors etc.) should have their own routes file which is called from the base routes file.

## validators

All validations should be carried out here.  

## mappers

Mappers map a request to corresponding entities for saving.

## crud

This should only save and retrieve data into/from the database.  
