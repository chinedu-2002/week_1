# Food Truck Favorites

A responsive web application showcasing food trucks in your community. This project includes both a React version and a standalone HTML version.

## Features

✅ **Cohesive Theme**: Food truck community theme with attractive design  
✅ **Header/Title**: Clear "Food Truck Favorites" header with decorative awning  
✅ **Responsive Cards**: 12 unique food truck cards in organized grid layout  
✅ **Card Information**: Each card includes name, cuisine type, image, and description  
✅ **Interactive Buttons**: "View Menu" and "Find Location" buttons on each card  
✅ **Mobile Responsive**: Optimized for both desktop and mobile devices  

## Project Structure

```
week_1/
├── index.html              # Standalone HTML version
├── package.json           # React dependencies
├── public/
│   └── index.html         # React HTML template
└── src/
    ├── index.js           # React entry point
    ├── index.css          # Global styles
    ├── App.js             # Main App component
    ├── App.css            # App styles
    └── components/
        ├── Header.js      # Header component
        ├── Header.css     # Header styles
        ├── FoodTruckGrid.js    # Grid component
        ├── FoodTruckGrid.css   # Grid styles
        ├── FoodTruckCard.js    # Card component
        └── FoodTruckCard.css   # Card styles
```

## Quick Start (HTML Version)

Simply open `index.html` in your browser to see the application immediately.

## React Version Setup

1. Install Node.js (if not already installed)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open http://localhost:3000 in your browser

## Food Trucks Featured

1. **Birria-Landia** - Mexican cuisine
2. **Mysttik Masala** - Indian food
3. **The Halal Guys** - Middle Eastern
4. **Seoul Kitchen** - Korean BBQ
5. **Pasta La Vista** - Italian
6. **Dragon Bites** - Chinese
7. **Bayou Bites** - Cajun
8. **Sushi Wheels** - Japanese
9. **Greek Street** - Greek/Mediterranean
10. **BBQ Beast** - American BBQ
11. **Tropical Treats** - Caribbean
12. **Waffle Wanderer** - Desserts

## Responsive Design

- **Desktop**: 3-column grid layout
- **Tablet**: 2-column grid layout
- **Mobile**: Single-column layout with stacked buttons

## Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling with Grid, Flexbox, and animations
- **JavaScript** - Dynamic content generation
- **React** - Component-based UI framework

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Testing Mobile Responsiveness

1. Open the app in Chrome
2. Right-click and select "Inspect"
3. Click the "Toggle Device Toolbar" (phone/tablet icon)
4. Choose different device sizes to test responsiveness
