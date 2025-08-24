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

<div>
  <BuddyIntro/>
  <BuddyForm buddys={data.buddys} {buddyMap} />
</div>

<style>
div {
  background: var(--bg-image-blue);
  color: white;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
