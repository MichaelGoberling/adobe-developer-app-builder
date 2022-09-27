"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[7735],{66785:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return c}});var o=n(87462),t=n(63366),i=(n(15007),n(64983)),r=n(91515),s=["components"],l={},d={_frontmatter:l},p=r.Z;function c(e){var a=e.components,n=(0,t.Z)(e,s);return(0,i.mdx)(p,(0,o.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"lesson-4-consume-events"},"Lesson 4: Consume Events"),(0,i.mdx)("p",null,"There are three ways one can consume event:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Using Journaling API "),(0,i.mdx)("li",{parentName:"ul"},"Using runtime action "),(0,i.mdx)("li",{parentName:"ul"},"Using webhook URL")),(0,i.mdx)("h2",{id:"option-1-using-journaling-api-to-consume-events"},"Option 1: Using Journaling API to consume events"),(0,i.mdx)("p",null,"For enterprise developers, Adobe offers journaling to consume events. The Adobe I/O Events Journaling API enables enterprise integrations to consume events according to their own cadence and process them in bulk. Unlike webhooks, no additional registration or other configuration is required; every enterprise integration that is registered for events is automatically enabled for journaling. Journaling data is retained for 7 days. "),(0,i.mdx)("p",null,"After you fire event, you should be able to verify your event through journaling ",(0,i.mdx)("inlineCode",{parentName:"p"},"UNIQUE API ENDPOINT")," you get from console by follow below instruction\n",(0,i.mdx)("a",{parentName:"p",href:"/adobe-developer-app-builder/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/journaling_api.md"},"Journaling api"),"\nyou could use ",(0,i.mdx)("inlineCode",{parentName:"p"},"Curl")," command or ",(0,i.mdx)("inlineCode",{parentName:"p"},"POSTMAN")," to call this journaling ",(0,i.mdx)("inlineCode",{parentName:"p"},"UNIQUE API ENDPOINT")," to see your fired event.\nOr you can use ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-events/"},"Custom event SDK")," to call Journaling API to retrieve your event."),(0,i.mdx)("h2",{id:"option-2-using-runtime-action"},"Option 2: Using runtime action"),(0,i.mdx)("p",null,"Once you have access to ",(0,i.mdx)("a",{parentName:"p",href:"/adobe-developer-app-builder/apis/experienceplatform/runtime.html"},"Adobe I/O Runtime")," (in our case you already have) and you have your ",(0,i.mdx)("a",{parentName:"p",href:"https://api.slack.com/incoming-webhooks"},"slack webhook url defined")," :"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Edit the ",(0,i.mdx)("inlineCode",{parentName:"li"},"app.config.yaml")," to add an action called slack ")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"}," slack:\n        function: actions/slack/index.js\n        web: 'yes'\n        runtime: 'nodejs:14'\n        inputs:\n          LOG_LEVEL: debug\n        annotations:\n          final: true\n")),(0,i.mdx)("p",null,"Add in the actions folder with ",(0,i.mdx)("inlineCode",{parentName:"p"},"actions/slack/index.js")," with below sample code"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},' var request = require(\'request\');\n\n/* default slackwebhook and channel add yours here and replace the TODO below */\n/* this is a sample action for how to receive event and sent a message to slack */\nvar request = require(\'request\');\n\n/* default slackwebhook and channel add yours here and replace the TODO below */\nvar slackWebhook = "<your-webhook>";\nvar slackChannel = "<your-slack>";\n\nasync function main (params) {\n  \n  /* print event detail */\n  console.log(\'in main + event detail: \', params.event);\n\n  var returnObject = {\n    statusCode: 200,\n    headers: {\n      \'Content-Type\': \'application/json\'\n    },\n    body: ""\n  };\n\n  /* handle the challenge */\n  if (params.challenge) {\n\n    console.log(\'Returning challenge: \' + params.challenge);\n\n    returnObject.body = new Buffer(JSON.stringify({\n      "challenge": params.challenge\n    })).toString(\'base64\');\n\n    return returnObject;\n\n  } else {\n\n    /* we need it to run asynchronously, so we are returning a Promise */\n    return new Promise(function (resolve, reject) {\n\n      var slackMessage = " Event received: " + JSON.stringify(params);\n\n      var payload = {\n        "channel": slackChannel,\n        "username": "incoming-webhook",\n        "text": slackMessage,\n        "mrkdwn": true,\n      };\n\n      var options = {\n        method: \'POST\',\n        url: slackWebhook,\n        headers:\n            { \'Content-type\': \'application/json\' },\n        body: JSON.stringify(payload)\n      };\n\n      request(options, function (error, response, body) {\n        if (error) {\n\n          console.log("ERROR: fail to post " + response);\n\n          reject(error);\n\n        } else {\n\n          console.log ("SUCCESS: posted to slack " + slackMessage);\n\n          returnObject.body = new Buffer(JSON.stringify({\n            "slackMessage": slackMessage\n          })).toString(\'base64\');\n\n          resolve(returnObject);\n        }\n\n      });\n\n    });\n\n  }\n}\n\nexports.main = main\n')),(0,i.mdx)("p",null,"After you deployed your runtime action, you can verfiy the webhook is working by "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -H 'Content-type: application/json' --data '{\"text\":\"Hello, World!\"}' https://<your-namespace>.adobeio-static.net/api/v1/web/event-demo-0.0.1/slack\n")),(0,i.mdx)("p",null,"In addtion, in developer console, you will be able to see ",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1162px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/05650b02a223dff979b8f998e5627a32/5530d/slack-webhook.webp 320w","/adobe-developer-app-builder/static/05650b02a223dff979b8f998e5627a32/0c8fb/slack-webhook.webp 640w","/adobe-developer-app-builder/static/05650b02a223dff979b8f998e5627a32/38baa/slack-webhook.webp 1162w"],sizes:"(max-width: 1162px) 100vw, 1162px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/05650b02a223dff979b8f998e5627a32/dd4a7/slack-webhook.png 320w","/adobe-developer-app-builder/static/05650b02a223dff979b8f998e5627a32/0f09e/slack-webhook.png 640w","/adobe-developer-app-builder/static/05650b02a223dff979b8f998e5627a32/8283d/slack-webhook.png 1162w"],sizes:"(max-width: 1162px) 100vw, 1162px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/05650b02a223dff979b8f998e5627a32/8283d/slack-webhook.png",alt:"slack webhook",title:"slack webhook",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nSelect the slack one and save it. Now when you fire event, you should be able to receive a slack message every time people click the like button\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1059px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/060d428a5cfff6a17a1856c78c7006c0/5530d/slack-message.webp 320w","/adobe-developer-app-builder/static/060d428a5cfff6a17a1856c78c7006c0/0c8fb/slack-message.webp 640w","/adobe-developer-app-builder/static/060d428a5cfff6a17a1856c78c7006c0/cb660/slack-message.webp 1059w"],sizes:"(max-width: 1059px) 100vw, 1059px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/060d428a5cfff6a17a1856c78c7006c0/dd4a7/slack-message.png 320w","/adobe-developer-app-builder/static/060d428a5cfff6a17a1856c78c7006c0/0f09e/slack-message.png 640w","/adobe-developer-app-builder/static/060d428a5cfff6a17a1856c78c7006c0/604b4/slack-message.png 1059w"],sizes:"(max-width: 1059px) 100vw, 1059px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/060d428a5cfff6a17a1856c78c7006c0/604b4/slack-message.png",alt:"slack message",title:"slack message",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"option-3-using-webhook-to-consume-events"},"Option 3: Using webhook to consume events"),(0,i.mdx)("p",null,"You could configure another event delivery method through console by ",(0,i.mdx)("inlineCode",{parentName:"p"},"Edit Events Registration")," and add webhook "),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/5530d/webhook.webp 320w","/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/0c8fb/webhook.webp 640w","/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/94b1e/webhook.webp 1280w","/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/6e30a/webhook.webp 1549w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/dd4a7/webhook.png 320w","/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/0f09e/webhook.png 640w","/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/bbbf7/webhook.png 1280w","/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/4596f/webhook.png 1549w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/adobe-developer-app-builder/static/c058ebdf894e13c2678d1ebbbaed3e6d/bbbf7/webhook.png",alt:"webhook",title:"webhook",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"Before you can register a webhook, the webhook needs to be online and operational. If not, then the registration will fail. So you need to take care of setting that up first. Your webhook must be hosted on a server. For development, you may use localhost along with a tool like ",(0,i.mdx)("a",{parentName:"p",href:"https://ngrok.com/"},"Ngrok"),"."),(0,i.mdx)("p",null,"Your webhook needs to"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"be accessible from the internet (localhost won't work)"),(0,i.mdx)("li",{parentName:"ul"},"be reachable over HTTPS"),(0,i.mdx)("li",{parentName:"ul"},'correctly respond to a "challenge" request\nFor more details, follow the link below:\n',(0,i.mdx)("a",{parentName:"li",href:"/adobe-developer-app-builder/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/webhook_docs_intro.md"},"how to use webhook"))),(0,i.mdx)("h2",{id:"lets-test-it-and-fire-events"},"Let's test it, and fire events"),(0,i.mdx)("p",null,"With that,once you fire the event (in our codelab case, click the invoke button) you should see them appearing in above three options:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Through Adobe I/O Journaling API "),(0,i.mdx)("li",{parentName:"ul"},"Get slack message - through slack runtime action webhook"),(0,i.mdx)("li",{parentName:"ul"},"Through webhook URL")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-event-driven-lesson-4-md-bc0f26923cca9ea06d9e.js.map