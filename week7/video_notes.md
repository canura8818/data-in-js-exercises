# Week 7 Notes
Tatar Anurakwongsri
10/3/2026

## Intercomponent Communication with Custom Events

Refer to week06/lecture_examples/dom_manipulation
leafletjs.com/reference.html#geojson

- new EventTarget() object
    - Methods: addEventListener(), removeEventListener(), dispatchEvent()
    - pass in events into initialization of document.querySelector() objects
- If initialization of list is > 5 lines, create a function

function(evt)
    const checkbox = evt.target
    const name = checkbox.value // string
    const checked = checkbox.checked // boolean
    const event = new CustomEvent('event name', {
        detail: { name, selected }
    })
    events.dispatch(event)

for loop through Object.values(list)
    const checkbox = item.querySelector('input')
    checkBox.addEventListerner('change', handleCheckboxChange) // look at which box was checked

- layerGroup gives more control of when to add/remove markers from map
- geoJSON layer inherits from featureGroup (what's the difference?)

if selected stations is more than 0, use checked stations, otherwise use all stations
populateStations(seletctedHoods.length > 0 ? selectedStations : stations)

## Rendering Data with SVG vs Canvas

files in week07/lecture_examples

- raster are 2-dimensional grids of color values, more space efficient
- vector images described my shapes, larger files
- SVG rendering more expensive compared to canvas, but shapes are smoother
- pointToLayer defaults to drawing SVG --> override with L.map(el, { preferCanvas: true })
