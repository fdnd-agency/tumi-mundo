<script>
  import { BennySVG, MiloSVG, DaisySVG, PercySVG, RaymondSVG, BuddyForm, BuddyIntro } from '$lib/index';
  export let data;

  // Map buddy-names
  const buddyMap = {
    Percy: PercySVG,
    Raymond: RaymondSVG,
    Benny: BennySVG,
    Milo: MiloSVG,
    Daisy: DaisySVG
  };
</script>

<main>
  <BuddyIntro/>
  <BuddyForm buddys={data.buddys} {buddyMap} />
</main>

<style>
  main {
    background: var(--bg-image-blue);
    color: white;
    min-height: 100vh;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-height: 680px),
  (min-width: 680px) {
    main {
      height: 100%;
    }
  }
</style>
