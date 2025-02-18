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

## License

This project is open-source and available under the MIT License.



