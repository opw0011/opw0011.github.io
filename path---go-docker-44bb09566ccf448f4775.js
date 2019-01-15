webpackJsonp([0x8a599abf2b06],{802:function(e,t){e.exports={data:{post:{id:"C:/Users/opw/Desktop/workspace/blog/content/posts/2018-09-18--go-docker/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 450px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.44444444444444%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAAByUlEQVQoz2Pgxg1YWVlZwICDg4OBgSEnM33lyhULlixZsXa7p38EUJIBRTkPDzcfHwRx8fDIKyiEhoVduHhRUVHR29vn3pN3RXsfmrauWH78bdvk5eyszAxwPTx8vPxsbLwMDLyMjEBSX1m5vbU1ODSkoqrKzcXpyavPGQs+xk++Gdh2rnXbv3Onj/Hy8TGAdHJw8DAwcDAyMiiqMAWGsSakMUTGS4VGcnLzsDAxAR0sKiq6ZOnSHScebrv4p33Lt30XXudkpQPFGYA6uWVkGePTRMtqo7bsUtq8l+HBu+i7TwNnLxDpncLY3M3r6MLJyMjKzhbg511ZXVtaXmlhZgwMCKCLGXiYGLncvBiWbOh99eH7rRtr1q51vv7w889fzw8frL92m+HoJY7YJB5GBm4+fkZGkCuAgJmZhQfoXqBmIOYFUvNXhdx5+uvHz53PXvGW18w7duL212+2Nx8z7DnJw8fPzcUFDBheEODj4+MHUpDwBQcYFxfTqq2M998ynbtru3v79rbUzLVzGS4/Zrz9kuHMTU5FZW42Nm6wVWgAGlWMq7YxPfrAcOuF6JUH848c0T99meH2S2ag5gv3OHT0eYA+hNmGDAC3zJu94z4NcgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="go-banner"\n        title=""\n        src="/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-7d02a.png"\n        srcset="/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-0e87e.png 200w,\n/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-1c265.png 400w,\n/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-7d02a.png 450w"\n        sizes="(max-width: 450px) 100vw, 450px"\n      />\n    </span>\n  </span>\n  </p>\n<p>Shipping a Go application to production environment is very easy. You can simply build the application into a executable file and then run on a server. Here, we will go through how to build and run Go application easily using Docker.  </p>\n<h2>Setup</h2>\n<p>We created a simple Go program that simply print out “Hello”.</p>\n<p><code class="language-text">main.go</code></p>\n<div class="gatsby-highlight" data-language="go">\n      <pre class="language-go"><code class="language-go"><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token string">"fmt"</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tfmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Use Golang Alpine</h2>\n<p>This is simplest method to build and run Go appliation in Docker using golang:alpine image. </p>\n<p>Here is the <code class="language-text">Dockerfile</code>:</p>\n<div class="gatsby-highlight" data-language="dockerfile">\n      <pre class="language-dockerfile"><code class="language-dockerfile">FROM golang:1.11-alpine\n\nRUN mkdir /app\nCOPY  . /app\n\nWORKDIR /app\n\nRUN go build -o main .\n\nCMD [&quot;./main&quot;]</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker build -t go-docker:v1 .</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker images\n\nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\ngo-docker                     v1                  fb385134c202        7 seconds ago       312MB</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker run --rm go-docker:v1\n\nHello</code></pre>\n      </div>\n<p>As you can see, the docker container works fine, but the image size is relatively large for just a Hello world program. </p>\n<blockquote>\n<p>SIZE 312MB</p>\n</blockquote>\n<p>Why is it so large? Because inside the go images, it includes Go’s dependencies that required during compiling Go application. Howerver, those dependencies are not required after we have compiled it into an executable file.</p>\n<h2>Use Docker Multi-stage Build</h2>\n<p>Here is the introduction of multi-stage build extract from Docker official documentation:</p>\n<blockquote>\n<p>With multi-stage builds, you use multiple FROM statements in your Dockerfile. Each FROM instruction can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image.\n<a href="https://docs.docker.com/develop/develop-images/multistage-build/">https://docs.docker.com/develop/develop-images/multistage-build/</a></p>\n</blockquote>\n<p>By default, the stage is not named. We can name a stage by using <code class="language-text">as &lt;NAME&gt;</code> after the <code class="language-text">FROM</code> statement.</p>\n<div class="gatsby-highlight" data-language="dockerfile">\n      <pre class="language-dockerfile"><code class="language-dockerfile"># Build stage\nFROM golang:1.11-alpine as builder\n\nRUN mkdir /app\nCOPY  . /app\n\nWORKDIR /app\n\nRUN go build -o main .\n\n# Run stage\nFROM alpine:3.8\n\nWORKDIR /root\n\nCOPY --from=builder /app/main .\n\nCMD [&quot;./main&quot;]</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker build -t go-docker:v2 .</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"> docker images\n \nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\ngo-docker                     v2                  39c4ccb73334        18 seconds ago      6.32MB\n&lt;none&gt;                        &lt;none&gt;              d874ce40221b        20 seconds ago      312MB\ngo-docker                     v1                  fb385134c202        13 minutes ago      312MB</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker run --rm go-docker:v2\n\nHello</code></pre>\n      </div>\n<h2>Run with Scratch Image</h2>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text"> docker build -t go-docker:v3 .</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker images\n \nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\ngo-docker                     v3                  74a17e53882d        7 seconds ago       1.9MB\n&lt;none&gt;                        &lt;none&gt;              9d2c2b165875        7 seconds ago       312MB\ngo-docker                     v2                  39c4ccb73334        24 minutes ago      6.32MB\n&lt;none&gt;                        &lt;none&gt;              d874ce40221b        25 minutes ago      312MB\ngo-docker                     v1                  fb385134c202        37 minutes ago      312MB</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker run --rm go-docker:v3\n\nHello</code></pre>\n      </div>\n<h2>Clean Up Dangling Docker Images</h2>\n<p>In multi-stage build, each stage produces an images. So when you run <code class="language-text">docker images</code>, you will see some dangling images like this:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&lt;none&gt;                        &lt;none&gt;              d874ce40221b        25 minutes ago      312MB</code></pre>\n      </div>\n<p>One possible way to remove them once at all is to run:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker image prune\n\nWARNING! This will remove all dangling images.\nAre you sure you want to continue? [y/N] y\nDeleted Images:\ndeleted: sha256:9d2c2b16587512fc8a7f9d8ad9019fee65e6fbaf0f8661501eaf858c424781d4\n...</code></pre>\n      </div>\n<p>That’s all for shipping a simple Go application with Docker. In later tutorial, we will ship Go Web Application with other Go libraries using Docker. </p>\n<p>Reference:\n<a href="https://blog.hasura.io/the-ultimate-guide-to-writing-dockerfiles-for-go-web-apps-336efad7012c">The Ultimate Guide to Writing Dockerfiles for Go Web-apps</a></p>\n<p>Full soruce code available here: <a href="https://github.com/opw0011/go-playground/tree/master/go-docker">Github</a></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 450px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 44.44444444444444%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAAByUlEQVQoz2Pgxg1YWVlZwICDg4OBgSEnM33lyhULlixZsXa7p38EUJIBRTkPDzcfHwRx8fDIKyiEhoVduHhRUVHR29vn3pN3RXsfmrauWH78bdvk5eyszAxwPTx8vPxsbLwMDLyMjEBSX1m5vbU1ODSkoqrKzcXpyavPGQs+xk++Gdh2rnXbv3Onj/Hy8TGAdHJw8DAwcDAyMiiqMAWGsSakMUTGS4VGcnLzsDAxAR0sKiq6ZOnSHScebrv4p33Lt30XXudkpQPFGYA6uWVkGePTRMtqo7bsUtq8l+HBu+i7TwNnLxDpncLY3M3r6MLJyMjKzhbg511ZXVtaXmlhZgwMCKCLGXiYGLncvBiWbOh99eH7rRtr1q51vv7w889fzw8frL92m+HoJY7YJB5GBm4+fkZGkCuAgJmZhQfoXqBmIOYFUvNXhdx5+uvHz53PXvGW18w7duL212+2Nx8z7DnJw8fPzcUFDBheEODj4+MHUpDwBQcYFxfTqq2M998ynbtru3v79rbUzLVzGS4/Zrz9kuHMTU5FZW42Nm6wVWgAGlWMq7YxPfrAcOuF6JUH848c0T99meH2S2ag5gv3OHT0eYA+hNmGDAC3zJu94z4NcgAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"go-banner",title:"",src:"/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-7d02a.png",srcSet:["/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-0e87e.png 200w","/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-1c265.png 400w","/static/go-docker-banner-e425a93a07617ff68797e312278f3a75-7d02a.png 450w"],sizes:["(max-width:","450px)","100vw,","450px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Shipping a Go application to production environment is very easy. You can simply build the application into a executable file and then run on a server. Here, we will go through how to build and run Go application easily using Docker.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Setup"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We created a simple Go program that simply print out “Hello”."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"main.go"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"go"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-go"]},children:[{type:"element",tagName:"code",properties:{className:["language-go"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"package"}]},{type:"text",value:" main\n\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"import"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"fmt"'}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"func"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"main"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n\tfmt"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"Println"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"Hello"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Use Golang Alpine"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is simplest method to build and run Go appliation in Docker using golang:alpine image. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Dockerfile"}]},{type:"text",value:":"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"dockerfile"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-dockerfile"]},children:[{type:"element",tagName:"code",properties:{className:["language-dockerfile"]},children:[{type:"text",value:'FROM golang:1.11-alpine\n\nRUN mkdir /app\nCOPY  . /app\n\nWORKDIR /app\n\nRUN go build -o main .\n\nCMD ["./main"]'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker build -t go-docker:v1 ."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker images\n\nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\ngo-docker                     v1                  fb385134c202        7 seconds ago       312MB"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker run --rm go-docker:v1\n\nHello"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As you can see, the docker container works fine, but the image size is relatively large for just a Hello world program. "}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"SIZE 312MB"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Why is it so large? Because inside the go images, it includes Go’s dependencies that required during compiling Go application. Howerver, those dependencies are not required after we have compiled it into an executable file."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Use Docker Multi-stage Build"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is the introduction of multi-stage build extract from Docker official documentation:"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"With multi-stage builds, you use multiple FROM statements in your Dockerfile. Each FROM instruction can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image.\n"},{type:"element",tagName:"a",properties:{href:"https://docs.docker.com/develop/develop-images/multistage-build/"},children:[{type:"text",value:"https://docs.docker.com/develop/develop-images/multistage-build/"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"By default, the stage is not named. We can name a stage by using "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"as <NAME>"}]},{type:"text",value:" after the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"FROM"}]},{type:"text",value:" statement."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"dockerfile"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-dockerfile"]},children:[{type:"element",tagName:"code",properties:{className:["language-dockerfile"]},children:[{type:"text",value:'# Build stage\nFROM golang:1.11-alpine as builder\n\nRUN mkdir /app\nCOPY  . /app\n\nWORKDIR /app\n\nRUN go build -o main .\n\n# Run stage\nFROM alpine:3.8\n\nWORKDIR /root\n\nCOPY --from=builder /app/main .\n\nCMD ["./main"]'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker build -t go-docker:v2 ."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:" docker images\n \nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\ngo-docker                     v2                  39c4ccb73334        18 seconds ago      6.32MB\n<none>                        <none>              d874ce40221b        20 seconds ago      312MB\ngo-docker                     v1                  fb385134c202        13 minutes ago      312MB"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker run --rm go-docker:v2\n\nHello"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Run with Scratch Image"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:" docker build -t go-docker:v3 ."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker images\n \nREPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE\ngo-docker                     v3                  74a17e53882d        7 seconds ago       1.9MB\n<none>                        <none>              9d2c2b165875        7 seconds ago       312MB\ngo-docker                     v2                  39c4ccb73334        24 minutes ago      6.32MB\n<none>                        <none>              d874ce40221b        25 minutes ago      312MB\ngo-docker                     v1                  fb385134c202        37 minutes ago      312MB"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker run --rm go-docker:v3\n\nHello"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Clean Up Dangling Docker Images"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In multi-stage build, each stage produces an images. So when you run "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker images"}]},{type:"text",value:", you will see some dangling images like this:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"<none>                        <none>              d874ce40221b        25 minutes ago      312MB"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"One possible way to remove them once at all is to run:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker image prune\n\nWARNING! This will remove all dangling images.\nAre you sure you want to continue? [y/N] y\nDeleted Images:\ndeleted: sha256:9d2c2b16587512fc8a7f9d8ad9019fee65e6fbaf0f8661501eaf858c424781d4\n..."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"That’s all for shipping a simple Go application with Docker. In later tutorial, we will ship Go Web Application with other Go libraries using Docker. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Reference:\n"},{type:"element",tagName:"a",properties:{href:"https://blog.hasura.io/the-ultimate-guide-to-writing-dockerfiles-for-go-web-apps-336efad7012c"},children:[{type:"text",value:"The Ultimate Guide to Writing Dockerfiles for Go Web-apps"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Full soruce code available here: "},{type:"element",tagName:"a",properties:{href:"https://github.com/opw0011/go-playground/tree/master/go-docker"},children:[{type:"text",value:"Github"}]}]}],data:{quirksMode:!1}},fields:{slug:"/go-docker/",prefix:"2018-09-18"},frontmatter:{title:"Deploy Go App with Docker",subTitle:"How to build a Go Application Docker image with minimal size",cover:{childImageSharp:{resize:{src:"/static/golang-d1c2749d181f48c1eee42f0d33f9f06f-8764f.png"}}}}},author:{id:"C:/Users/opw/Desktop/workspace/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Benny O</strong></p>"},footnote:{id:"C:/Users/opw/Desktop/workspace/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>2018 © Benny O</li>\n<li>built with React &#x26; Gatsby</li>\n<li>theme template <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/go-docker/"}}}});
//# sourceMappingURL=path---go-docker-44bb09566ccf448f4775.js.map