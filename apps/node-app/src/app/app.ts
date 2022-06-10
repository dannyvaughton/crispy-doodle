import {
  workspaceLib,
  nestedFunctionInWorkspaceLib,
} from '@happynxjest/workspace-lib';

export function hello() {
  console.log(workspaceLib());
  console.log(nestedFunctionInWorkspaceLib());
  return 'hello';
}
