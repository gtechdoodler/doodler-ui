# doodler-ui

## Development of a Lightweight Design System

I've quickly put together a select component with reuse and scalability in mind. Maybe this is the beginning of a design system... I'd like to develop a full design system of react components with performance (bundle size, browser stress etc.) being the main focus.

Select component is deployed to github pages: https://gtechdoodler.github.io/doodler-ui/

## Outstanding Tasks

1. Apply accessibility aria-attributes and roles.
2. Invalidate the children of Select, which should always be SelectOption nodes.
3. Unit tests.
4. Document and comment code.

## Improvements

1. Create controlled vs uncontrolled versions of certain components. Look at material-ui for this, and see comment in Select.tsx component.
2. The API for Select was put together quickly. Need to figure out how to leverage the standard Select/HTMLInputElement API.
3. Improve how the Select options' menu scales in surrounding space, specifically when opened at the bottom of the window.
4. Test excessive amount of data with a filtering text field debounce. Although, perhaps the wrong component for excessive data set.
5. Consider fuzzy searching when filtering.
6. Create a shared Input component for TextField, Select etc. Rather than relying upon shared SASS vars.
7. Flexibility and scalability is key in a design sys, but there's a bit of boilerplate setting up the filter variation. Investigate refactoring.
8. Add alias paths to project, avoiding unsightly relative import paths.
9. Performance test and optimisations.