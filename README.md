# doodler-ui

## Published to NPM

Visit: https://www.npmjs.com/package/doodler-ui-test

## Outstanding Tasks

1. Add subtle box-shadow to Select component.
2. Apply accessibility aria-attributes and roles.
3. Invalidate the children of Select, which should always be SelectOption nodes.
4. Unit tests.
5. Document and comment code.

## Improvements

1. The API for Select was put together quickly. Need to figure out how to leverage the standard Select/HTMLInputElement API.
2. Improve how the Select options' menu scales in surrounding space, specifically when opened at the bottom of the window.
3. Test excessive amount of data with a filtering text field debounce. Although, perhaps the wrong component for excessive data set.
4. Consider fuzzy searching when filtering.
5. Create a shared Input component for TextField, Select etc. Rather than relying upon shared SASS vars.
6. Flexibility and scalability is key in a design sys, but there's a bit of boilerplate setting up the filter variation. Investigate refactoring.
7. Add alias paths to project, avoiding unsightly relative import paths.
8. Performance test and optimisations.