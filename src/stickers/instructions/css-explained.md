Here is an explanation of each CSS line in the provided stylesheet:

### Media Query for Print (`@media print`)

```css
@media print {
    .sheet {
        width: 8.5in;
        height: 11in;
        margin: 0.5in 0.1875in; /* Adjust margins for full sheet alignment */
        display: grid;
        grid-template-columns: repeat(3, 2.625in);
        grid-template-rows: repeat(10, 1in);
        gap: 0;
    }

    .label {
        width: 2.625in;
        height: 1in;
        padding: 0.125in;
        box-sizing: border-box;
        border: 1px solid black; /* Optional for visual reference */
        overflow: hidden;
        text-align: left;
        font-size: 12pt;
        line-height: 1.2;
    }
}
```

- **@media print**: This defines a media query that applies the enclosed styles only when the document is being printed.
  
- **.sheet**:
  - `width: 8.5in`: Sets the width of the sheet to 8.5 inches (standard US letter size width).
  - `height: 11in`: Sets the height of the sheet to 11 inches (standard US letter size height).
  - `margin: 0.5in 0.1875in`: Sets the margin around the sheet to 0.5 inches at the top/bottom and 0.1875 inches on the sides.
  - `display: grid`: Applies a CSS Grid layout to the `.sheet` element.
  - `grid-template-columns: repeat(3, 2.625in)`: Defines three columns, each 2.625 inches wide.
  - `grid-template-rows: repeat(10, 1in)`: Defines ten rows, each 1 inch high.
  - `gap: 0`: Removes any gaps between grid cells (labels).

- **.label**:
  - `width: 2.625in`: Sets the width of each label to 2.625 inches.
  - `height: 1in`: Sets the height of each label to 1 inch.
  - `padding: 0.125in`: Adds 0.125 inches of padding inside each label.
  - `box-sizing: border-box`: Ensures the padding and border are included in the total width and height of the label.
  - `border: 1px solid black`: Adds a 1-pixel solid black border around each label.
  - `overflow: hidden`: Hides any content that overflows the label's boundaries.
  - `text-align: left`: Aligns text to the left within the label.
  - `font-size: 12pt`: Sets the font size to 12 points.
  - `line-height: 1.2`: Sets the line height to 1.2 times the font size, providing some space between lines of text.

### Default Styles

```css
body {
    font-family: Arial, sans-serif;
}

.sheet {
    width: 8.5in;
    height: 11in;
    margin: 0.5in auto;
    display: grid;
    grid-template-columns: repeat(3, 2.625in);
    grid-template-rows: repeat(10, 1in);
    gap: 0;
}

.label {
    width: 2.625in;
    height: 1in;
    padding: 0.125in;
    box-sizing: border-box;
    border: 1px solid black; /* Optional for visual reference */
    overflow: hidden;
    text-align: left;
    font-size: 12pt;
    line-height: 1.2;
}
```

- **body**:
  - `font-family: Arial, sans-serif`: Sets the default font family for the document to Arial, with sans-serif as a fallback.

- **.sheet**:
  - `width: 8.5in`: Sets the width of the sheet to 8.5 inches.
  - `height: 11in`: Sets the height of the sheet to 11 inches.
  - `margin: 0.5in auto`: Sets the top and bottom margins to 0.5 inches and centers the sheet horizontally with `auto` side margins.
  - `display: grid`: Applies a CSS Grid layout to the `.sheet` element.
  - `grid-template-columns: repeat(3, 2.625in)`: Defines three columns, each 2.625 inches wide.
  - `grid-template-rows: repeat(10, 1in)`: Defines ten rows, each 1 inch high.
  - `gap: 0`: Removes any gaps between grid cells (labels).

- **.label**:
  - `width: 2.625in`: Sets the width of each label to 2.625 inches.
  - `height: 1in`: Sets the height of each label to 1 inch.
  - `padding: 0.125in`: Adds 0.125 inches of padding inside each label.
  - `box-sizing: border-box`: Ensures the padding and border are included in the total width and height of the label.
  - `border: 1px solid black`: Adds a 1-pixel solid black border around each label.
  - `overflow: hidden`: Hides any content that overflows the label's boundaries.
  - `text-align: left`: Aligns text to the left within the label.
  - `font-size: 12pt`: Sets the font size to 12 points.
  - `line-height: 1.2`: Sets the line height to 1.2 times the font size, providing some space between lines of text.

### Summary

- **@media print**: Applies styles specifically for print media.
- **.sheet**: Styles the container for the labels to fit the Avery 8160 label sheet specifications.
- **.label**: Styles each individual label to fit within the defined grid cells, with padding, borders, and text formatting.

These styles ensure that when printed, the labels align correctly on Avery 8160 label sheets, with proper spacing, padding, and borders around each label.