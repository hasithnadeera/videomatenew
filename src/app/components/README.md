# Components Directory

## Overview
This directory contains reusable React components used throughout the Videomate application.

## Components

### Footer
The Footer component has been refactored for better maintainability and performance:

- Uses `memo` to prevent unnecessary re-renders
- Social media icons are now stored in the constants file for easier management
- Uses the reusable `SocialIcon` component for consistent styling and behavior
- SVG icons are stored as separate files in the public directory

### SocialIcon
A reusable component for social media icons:

- Accepts both string paths and React elements as icons
- Includes proper accessibility attributes
- Implements proper security attributes for external links
- Has unit tests for verification

## Best Practices

1. **Component Organization**:
   - Keep components focused on a single responsibility
   - Use composition over inheritance
   - Extract reusable logic to custom hooks

2. **Performance**:
   - Use `memo` for components that render often but rarely change
   - Avoid unnecessary re-renders
   - Implement lazy loading for components not needed on initial render

3. **Accessibility**:
   - Include proper ARIA attributes
   - Ensure keyboard navigation works
   - Maintain proper contrast ratios

4. **Maintainability**:
   - Document component props with PropTypes or TypeScript
   - Keep related constants in the constants directory
   - Write unit tests for components