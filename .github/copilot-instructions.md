# Copilot Instructions for usepopcorn

## Project Overview
- This is a React application bootstrapped with Create React App.
- Main UI logic is in `src/App.js`, which manages movie search, selection, and watched lists.
- Custom components like `StarRating` (`src/StarRating.js`) are used for interactive UI elements.
- Styling is handled via `src/index.css` using CSS variables and BEM-like class names.

## Key Files and Structure
- `src/App.js`: Main app logic, state management, and component composition.
- `src/StarRating.js`: Reusable star rating component with props for customization.
- `src/index.js`: Entry point, renders `<App />`.
- `public/index.html`: HTML template for the app.
- `package.json`: Scripts, dependencies, and configuration.

## Data Flow and Patterns
- State is managed with React hooks (`useState`, `useEffect`).
- Movie data is fetched from the OMDb API using a hardcoded API key (`KEY`).
- The app uses a controlled search input and conditional rendering for loading, error, and data states.
- Components are function-based and use props for communication.
- No Redux or context API; all state is local to components.

## Developer Workflows
- **Start development server:** `npm start`
- **Run tests:** `npm test`
- **Build for production:** `npm run build`
- **Eject (advanced):** `npm run eject` (irreversible)
- All scripts are defined in `package.json`.

## Project-Specific Conventions
- Use functional React components and hooks only.
- Use inline styles for component-specific styling (see `StarRating.js`), and CSS classes for layout/global styles.
- Use prop-types for component prop validation (see `StarRating.js`).
- All API calls use fetch and are handled in `useEffect`.
- Error and loading states are handled with dedicated components (`Loader`, `ErrorMessage`).
- The app expects at least 3 characters in the search input before querying the API.

## Integration Points
- OMDb API for movie data (API key in `App.js`).
- No backend or server-side code; all logic is client-side.
- No custom middleware or service layer.

## Examples
- To add a new feature, create a new component in `src/`, import and use it in `App.js`.
- To change the movie data source, update the fetch logic in `App.js`.
- To customize the star rating, adjust props in `StarRating` usage or the component itself.

## References
- See `README.md` for more on available scripts and Create React App conventions.
- See `src/App.js` for the main application flow and data handling patterns.
- See `src/StarRating.js` for reusable component patterns and prop validation.
