# Reusable Workflow Lab 2.0 Called

This is a second npm project that calls a reusable GitHub Actions workflow from another repo.

The local CI workflow calls:

```yaml
uses: leeduybinh/reusable-workflow-lab/.github/workflows/reusable-node-ci.yml@main
```

For this to work on GitHub, the reusable workflow must exist in the `reusable-workflow-lab` repo at:

```text
.github/workflows/reusable-node-ci.yml
```

## Commands

```bash
npm start
npm test
npm run lint
npm run ci
```
# reusable-workflow-lab-2.0-called
