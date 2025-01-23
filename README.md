# Tailwind CSS @apply Directive Layering Issue

This repository demonstrates an unexpected behavior with Tailwind's `@apply` directive when applying multiple hover or focus classes with the same modifier.  The last applied class overrides the previous one, resulting in unexpected styling.  The solution provided explores alternative approaches to achieve the desired layering.

## Problem

When using `@apply` to add multiple hover or focus styles, the expected layering doesn't happen. The last `@apply` rule takes precedence, effectively canceling out previous ones.

## Solution

The provided solution demonstrates using CSS custom properties (variables) and a more nuanced approach to applying styles, ensuring the correct layering of hover and focus effects.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Open `bug.html` (or your preferred HTML file) in a browser.  Observe the unexpected behavior.
4. Then open `bugSolution.html` to see the corrected behavior.
