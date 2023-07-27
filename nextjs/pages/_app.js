/**
 * @Note
 * The default export of _app.js is a top-level React component that wraps all the pages
 * in your application. You can use this component to keep state when navigating between pages,
 * or to add global styles.
*/
import '../styles/globals.scss';
import { ReducerContext } from "@/context/reducer/ReducerContext";

export default function App({ Component, pageProps }) {
  return (
    <>
        <ReducerContext>
          <Component {...pageProps} />
        </ReducerContext>
    </>
  );
}