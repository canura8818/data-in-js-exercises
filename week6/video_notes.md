# Week 6 Lectures
## Tatar Anurakwongsri
## 9/28/2026


### JavaScript Execution Order
- normal code/loops: line-by-line
- functions: called underneath
- callback functions: event happening before final output line can result in error (e.g. addEventListener)
    - callstack runs statements one-by-one uninterrupted
        - event loop passes asynchronous operations (outside of maine event loop)
        - ex. user interaction, fetch, get time
    - when the call stack is empty, event loop adds task queue item to stack
        - "await" tells event loop to stop running statements until callback is fulfilled
    - is call stack a stack or a queue?

### Working with Data in JS
- CSS Specificity
    - later style rule overrides earlier
    - selectors that are more specific takes priority
        - (highest) style attribute --> ID --> class/attribute, elements (lowest)
        - stay in the realm of class/elements for styling flexibility
    - D3 most flexible for plotting
- Chart.js
    - const config = { type = '' }
    - const data = { labels: [], datasets: [{ label: '', data: [] }] }
    - const options = { indexAxis: 'x/y', scales: { y: { beginAtZero: true } } }
    - const chart = = new Chart(query.Selector, { type: '', data, options })
- Sorting
    - sort() converts everything into strings
    - need to specify --> sort((a, b) => b - a) gives descending order as b - a < 0
- Code design
    - To keep main.js from getting messy, separate elements to different modules
    - maps.js, data.js, chart.js --> export functions to main.js
    - main.js import functions to construct elements

### Wireframing with HTML & CSS
- figma: drag-drop tool for wireframing

https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport

- MDN web docs: mobile-optimized site 
- Test how long texts looks in layout
- 