# Contributing

Thank you for considering making contributions to IBC Explorer!

Contributing to this repo can mean many things such as participating in
discussion or proposing code changes. To ensure a smooth workflow for all
contributors, the general procedure for contributing has been established:

1. either [open](https://github.com/irisnet/ibc-explorer/issues/new) or
   [find](https://github.com/irisnet/ibc-explorer/issues) an issue you'd like to help with,
2. participate in thoughtful discussion on that issue,
3. if you would then like to contribute code:
   1. if the issue is a proposal, ensure that the proposal has been accepted,
   2. ensure that nobody else has already begun working on this issue, if they have
      make sure to contact them to collaborate,
   3. if nobody has been assigned the issue and you would like to work on it
      make a comment on the issue to inform the community of your intentions
      to begin work,
   4. follow standard GitHub best practices: fork the repo,
      if the issue is a bug fix, branch from the
      tip of `develop`, make some commits, and submit a PR to `develop`; if the issue is a new feature, branch from the tip of `feature/XXX`, make some commits, and submit a PR to `feature/XXX`
   5. include `WIP:` in the PR-title and submit your PR early, even if it's
      incomplete, this indicates to the community you're working on something and
      allows them to provide comments early in the development process. When the code
      is complete it can be marked as ready-for-review by replacing `WIP:` with
      `Ready for Review:` in the PR-title.

Note that for very small or blatantly obvious problems (such as typos) it is 
not required to open an issue to submit a PR, but be aware that for more complex
problems/features, if a PR is opened before an adequate design discussion has
taken place in a GitHub issue, that PR runs a high likelihood of being rejected. 

Please make sure to use the automated code formatting tools before every commit - ESLint and Prettier will run automatically via Husky hooks, but you can also run them manually.

## Pull Requests

To accommodate review process we suggest that PRs are categorically broken up.
Ideally each PR addresses only a single issue. Additionally, as much as possible
code refactoring and cleanup should be submitted as separate PRs. And the feature branch `feature/XXX` should be synced with `develop` regularly.

## Dependencies

We use pnpm to manage dependencies. The dependencies are defined in `package.json` and `pnpm-lock.yaml` files.

Since some dependencies are not under our control, a third party may break our
build, in which case we can fall back on `pnpm install` or `pnpm update` to clean up and synchronize dependencies.

## Code Quality and Testing

The project enforces strict code quality standards using automated tools:

### Code Standards
- **ESLint**: Ensures code follows consistent patterns and catches potential issues
- **Prettier**: Automatic code formatting for consistent style
- **TypeScript**: Strict type checking enabled
- **Husky**: Git hooks for automated quality checks before commits

### Testing Requirements
For any new feature, appropriate tests should be provided:

- **Unit tests**: For utility functions and composables
- **Component tests**: For Vue components using Vue Test Utils
- **Integration tests**: For complex user workflows
- **E2E tests**: For critical user paths

### Pre-commit Checks
The following checks run automatically before each commit:
- TypeScript compilation (`vue-tsc --noEmit`)
- ESLint with auto-fix (`pnpm eslint`)
- Prettier formatting (`pnpm prettier`)
- Commitlint validation for commit message format

## Commit Message Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with custom types defined in `.cz-config.js`:

### Commit Types
- `feature`: Add new feature
- `fix`: Fix bug  
- `bug`: Bug number from testing feedback
- `ui`: Update UI components or styling
- `docs`: Documentation changes
- `style`: Code formatting (no functional changes)
- `perf`: Performance optimization
- `refactor`: Code refactoring (no feature/bug changes)
- `chore`: Build process or config changes
- `merge`: Merge branches

### Using Commitizen
Use the interactive commit tool for standardized messages:
```bash
# Use the interactive commit helper
pnpm commit

# Or if you have commitizen installed globally
git cz
```

### PR Targeting

Ensure that you base and target your PR on the correct branch:

- `release/vxx.yy` for a merge into a release candidate
- `main` for a merge of a release
- `develop` in the usual case

All feature additions should be targeted against `feature/XXX`. Bug fixes for an outstanding release candidate
should be targeted against the release candidate branch. Release candidate branches themselves should be the
only pull requests targeted directly against main.

## Development Workflow

### Development Procedure

- the latest state of development is on `develop`
- `develop` must never fail linting or type checking
- no --force onto `develop` (except when reverting a broken commit, which should seldom happen)
- feature branches should be regularly synced with `develop`

### Pull Request Procedure

- ensure `feature/XXX` is rebased on `develop`
- ensure pull request branch is rebased on `feature/XXX`
- run type checking and linting to ensure all checks pass:
  ```bash
  pnpm vue:tsc    # TypeScript compilation check
  pnpm eslint     # ESLint check and auto-fix
  pnpm prettier   # Code formatting
  ```
- submit pull request
- push `feature/XXX` into `develop` regularly

### Local Development Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your API endpoints
   ```

3. **Start development server**:
   ```bash
   pnpm dev
   ```

4. **Run quality checks**:
   ```bash
   pnpm vue:tsc    # Type check
   pnpm eslint     # Lint check
   pnpm prettier   # Format code
   ```

### Release Procedure

- start on `develop`
- prepare changelog/release issue
- bump versions in `package.json`
- push to `release-vX.X.X` to run CI/CD
- run build verification:
  ```bash
  pnpm build:prod   # Production build
  pnpm preview      # Test built application
  ```
- merge to `main`
- merge `main` back to `develop`

### Hotfix Procedure

- start on `release-vX.X.X`
- make the required changes
  - these changes should be small and an absolute necessity
  - add a note to CHANGELOG.md
- bump versions in `package.json`
- verify build works: `pnpm build:prod`
- merge `release-vX.X.X` to `main` if necessary
- merge `release-vX.X.X` to `develop` if necessary

## Project Structure Guidelines

When contributing to the project, please follow these structural conventions:

### File Organization
- `src/api/` - API interface definitions and HTTP requests
- `src/components/` - Reusable Vue components
- `src/composables/` - Vue 3 composition functions
- `src/views/` - Page-level components
- `src/utils/` - Pure utility functions
- `src/types/` - TypeScript type definitions
- `src/constants/` - Application constants
- `src/assets/` - Static assets (images, fonts, etc.)

### Naming Conventions
- **Files**: Use kebab-case for file names (`user-profile.vue`)
- **Components**: Use PascalCase for component names (`UserProfile.vue`)
- **Composables**: Use camelCase with `use` prefix (`useUserData.ts`)
- **Constants**: Use UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Types/Interfaces**: Use PascalCase (`UserProfile`, `ApiResponse`)

### Component Guidelines
- Use `<script setup>` syntax for new components
- Define props and emits with TypeScript
- Use composition API over options API
- Follow single responsibility principle
- Include proper JSDoc comments for complex logic

### Style Guidelines
- Use Tailwind CSS classes for styling when possible
- Use Less for complex custom styles
- Follow BEM methodology for custom CSS classes
- Ensure responsive design for all components

## Performance and Accessibility

### Performance Considerations
- **Bundle Size**: Monitor build output and avoid unnecessary dependencies
- **Code Splitting**: Use dynamic imports for large components
- **Image Optimization**: Use appropriate formats and sizes
- **Lazy Loading**: Implement for non-critical content
- **Caching**: Leverage browser caching for static assets

### Accessibility (A11y)
- Use semantic HTML elements
- Provide proper ARIA labels and roles
- Ensure keyboard navigation works properly
- Maintain sufficient color contrast ratios
- Test with screen readers when possible
- Follow WCAG 2.1 guidelines

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Test critical functionality across supported browsers

## Getting Help

If you need help with your contribution:

1. **Documentation**: Check the README and project documentation
2. **Issues**: Search existing GitHub issues for similar problems
3. **Discussions**: Start a GitHub discussion for broader questions
4. **Code Review**: Don't hesitate to ask for feedback during PR review

Thank you for contributing to IBC Explorer! 🚀