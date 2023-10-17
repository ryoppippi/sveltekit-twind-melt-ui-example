<script>
  import { createAccordion } from '@melt-ui/svelte';
  import { slide } from 'svelte/transition';

  import { tx } from '@twind/core'

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion({
    defaultValue: 'item-1',
  });

  const items = [
    {
      id: 'item-1',
      title: 'What is it?',
      description:
      'A collection of accessible & unstyled component builders for Svelte applications.',
    },
    {
      id: 'item-2',
      title: 'Can I customize it?',
      description: 'Totally, it is 100% stylable and overridable.',
    },
    {
      id: 'item-3',
      title: 'Svelte is awesome, huh?',
      description: 'Yes, and so are you!',
    },
  ];

  let className = '';

  const FlexOptions = ['center', 'start', 'end']
  /** @type { typeof FlexOptions[number] } */
  let flexOption  = 'center'
</script>

<div class="flex flex-row justify-center">
  <select bind:value={flexOption}>
    {#each FlexOptions as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>

<div class={tx("flex flex-row",`justify-${flexOption}`)}>
  <div
    class={tx(
      'w-[18rem] max-w-full rounded-xl bg-white shadow-lg sm:w-[25rem]',
      className,
    )}
    {...$root}
  >
    {#each items as { id, title, description }, i}
      <div
        {...$item(id)} use:item
        class="overflow-hidden transition-colors first:rounded-t-xl
        last:rounded-b-xl"
      >
        <h2 class="flex">
          <button
            {...$trigger(id)} use:trigger
            class={tw(
              'flex flex-1 cursor-pointer items-center justify-between ',
              'bg-white px-5 py-5 text-base font-medium leading-none',
              'text-black transition-colors hover:bg-neutral-100 focus:!ring-0',
              'focus-visible:text-magnum-800',
              i !== 0 && 'border-t border-t-neutral-300',
            )}
          >
            {title}
          </button>
        </h2>
        {#if $isSelected(id)}
          <div
            class={tw(
              'content',
              'overflow-hidden bg-neutral-100 text-sm text-neutral-600',
            )}
            {...$content(id)} use:content
            transition:slide
          >
            <div class="px-5 py-4">
              {description}
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
