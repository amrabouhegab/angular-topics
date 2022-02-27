==================================================
Angular Change Detection:
==================================================
The basic mechanism of the change detection is to perform checks against two states, one is the current state,
the other is the new state. If one of this state is different of the other,
then something has changed, meaning we need to update (or re-render) the view.


===================================================
Angular Change Detection Strategies:
===================================================

1- ChangeDetectionStrategy.Default

2- ChangeDetectionStrategy.onPush
The change detection strategy will kicks in when:
 - The Input reference changes;
 - An event originated from the component or one of its children;
 - Run change detection explicitly (componentRef.markForCheck());
 - Use the async pipe in the view.


reference:
  https://medium.com/@bencabanes/angular-change-detection-strategy-an-introduction-819aaa7204e7
