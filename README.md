# DevRequest

A browser-based API testing tool similar to Postman that allows users to make HTTP requests to their local development servers directly from the browser.

![DevRequest Screenshot](https://via.placeholder.com/800x450)

## Features

- 🚀 Make HTTP requests to localhost APIs from the browser
- 🔄 Support for all common HTTP methods (GET, POST, PUT, DELETE, PATCH, etc.)
- 📝 Customizable request headers and body
- 🎨 Beautiful UI built with shadcn/ui components
- 💾 No server-side processing - all requests made directly from the browser
- 📱 Responsive design works on desktop and mobile

## Why Use DevRequest?

Unlike desktop-based API testing tools, Local API Client runs entirely in the browser, allowing you to:

- Test your APIs without installing any software
- Make requests directly to your localhost development servers
- Share a single tool across your team with consistent behavior
- Avoid the need for server-side proxies to handle CORS issues with localhost

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/local-api-client.git
cd local-api-client
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter the URL of your API (e.g., `http://localhost:3001/api/users`)
2. Select the HTTP method (GET, POST, PUT, DELETE, etc.)
3. Add any required headers in JSON format
4. For POST, PUT, or PATCH requests, add a request body in JSON format
5. Click "Send Request" to execute the API call
6. View the formatted response including status code, headers, and body

## Tech Stack

- **React** - Frontend framework
- **shadcn/ui** - Component library for sleek, accessible UI
- **Axios** - HTTP client for making API requests
- **Next.js** - React framework for improved developer experience
- **Tailwind CSS** - Utility-first CSS framework

## Browser Compatibility

Local API Client works in all modern browsers that support ES6+ and fetch API:
- Chrome 61+
- Firefox 60+
- Safari 10.1+
- Edge 16+

## CORS Considerations

When testing APIs running on localhost, you may encounter CORS (Cross-Origin Resource Sharing) issues. To resolve these:

1. Ensure your API server includes appropriate CORS headers:
```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

2. For development purposes, you can enable CORS in popular frameworks:

**Express.js**:
```javascript
const cors = require('cors');
app.use(cors());
```

**Django**:
```python
CORS_ALLOW_ALL_ORIGINS = True  # Only in development!
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Postman and other API testing tools
- Built with shadcn/ui components