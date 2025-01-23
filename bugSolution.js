```javascript
/* Solution using CSS custom properties */

.my-class {
  --hover-bg: blue;
  --focus-ring: 2px;

  /* Now uses variables, ensuring proper layering*/
  background-color: var(--hover-bg);
  box-shadow: 0 0 var(--focus-ring) blue;

  &:hover {
    background-color: rgb(var(--hover-bg));
  }

  &:focus {
    box-shadow: 0 0 var(--focus-ring) red;
  }
}
```