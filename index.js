import fs from 'fs';
import { createOptimizer } from '@builder.io/qwik/optimizer';

const input = ['./demos/Hello.tsx', './demos/Counter.tsx'].map((name) => ({
  path: name,
  code: fs.readFileSync(name, {
    encoding: 'utf8',
    flag: 'r',
  }),
}));

const transformOptions = {
  srcDir: '/home/projects/node-bmqmxs/demos',
  entryStrategy: { type: 'hook' },
  minify: 'simplify',
  sourceMaps: false,
  transpileTs: true,
  transpileJsx: true,
  preserveFilenames: false,
  explicitExtensions: false,
  mode: 'prod',
  scope: 'my-qwik-basic-transform',
};

const optimizer = await createOptimizer();

const output = await optimizer.transformModules({
  ...transformOptions,
  input,
});

console.info(output);

emptyDir('./output');
output.modules.forEach(({ path, code }) => {
  fs.writeFile(`./output/${path}`, code, console.error);
});

const outputfs = await optimizer.transformFs({
  ...transformOptions,
  vendorRoots: [
    // '/home/projects/node-bmqmxs/vendorRoots.js',
    // '~/projects/node-bmqmxs/node_modules/@builder.io/qwik/qwikloader/qwikloader.js',
  ],
});

emptyDir('./outputfs');
output.modules.forEach(({ path, code }) => {
  fs.writeFile(`./outputfs/${path}`, code, console.error);
});

function emptyDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = `${dir}/${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      rmdir(filePath);
    } else {
      fs.unlinkSync(filePath);
    }
  });
}
