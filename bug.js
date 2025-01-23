```javascript
// Example showing an unexpected behavior with Tailwind's 
// `@apply` directive and complex selectors

.my-class {
  @apply hover:bg-blue-500;
  @apply focus:ring-2;
  /* This seems to overwrite the hover class */
  @apply hover:bg-red-500;
}
```