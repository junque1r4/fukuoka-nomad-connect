# Contributing to Fukuoka Nomad Connect

Thank you for your interest in contributing to Fukuoka Nomad Connect! We welcome contributions from everyone, regardless of experience level. This document provides guidelines and instructions to help you contribute effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```
   git clone https://github.com/YOUR-USERNAME/fukuoka-nomad-connect.git
   cd fukuoka-nomad-connect
   ```
3. Add the original repository as a remote:
   ```
   git remote add upstream https://github.com/main-org/fukuoka-nomad-connect.git
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Create a new branch for your feature or fix:
   ```
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make sure you're working with the latest code:
   ```
   git pull upstream main
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Make your changes
4. Run linting:
   ```
   npm run lint
   ```
5. Run tests:
   ```
   npm test
   ```
6. Commit your changes with a descriptive message:
   ```
   git commit -m "Add feature: description of your changes"
   ```

## Pull Request Process

1. Push your changes to your fork:
   ```
   git push origin feature/your-feature-name
   ```
2. Go to the original repository on GitHub and create a Pull Request
3. Fill out the PR template with all relevant information
4. Wait for code review and address any requested changes
5. Once approved, your PR will be merged

## Styling Guidelines

- We use Tailwind CSS for styling
- Follow the design system defined in `tailwind.config.js`
- Use the pre-defined CSS variables for colors and typography
- Adhere to responsive design principles
- Use the component classes defined in `globals.css` where applicable

## Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a PR
- Test your changes across different browsers and screen sizes
- For UI components, provide screenshots in your PR description

## Documentation

- Update documentation when changing functionality
- Follow JSDoc standards for code documentation
- Ensure README and other guides stay up-to-date

## Community

- Join our Discord server to connect with other contributors
- Attend our monthly virtual meetups
- Feel free to ask questions in our discussion forums

## Solana Development

When working with Solana components:

1. Set up a local Solana validator for development:
   ```
   solana-test-validator
   ```
2. Configure your Solana wallet for the development environment
3. Test transactions thoroughly in a development environment
4. Document any changes to the smart contract interfaces

Thank you for contributing to Fukuoka Nomad Connect!
