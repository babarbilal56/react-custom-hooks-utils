<img src="hooks.png" alt="main image">

# React Custom Hooks

This library contains a collection of reusable React custom hooks to simplify state management, side effects, and user interactions.

## Installation

To use these hooks in your React project, install the `react-custom-hooks-utils` package via npm or yarn:

### Using npm
```sh
npm install react-custom-hooks-utils
```

### Using yarn
```sh
yarn add react-custom-hooks-utils
```

## Usage

Once installed, you can import and use the hooks in your React components. Below is a detailed explanation of how to use each hook:

### 1. Fetch Data from an API (`useFetch`)

```javascript
import { useFetch } from 'react-custom-hooks-utils';

const { data, loading, error } = useFetch('https://api.example.com/data');
```

- `data`: Stores the API response.
- `loading`: Boolean indicating if the request is in progress.
- `error`: Captures any error that occurs during the fetch.

### 2. Persist State in Local Storage (`useLocalStorage`)

```javascript
import { useLocalStorage } from 'react-custom-hooks-utils';

const [name, setName] = useLocalStorage('name', 'John Doe');
```

- Retrieves and stores values in `localStorage`.
- Automatically updates when values change.

### 3. Toggle Boolean State (`useToggle`)

```javascript
import { useToggle } from 'react-custom-hooks-utils';

const [isVisible, toggleVisibility] = useToggle(false);
```

- Allows toggling between `true` and `false` states.

### 4. Debounce a Value (`useDebounce`)

```javascript
import { useDebounce } from 'react-custom-hooks-utils';

const debouncedSearchTerm = useDebounce(searchTerm, 500);
```

- Delays updating the state until after a specified time (`500ms`).
- Useful for optimizing API requests when users type in a search bar.

### 5. Get Window Dimensions (`useWindowSize`)

```javascript
import { useWindowSize } from 'react-custom-hooks-utils';

const { width, height } = useWindowSize();
```

- Provides real-time updates of the window size (`width` and `height`).

### 6. Get Previous State (`usePrevious`)

```javascript
import { usePrevious } from 'react-custom-hooks-utils';

const previousCount = usePrevious(count);
```

- Stores the previous state value.
- Useful for tracking state changes over time.

### 7. Detect Clicks Outside an Element (`useClickOutside`)

```javascript
import { useClickOutside } from 'react-custom-hooks-utils';
import { useRef } from 'react';

const ref = useRef();
useClickOutside(ref, () => console.log('Clicked outside!'));
```

- Detects clicks outside a referenced element.
- Useful for closing dropdowns, modals, or sidebars when clicking outside.

### 8. Detect Hover State (`useHover`)

```javascript
import { useHover } from 'react-custom-hooks-utils';

const [hoverRef, isHovered] = useHover();
```

- `hoverRef`: Attach this to an element.
- `isHovered`: Boolean indicating if the element is being hovered.

### 9. Execute Code After Delay (`useTimeout`)

```javascript
import { useTimeout } from 'react-custom-hooks-utils';

useTimeout(() => console.log('Timeout!'), 1000);
```

- Runs a callback function after a specified delay (`1000ms`).

### 10. Render Lists Easily (`Each`)

```javascript
import { Each } from 'react-custom-hooks-utils';

const data = ['Item 1', 'Item 2', 'Item 3'];

<Each of={data} render={(item, index) => <p key={index}>{item}</p>} />
```

- Simplifies rendering lists.
- Ensures correct key assignment and child element handling.

### 11. Manage Form State (`useForm`)

```javascript
import { useForm } from 'react-custom-hooks-utils';

const { values, errors, handleChange, handleSubmit } = useForm(
  { email: '', password: '' },
  (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';
    return errors;
  }
);
```

- `values`: Stores form field values.
- `errors`: Stores validation errors.
- `handleChange`: Updates state on input change.
- `handleSubmit`: Validates and submits form data.

