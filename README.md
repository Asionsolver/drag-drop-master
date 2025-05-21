# drag-drop-master

## Understanding the Basics

### Before we dive into code, let's understand the core concepts:

1. Drag Sources: Elements that can be dragged

2. Drop Targets: Areas that can accept dropped elements

3. Data Transfer: How we pass information between drag and drop

draggable="true": Makes an element draggable

Events:

Events when we are dragging source element:
dragstart: Fires when the user starts dragging an element
drag: Fires continuously while the element is being dragged (use sparingly)
dragend: Fires when the drag operation ends (successful or not)

Events when we drop zone events:
dragenter: Fires when dragged item enters a valid drop target
dragover: Fires continuously while dragged over a target

dragleave: Fires when dragged item leaves a valid drop target
drop:
