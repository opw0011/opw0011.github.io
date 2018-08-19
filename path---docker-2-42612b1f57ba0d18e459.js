webpackJsonp([74894535118400],{797:function(e,t){e.exports={data:{post:{id:"C:/Users/opw/Desktop/workspace/blog/content/posts/2018-08-18--docker-2/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 48.199999999999996%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAB70lEQVQoz42QwW/SYBjG+2eoJz34L3hTiQczk12MmoUrmpiMXdUYOJmxxAkGMYoetkm2pG5opxNWXXCDzGEROlagUKuODShrS1tKYWtltPXrIJ5M5nt4vyfP9/7yvN8HGYZhmqbc6SCprclIHOgDVe2bxxZkTWvqrWnk5D2/7dErulK9n6BekxWlKa1uYDvVGi+IUlMu/fhJkCUgantsQ5Ra7bYFd/fbY/MxaAI5+zR66vH70/7IyFwMTW+tfUkGpkILS1H43Yc3ERTPFSYCz+eXoi9n4ZX4uqppg+SFTGl47vOJ4Crk/XRhKlYTRGBu5kk8X8gWit+yBNB5it5I44mvKQzPcg0BDICnWTA4Fanxsbi9Ru12u7/N/y7on3/T6/VARxAkHA4Doeu61Q29P/sXsZIZhqEoymJ0o67Q6mGnz7tcLp/PB3SOyMuyDMR+tyUeMLrRG8Dlctlutw9dGVpPJDM8cgc9N5u7y3Hs6KjTZrsYCoWWo+ily+edY86mIhT5BLEX25ayAxhFUY/HE3wRDPifrTBPbiNnvNjVTSJ9/doNh8MxMzPtnfSN3BxO41hHa2HVt6nqYoGLG6a1OcSybL1eF0Vhd6eiHHKL5EOqkQQXMAy73W6wLc/z4w889HcamBWZ/CVm2pp4FGz8AV9+8QeKn/JBAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="docker-nodejs"\n        title=""\n        src="/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-058ac.png"\n        srcset="/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-931a2.png 200w,\n/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-71e03.png 400w,\n/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-058ac.png 500w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  </p>\n<ol>\n<li>\n<p>Create <code class="language-text">Dockerfile</code></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">FROM node:7-alpine\n\n# Create a directory\nRUN mkdir -p /src/app\n\n# To ensure that a future commands are executed in /src/app\nWORKDIR /src/app\n\n# Copy from &lt;host_path&gt; to &lt;container_path&gt;\nCOPY . /src/app \n\nRUN npm install\n\nEXPOSE 3000\n\n# will be run when container launch\nCMD npm start</code></pre>\n      </div>\n<p><code class="language-text">RUN</code> is an image build step, the state of the container after a RUN command will be committed to the docker image. A Dockerfile can have many RUN steps that layer on top of one another to build the image.</p>\n<p><code class="language-text">CMD</code> is the command the container executes by default when you launch the built image. A Dockerfile can only have one CMD. The CMD can be overridden when starting a container with docker run $image $other_command. </p>\n</li>\n<li>\n<p>Build docker images</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">docker build -t nodejs:v1 .</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nnodejs              v1                  a365133f2e28        6 seconds ago       67.5MB</code></pre>\n      </div>\n</li>\n<li>\n<p>Run container with 80 port</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ docker run -d -p 80:3000 --name node-app nodejs:v1\n3dbe413b3a1c00aadbf97a44516562e49df84c688a6b6eb872aa4b161bc678a4</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES\n3dbe413b3a1c        nodejs:v1           &quot;/bin/sh -c &#39;npm sta…&quot;   28 seconds ago      Up 28 seconds       0.0.0.0:80-&gt;3000/tcp   node-app</code></pre>\n      </div>\n</li>\n</ol>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 48.199999999999996%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAB70lEQVQoz42QwW/SYBjG+2eoJz34L3hTiQczk12MmoUrmpiMXdUYOJmxxAkGMYoetkm2pG5opxNWXXCDzGEROlagUKuODShrS1tKYWtltPXrIJ5M5nt4vyfP9/7yvN8HGYZhmqbc6SCprclIHOgDVe2bxxZkTWvqrWnk5D2/7dErulK9n6BekxWlKa1uYDvVGi+IUlMu/fhJkCUgantsQ5Ra7bYFd/fbY/MxaAI5+zR66vH70/7IyFwMTW+tfUkGpkILS1H43Yc3ERTPFSYCz+eXoi9n4ZX4uqppg+SFTGl47vOJ4Crk/XRhKlYTRGBu5kk8X8gWit+yBNB5it5I44mvKQzPcg0BDICnWTA4Fanxsbi9Ru12u7/N/y7on3/T6/VARxAkHA4Doeu61Q29P/sXsZIZhqEoymJ0o67Q6mGnz7tcLp/PB3SOyMuyDMR+tyUeMLrRG8Dlctlutw9dGVpPJDM8cgc9N5u7y3Hs6KjTZrsYCoWWo+ily+edY86mIhT5BLEX25ayAxhFUY/HE3wRDPifrTBPbiNnvNjVTSJ9/doNh8MxMzPtnfSN3BxO41hHa2HVt6nqYoGLG6a1OcSybL1eF0Vhd6eiHHKL5EOqkQQXMAy73W6wLc/z4w889HcamBWZ/CVm2pp4FGz8AV9+8QeKn/JBAAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"docker-nodejs",title:"",src:"/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-058ac.png",srcSet:["/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-931a2.png 200w","/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-71e03.png 400w","/static/docker-nodejs-8c605562363e910fcb8b7508a739a8c0-058ac.png 500w"],sizes:["(max-width:","500px)","100vw,","500px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Create "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Dockerfile"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"FROM node:7-alpine\n\n# Create a directory\nRUN mkdir -p /src/app\n\n# To ensure that a future commands are executed in /src/app\nWORKDIR /src/app\n\n# Copy from <host_path> to <container_path>\nCOPY . /src/app \n\nRUN npm install\n\nEXPOSE 3000\n\n# will be run when container launch\nCMD npm start"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"RUN"}]},{type:"text",value:" is an image build step, the state of the container after a RUN command will be committed to the docker image. A Dockerfile can have many RUN steps that layer on top of one another to build the image."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"CMD"}]},{type:"text",value:" is the command the container executes by default when you launch the built image. A Dockerfile can only have one CMD. The CMD can be overridden when starting a container with docker run $image $other_command. "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Build docker images"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"docker build -t nodejs:v1 ."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nnodejs              v1                  a365133f2e28        6 seconds ago       67.5MB"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Run container with 80 port"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"$ docker run -d -p 80:3000 --name node-app nodejs:v1\n3dbe413b3a1c00aadbf97a44516562e49df84c688a6b6eb872aa4b161bc678a4"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES\n3dbe413b3a1c        nodejs:v1           "/bin/sh -c \'npm sta…"   28 seconds ago      Up 28 seconds       0.0.0.0:80->3000/tcp   node-app'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/docker-2/",prefix:"2018-08-18"},frontmatter:{title:"[Docker-101] Tutorial 2",subTitle:"Deploy a Node.js application in Docker container",cover:{childImageSharp:{resize:{src:"/static/docker-228897b3f456dadba5ff45357df1955a-8764f.png"}}}}},author:{id:"C:/Users/opw/Desktop/workspace/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Benny O</strong></p>"},footnote:{id:"C:/Users/opw/Desktop/workspace/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>2018 © Benny O</li>\n<li>built with React &#x26; Gatsby</li>\n<li>theme template <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/docker-2/"}}}});
//# sourceMappingURL=path---docker-2-42612b1f57ba0d18e459.js.map