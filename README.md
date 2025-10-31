# Calculator

An accessible, single-page calculator implemented with vanilla HTML, CSS, and JavaScript.

## Demo
- Explore the live app: [Calculator Demo](https://calculator-chi-three-10.vercel.app)

## What the Project Does
- Emulates a four-function calculator with support for chained operations and decimal input.
- Displays results directly in the browser, adapting to a range of device sizes.
- Handles edge cases such as repeated operators and divides-by-zero with clear feedback.

## Why the Project Is Useful
- Provides a clean example of DOM-driven UI logic without external dependencies.
- Offers reusable utility functions (`add`, `subtract`, `multiply`, `divide`) that illustrate modular arithmetic helpers.
- Demonstrates state handling for sequential calculations, input validation, and user-friendly error messaging.

## How Users Can Get Started
### Prerequisites
- Any modern web browser.
- Optional: A lightweight static server (e.g., `npx serve`) if you prefer not to open files directly.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/azizu06/Calculator.git
   cd Calculator
   ```
2. Open `index.html` in your browser, or start a static server:
   ```bash
   npx serve .
   ```

### Usage
- Click number buttons to build operands. The display scrolls horizontally if the input grows long.
- Use the operator buttons (`+ − × ÷`) to chain calculations; a new operator replaces the previous one if pressed twice.
- Press `=` to evaluate the current expression. Results round to two decimal places when needed.
- `AC` clears the current session, `DEL` removes the last character, and decimal input is restricted to one per operand.
- Division by zero shows `Error`, allowing you to reset and continue.

## Where Users Can Get Help
- Review the source files (`index.html`, `script.js`, `style.css`) for implementation details.
- Open an issue in the repository with questions or bug reports.

## Who Maintains and Contributes
- Maintained by Aziz U.
- Contributions are welcome: open an issue to discuss proposed changes, then submit a pull request referencing it.
- Please follow standard GitHub contribution etiquette (clear commit messages, focused pull requests).

## Project Structure
- `index.html` – Calculator layout and component wiring.
- `style.css` – Responsive styling and button states.
- `script.js` – Core calculator logic, including input handling and arithmetic operations.
