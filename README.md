## How to reproduce

1. Go to `packages/rspack-lib/src/lib/rspack-lib.ts` to spot the obvious typescript type error.
2. Run the build target using @nx/rspack:rspack executor: `nx build rspack-lib`
3. No type error is shown in the terminal and build succeeds.
