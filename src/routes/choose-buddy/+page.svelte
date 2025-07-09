<script>
  import { BennySVG, MiloSVG, DaisySVG, PercySVG, RaymondSVG, BuddyForm } from '$lib/index';

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
  <section>
    <h1>Choose a buddy</h1>
    <p>
      During the learning journey your child will have a buddy that learns with them,
      gives reminders and shows the statistics! Here you can pick a buddy.
    </p>
    <p>Drag left or right, or use the buttons to see all the buddies!</p>
  </section>

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

  section {
    display: flex;
    flex-direction: column;
    padding: 1em;
    margin-bottom: 1em;
  }

  h1 {
    margin: auto;
    margin-bottom: 2em;
  }

  p:first-of-type {
    max-width: 30em;
    margin-bottom: 1em;
  }

  @media (max-height: 680px),
  (min-width: 680px) {
    main {
      height: 100%;
    }
  }
</style>
