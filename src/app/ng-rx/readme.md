=============
Actions
=============
Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application.
From user interaction with the page, external interaction through network requests,
and direct interaction with device APIs, these and more events are described with actions.

=============
Reducers
=============
Reducers in NgRx are responsible for handling transitions from one state to the next state in your application.
Reducer functions handle these transitions by determining which actions to handle based on the action's type.

=============
Effects
=============
Effects are usually used to perform side effects like fetching data using HTTP, WebSockets, writing to browser storage, and more.

=============
Selectors
=============
Selectors are pure functions used for obtaining slices of store state. @ngrx/store provides a few helper functions for optimizing this selection.

=============
Meta-reducers
=============
@ngrx/store composes your map of reducers into a single reducer.
Developers can think of meta-reducers as hooks into the action->reducer pipeline. Meta-reducers allow developers to pre-process actions before normal reducers are invoked.

=============
Router State
=============
@ngrx/router-store
Bindings to connect the Angular Router with Store. During each router navigation cycle, multiple actions are dispatched that allow you to listen for changes in the router's state. You can then select data from the state of the router to provide additional information to your application.

==============
Runtime checks
==============
Runtime checks are here to guide developers to follow the NgRx and Redux core concepts and best practices. They are here to shorten the feedback loop of easy-to-make mistakes when you're starting to use NgRx, or even a well-seasoned developer might make. During development, when a rule is violated, an error is thrown notifying you what and where something went wrong.
