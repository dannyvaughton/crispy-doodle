import styles from './react-lib.module.css';
import {
  workspaceLib,
  nestedFunctionInWorkspaceLib,
} from '@happynxjest/workspace-lib';

/* eslint-disable-next-line */
export interface ReactLibProps {}

export function ReactLib(props: ReactLibProps) {
  console.log(workspaceLib());
  console.log(nestedFunctionInWorkspaceLib());
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLib!</h1>
    </div>
  );
}

export default ReactLib;