### 12. Access and Track Geolocation (`useGeoLocation`)

```javascript
import { useGeoLocation } from 'react-custom-hooks-utils';

const LocationComponent = () => {
  // Call the hook with options (optional) and watch set to true
  const { loading, coordinates, error, isWatching } = useGeoLocation(
    { enableHighAccuracy: true, timeout: 5000 }, // Optional options
    true // Set to true if you want to watch for location changes
  );

  if (loading) {
    return <div>Loading location...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Geolocation</h3>
      <p>Latitude: {coordinates?.latitude}</p>
      <p>Longitude: {coordinates?.longitude}</p>
      <p>Watching: {isWatching ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

- `loading`: Whether the location is still being fetched.
- `coordinates`: The current coordinates (if available).
- `error`: An error object if the location request fails.
- `isWatching`: Whether the hook is currently watching for location changes.

### 13. Update Document Title (`useDocumentTitle`)

```javascript
import {useDocumentTitle} from 'react-custom-hooks-utils';

const PageComponent = () => {
  useDocumentTitle('My Page Title', true); // Set the title and revert on unmount

  return <div>Content of the page</div>;
};
```

- `title`: The title you want to set for the document.
- `revertOnUnmount`: If true, the document title will revert to its previous value when the component unmounts.




### 14. `useCookie`

#### Description:
A hook to manage browser cookies with React state.

#### Usage:
```javascript
import { useCookie } from 'react-custom-hooks-utils';

const [cookie, setCookie] = useCookie('theme', 'light');
```

#### Parameters:
- `key` (string) – The name of the cookie.
- `initialValue` (any) – The default value if the cookie is not set.

#### Returns:
- `cookie` – The current cookie value.
- `setCookie(value, daysToExpire)` – Function to update the cookie value and set an expiration.

---

### 15. `useDarkMode`

#### Description:
A hook to manage dark mode preferences using `localStorage` and system settings.

#### Usage:
```javascript

import { useDarkMode } from 'react-custom-hooks-utils';

const [isDarkMode, toggleDarkMode] = useDarkMode();
```

#### Returns:
- `isDarkMode` – Boolean indicating if dark mode is enabled.
- `toggleDarkMode` – Function to toggle dark mode.

---

### 16. `useInterval`

#### Description:
A hook to run a function at a set interval.

#### Usage:
```javascript
import { useInterval } from 'react-custom-hooks-utils';

useInterval(() => {
  console.log('This runs every second');
}, 1000);
```

#### Parameters:
- `callback` – Function to execute.
- `delay` – Interval duration in milliseconds.

---

### 17. `useKeyPress`

#### Description:
A hook to detect if a specific key is being pressed.

#### Usage:
```javascript
import { useKeyPress } from 'react-custom-hooks-utils';

const isEnterPressed = useKeyPress('Enter');
```

#### Parameters:
- `targetKey` (string) – The key to listen for.

#### Returns:
- `keyPressed` – Boolean indicating if the key is pressed.

---

### 18. `useMediaQuery`

#### Description:
A hook to check if the current screen size matches a given media query.

#### Usage:
```javascript
import { useMediaQuery } from 'react-custom-hooks-utils';

const isMobile = useMediaQuery('(max-width: 768px)');
```

#### Parameters:
- `query` (string) – CSS media query string.

#### Returns:
- `matches` – Boolean indicating if the query matches.

---

### 19. `useThrottle`

#### Description:
A hook to throttle a function call, ensuring it executes at most once within a given time frame.

#### Usage:
```javascript
import { useThrottle } from 'react-custom-hooks-utils';

const throttledFunction = useThrottle(() => console.log('Throttled'), 2000);
```

#### Parameters:
- `callback` – Function to be throttled.
- `delay` – Time in milliseconds to wait before the function can be executed again.

#### Returns:
- A throttled version of the callback function.







## License

This project is open-source and available under the MIT License.



