import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <>
        <Global styles={css`

            :root {
              --input-border: #8b8a8b;
              --input-focus-h: 245;
              --input-focus-s: 100%;
              --input-focus-l: 42%;
            }

            html {
                line-height: 1.15; /* 1 */
                -ms-text-size-adjust: 100%; /* 2 */ 
                -webkit-text-size-adjust: 100%; /* 2 */
            }

            body {
                margin: 0;
                /* padding: 0; */
            }
            

            article,
            aside,
            footer,
            header,
            nav,
            section {
                display: block;
            }

            h1 {
                font-size: 2em;
                margin: .67em 0;
            }

            figcaption,
            figure,
            main {
                /* 1 */
                display: block;
            }

            figure {
                margin: 1em 40px;
            }

            hr {
                box-sizing: content-box; /* 1 */
                height: 0; /* 1 */
                overflow: visible; /* 2 */
            }

            pre {
                font-family: monospace, monospace; /* 1 */
                font-size: 1em; /* 2 */
            }

            a {
                background-color: transparent; /* 1 */
                -webkit-text-decoration-skip: objects; /* 2 */
            }

            abbr[title] {
                border-bottom: none; /* 1 */
                text-decoration: underline; /* 2 */
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted; /* 2 */
            }

            b,
            strong {
                font-weight: inherit;
            }

            b,
            strong {
                font-weight: bolder;
            }

            code,
            kbd,
            samp {
                font-family: monospace, monospace; /* 1 */
                font-size: 1em; /* 2 */
            }

            dfn {
                font-style: italic;
            }

            mark {
                background-color: #ff0;
                color: #000;
            }

            small {
                font-size: 80%;
            }

            sub,
            sup {
                font-size: 75%;
                line-height: 0;
                position: relative;
                vertical-align: baseline;
            }
            
            sub {
                bottom: -0.25em;
            }
            
            sup {
                top: -0.5em;
            }

            
            audio,
            video {
                display: inline-block;
            }

            audio:not([controls]) {
                display: none;
                height: 0;
            }

            img {
                border-style: none;
            }

            svg:not(:root) {
                overflow: hidden;
            }

            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: sans-serif; /* 1 */
                font-size: 100%; /* 1 */
                line-height: 1.15; /* 1 */
                margin: 0; /* 2 */
            }

            button,
            input {
                /* 1 */
                overflow: visible;
            }

            button,
            select {
                /* 1 */
                text-transform: none;
            }

            button,
            html [type="button"],
                /* 1 */
            [type="reset"],
            [type="submit"] {
                -webkit-appearance: button; /* 2 */
            }

            button::-moz-focus-inner,
            [type="button"]::-moz-focus-inner,
            [type="reset"]::-moz-focus-inner,
            [type="submit"]::-moz-focus-inner {
                border-style: none;
                padding: 0;
            }

            button:-moz-focusring,
            [type="button"]:-moz-focusring,
            [type="reset"]:-moz-focusring,
            [type="submit"]:-moz-focusring {
                outline: 1px dotted ButtonText;
            }

            fieldset {
                padding: .35em .75em .625em;
            }

            legend {
                box-sizing: border-box; /* 1 */
                color: inherit; /* 2 */
                display: table; /* 1 */
                max-width: 100%; /* 1 */
                padding: 0; /* 3 */
                white-space: normal; /* 1 */
            }

            progress {
                display: inline-block; /* 1 */
                vertical-align: baseline; /* 2 */
            }

            textarea {
                overflow: auto;
            }

            [type="checkbox"],
            [type="radio"] {
                box-sizing: border-box; /* 1 */
                padding: 0; /* 2 */
            }

            [type="number"]::-webkit-inner-spin-button,
            [type="number"]::-webkit-outer-spin-button {
                height: auto;
            }

            [type="search"] {
                -webkit-appearance: textfield; /* 1 */
                outline-offset: -2px; /* 2 */
            }

            [type="search"]::-webkit-search-cancel-button,
            [type="search"]::-webkit-search-decoration {
                -webkit-appearance: none;
            }

            ::-webkit-file-upload-button {
                -webkit-appearance: button; /* 1 */
                font: inherit; /* 2 */
            }

            details,
                /* 1 */
            menu {
                display: block;
            }

            summary {
                display: list-item;
            }

            canvas {
                display: inline-block;
            }

            template {
                display: none;
            }

            [hidden] {
                display: none;
            }

            html {
                box-sizing: border-box; /* 1 */
                font-family: sans-serif; /* 2 */
            }
            
            *,
            *::before,
            *::after {
                box-sizing: inherit;
            }

            blockquote,
            dl,
            dd,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            figure,
            p,
            pre {
                margin: 0;
            }
            
            button {
                background: transparent;
                padding: 0;
            }

            button:focus {
                outline: 1px dotted;
                outline: 5px auto -webkit-focus-ring-color;
            }
            
            fieldset {
                margin: 0;
                padding: 0;
            }
            
            ol,
            ul {
                margin: 0;
            }

            [tabindex="-1"]:focus {
                outline: none !important;
            }


            *,
            *::before,
            *::after {
                border-width: 0;
                border-style: solid;
                border-color: currentColor;
            }

            img {
                border-style: solid;
            }

            button,
            [type="button"],
            [type="reset"],
            [type="submit"] {
                border-radius: 0;
            }
            
            textarea {
                resize: vertical;
            }
            
            img {
                max-width: 100%;
            }
            
            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: inherit;
            }
            
            input::-webkit-input-placeholder,
            textarea::-webkit-input-placeholder {
                color: inherit;
                opacity: .5;
            }
            
            input::-moz-placeholder,
            textarea::-moz-placeholder {
                color: inherit;
                opacity: .5;
            }
            
            input::-ms-input-placeholder,
            textarea::-ms-input-placeholder {
                color: inherit;
                opacity: .5;
            }
            
            input::placeholder,
            textarea::placeholder {
                color: inherit;
                opacity: .5;
            }
            
            button,
            [role=button] {
                cursor: pointer;
            }

            .container {
                max-width: 1200px;
                width: 100%;
                margin: 0 auto;
                padding: 30px;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 1rem;
            }

            .movie_container {
                max-width: 960px;
                width: 100%;
                margin: 0 auto;
                padding: 30px;
                display: grid;
                grid-template-columns: 1fr ;
            }


            .page_container {
              max-width: 960px;
              width: 100%;
              margin: 0 auto;
              padding: 30px;
              display: grid;
              grid-template-columns: 1fr ;
            }

            .page_container h1 {
              margin: 2rem auto;
              text-align: center;
            }

            .page ul {
              list-style-type: none;
            }

            .content_container {
              max-width: 400px;
              width: 100%;
              margin: 0 auto;
              padding: 30px;
              display: grid;
              grid-template-columns: 1fr;
              text-align: center;
            }

            .content_container .button{
                background: #4B99AD;
                padding: 10px 15px 10px 15px;
                border: none;
                color: #fff;
                border-radius: 5px;
                width: 50%;
              }
            


            .filter_container {
              max-width: 600px;
              width: 100%;
              margin: 0 auto;
              padding: 30px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              text-align: center;
            }

            /* .filter-option::placeholder {
              text-align: center;
            } */
            

            .filter-option {
              /* margin-top: 10px; */
              margin: 0 10px;
            }

            .filtered_movies {
              margin: 2rem auto 0;
              text-align: center;
            }


            /* .filter_status {
              display: flex;
              justify-content: flex-end
            } */
           
           
            .filter_status,
            .login,
            .article,
            .page li h1 {
              margin: 2rem auto;
              text-align: center;
            }

            .page li p {
              font-size: 1.2rem;
              line-height: 1.5;
            }


            /* .login-form {
              width:200px;
              padding:20px;
            } */

            /* .input {
              font-size: 16px;
              font-size: max(16px, 1em);
              font-family: inherit;
              padding: 0.25em 0.5em;
              background-color: #fff;
              border: 2px solid var(--input-border);
              border-radius: 4px;
            } */

            /* form input {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              display: inline-block;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
            } */

            .form-style-1 {
              max-width: 400px;
              margin: 10px auto;
              padding: 20px 12px 10px 20px;
              /* font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif; */
            }

            /* .form-style-1 div {
              padding: 0;
              display: block;
              margin: 10px 0;
            } */

            .form-style-1 label{
              /* margin:0 0 3px 0; */
              margin-bottom: 3px;
              padding: 0px;
              display:block;
              font-weight: bold;
              /* text-align: center; */
            }

            .form-style-1 input[type=text], 
            .form-style-1 input[type=password], 
            .form-style-1 input[type=email] {
              display: block;
              width: 100%;
              border:1px solid #BEBEBE;
              padding: 7px;
              margin-bottom: 1rem;
              /* outline: none;	 */
            }

            .no-data,
            .btn {
              text-align: center;
              margin: 0.5rem 0;
            } 

            .form-style-1 button{
                background: #4B99AD;
                padding: 8px 15px 8px 15px;
                border: none;
                color: #fff;
                border-radius: 5px;
              }

            .form-style-1 button:hover{
              background: #4691A4;
              box-shadow:none;
              -moz-box-shadow:none;
              -webkit-box-shadow:none;
            }


            @media (max-width: 1200px) {
              .container {
                max-width: 960px;
                width: 100%;
                margin: 0 auto;
                padding: 30px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 1rem;
              }
            }


            @media (max-width: 650px) {
              .container {
                width: 100%;
                margin: 0 auto;
                padding: 30px;
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1rem;
              }
            }
            
        `}/>
    </>
)

export default GlobalStyles