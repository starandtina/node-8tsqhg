import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const test = 'Qwik';

  return <p onClick$={() => console.info(test)}> Hello {test} </p>;
});
