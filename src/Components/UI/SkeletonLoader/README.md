# Skeleton Loaders for Youth Hub

This document provides information on how the skeleton loading components are implemented for the About and Home pages.

## Overview

Skeleton loading screens are used to improve the perceived performance of the application by showing placeholder content while the actual content is loading. They provide a visual representation of the page's structure before the content is available, reducing the perception of loading time and improving the user experience.

## Implementation

Two main skeleton loading components have been created:

1. **AboutSkeleton**: Used on the About page to display a loading state for all sections including the page header, our story, our mission, and the team.

2. **HomeSkeleton**: Used on the Home page to display a loading state for all sections including the hero, certification section, about, events, and sponsorship.

## How to Use

The skeleton loaders are automatically applied in their respective pages using a loading state:

```jsx
// Example from Home.jsx
const [loading, setLoading] = useState(true);
  
useEffect(() => {
  // Simulate loading time
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500);
  
  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <HomeSkeleton />;
}
```

In a real application, you would replace the setTimeout with actual data fetching:

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch your data here
      const data = await fetchYourData();
      // Set your data state
      setYourData(data);
      // Set loading to false when done
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  
  fetchData();
}, []);
```

## Components Used

Both skeleton screens make use of the base `SkeletonLoader` component which supports various types:
- `text`: For text placeholders
- `card`: For card elements
- `image`: For image placeholders
- `button`: For button placeholders
- `circle`: For circular elements

Properties available for the SkeletonLoader:
- `type`: The type of skeleton (text, card, image, button, circle)
- `count`: Number of skeleton items to display
- `className`: Additional CSS class to apply
- `style`: Inline styles to apply
- `height`: Height of the skeleton
- `width`: Width of the skeleton

## Example

```jsx
// Single text skeleton
<SkeletonLoader type="text" />

// Multiple text skeletons
<SkeletonLoader type="text" count={3} />

// Image skeleton with custom dimensions
<SkeletonLoader type="image" height={200} width={300} />

// Card skeleton
<SkeletonLoader type="card" />
```

## Styling

The skeleton components use CSS modules for styling, with base animations and colors defined in the global CSS variables:

```css
/* From globals.css */
--skeleton-base: #e9ecef;
--skeleton-highlight: #f8f9fa;
```

The animation effect is created using CSS gradients and keyframes in the SkeletonLoader.module.css file.
