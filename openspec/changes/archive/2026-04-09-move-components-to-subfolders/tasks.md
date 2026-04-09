## 1. Plan Target Structure

- [x] 1.1 Finalize target subfolder names under `client/src/components` (`blog`, `auth`, and `layout` or `pages`)
- [x] 1.2 Create the destination subfolders and map each existing component to its target location

## 2. Move Component Files

- [x] 2.1 Move blog components and related CSS modules into the blog subfolder
- [x] 2.2 Move auth components into the auth subfolder and page/layout components into the chosen layout/pages subfolder

## 3. Update Imports

- [x] 3.1 Update imports in `client/src/views/*` to match new component paths
- [x] 3.2 Update internal component imports and CSS module/image relative paths after moves

## 4. Verify And Stabilize

- [x] 4.1 Run client build/tests and fix any module resolution or path issues
- [x] 4.2 Optionally add barrel exports (`index.js`) for subfolders and confirm no behavior changes