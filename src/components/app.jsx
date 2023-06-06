import React from "react";
import Editor from "./editor";
import useLocalStorage from "../hooks/useLocalStorage";


function App() {

  const [html , setHtml] = useLocalStorage('html' , '');
  const [css , setCss] = useLocalStorage('css' , '');
  const [js , setJs] = useLocalStorage('js' , '');
  const [srcDoc , setSrcDoc] = React.useState('');


  React.useEffect (() => {

    const timeout = setTimeout (() => {

      setSrcDoc (`

        <html>

          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>

        </html>

      `);

    }, 250);

    return () => clearTimeout(timeout);

  }, [html , css , js]);



  return (

    <div>

      <div className = "screen top-screen">

        <Editor
          language = "xml"
          displayName = "HTML"
          value = {html}
          onChange = {setHtml}
        />

        <Editor
          language = "css"
          displayName = "CSS"
          value = {css}
          onChange = {setCss}
        />

        <Editor
          language = "javascript"
          displayName = "JavaScript"
          value = {js}
          onChange = {setJs}
        />

      </div>

      <div className = "screen">

        <iframe
          srcDoc = {srcDoc}
          title = "output"
          sandbox = "allow-scripts"
        />

      </div>

    </div>

  );

}



export default App;