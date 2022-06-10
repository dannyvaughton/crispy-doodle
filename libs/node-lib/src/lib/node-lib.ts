import {
  workspaceLib,
  nestedFunctionInWorkspaceLib,
} from '@happynxjest/workspace-lib';

export function nodeLib(): string {
  console.log(workspaceLib());
  console.log(nestedFunctionInWorkspaceLib());
  return 'node-lib';
}
