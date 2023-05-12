import { renderSSR, _pauseFromContexts } from '@builder.io/qwik';
import { renderToString } from '@builder.io/qwik/server';
import { s_iQXyswnSyS4 } from './output/entry_Hello.js';

const node = s_iQXyswnSyS4();

console.log(node);
console.log('-----------');

// const stream = {
//   write: (chunk) => {
//     console.log(chunk);
//   },
// };

// https://github.com/BuilderIO/qwik/blob/main/packages/qwik/src/core/render/ssr/render-ssr.ts#L97
// renderSSR(node, {
//   containerTagName: 'html',
//   stream: stream,
//   beforeClose: async (contexts, containerState) => {
//     const snapshotResult = await _pauseFromContexts(contexts, containerState);
//     // console.log(contexts[0].$element$);
//     console.log(snapshotResult);
//     console.log('=============');
//   },
// }).then((chuns) => {
//   console.log(chuns);
//   console.log('-----------');
// });

// https://github.com/BuilderIO/qwik/blob/main/packages/qwik/src/server/render.ts#L233
renderToString(node, {
  // https://github.com/BuilderIO/qwik/blob/main/packages/qwik/src/qwikloader.ts
  // qwikLoader: {
  //   include: 'never',
  // },
}).then(console.log);
