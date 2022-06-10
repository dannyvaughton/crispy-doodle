// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { ReactLib } from '@happynxjest/react-lib';

export function App() {
  return (
    <>
      <NxWelcome title="react-app" />
      <ReactLib />
    </>
  );
}

export default App;
