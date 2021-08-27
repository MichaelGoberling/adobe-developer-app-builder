(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[8835],{24823:function(e,r,n){"use strict";n.r(r),n.d(r,{_frontmatter:function(){return l},default:function(){return g}});var s=n(22122),t=n(19756),o=(n(15007),n(64983)),a=n(99536),i=["components"],l={},u={_frontmatter:l},c=a.Z;function g(e){var r=e.components,n=(0,t.Z)(e,i);return(0,o.mdx)(c,(0,s.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"firefly-files-sdk"},"Firefly Files SDK"),(0,o.mdx)("h2",{id:"return-a-list-of-files-stored-with-the-files-sdk"},"Return a list of files stored with the Files SDK"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Return a list of files stored with the Files SDK\n *\n * Sample curl request:\n * curl --location --request GET 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/listfiles'\n * \n * You could add the query param \"path\" to reduce the scope of results within a directory.\n */\nconst { Core, Files } = require('@adobe/aio-sdk')\nconst { errorResponse, stringParameters, checkMissingRequestInputs } = require('../../utils')\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['path']\n    const requiredHeaders = []\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    const files = await Files.init()\n    const fileList = await files.list(params.path)\n    logger.debug(fileList)\n\n    const response = {\n      headers: {},\n      body: {\n        fileList\n      },\n      statusCode: 200\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")),(0,o.mdx)("h2",{id:"return-a-presigned-url-of-a-private-file-from-the-files-sdk"},"Return a presigned URL of a private file from the Files SDK"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Return a presigned URL of a private file from the Files SDK\n *\n * Sample curl request:\n * curl --location --request GET 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/downloadfile-presigned?fileLocation=/mydir/test.csv'\n */\n\nconst { Core, Files } = require('@adobe/aio-sdk')\nconst { errorResponse, stringParameters, checkMissingRequestInputs } = require('../../utils')\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['fileLocation']\n    const requiredHeaders = []\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    const files = await Files.init()\n    const presignUrl = await files.generatePresignURL(params.fileLocation, { expiryInSeconds: 60 })\n    logger.debug(presignUrl)\n\n    const response = {\n      headers: {},\n      body: {\n        presignUrl\n      },\n      statusCode: 200\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")),(0,o.mdx)("h2",{id:"return-a-file-from-the-files-sdk-with-redirect"},"Return a file from the Files SDK with Redirect"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Return a file from the Files SDK with Redirect\n */\nconst { Core, Files } = require('@adobe/aio-sdk')\nconst { errorResponse, stringParameters, checkMissingRequestInputs } = require('../../utils')\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['fileLocation']\n    const requiredHeaders = []\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    const files = await Files.init()\n    // Generate a presigned URL of the file that is valid for 60 seconds only\n    const presignUrl = await files.generatePresignURL(params.fileLocation, { expiryInSeconds: 60 })\n    logger.debug(presignUrl)\n\n    const response = {\n      headers: { location: presignUrl }, \n      statusCode: 302\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")),(0,o.mdx)("h2",{id:"upload-a-file-to-the-files-sdk"},"Upload a file to the Files SDK"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Upload a file to the Files SDK\n *\n * Sample curl request:\n * curl --location --request POST 'https://my-namespace.adobeioruntime.net/api/v1/web/my-app-0.0.1/uploadfile' \\\n * --header 'Content-Type: application/json' \\\n * --data-raw '{\n *     \"fileUrl\": \"https://url.of.file\",\n *     \"fileLocation\": \"/mydir/test.csv\"\n * }'\n */\nconst { Core, Files } = require('@adobe/aio-sdk')\nconst fetch = require('node-fetch')\nconst { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../../utils')\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['fileUrl', 'fileLocation']\n    const requiredHeaders = []\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    const originalFile = await fetch(params.fileUrl)\n\n    const files = await Files.init()\n    logger.info('File SDK init done')\n    const fileLocation = params.fileLocation\n    await files.write(fileLocation, originalFile.body)\n    const props = await files.getProperties(fileLocation)\n    logger.debug(JSON.stringify(props))\n\n    const response = {\n      statusCode: 200,\n      body: {}\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-sample-apps-code-snippets-files-md-7f6bfb4b208db1fcb547.js.map