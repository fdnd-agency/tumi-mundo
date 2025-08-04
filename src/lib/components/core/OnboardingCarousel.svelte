<script>
  import { onMount } from 'svelte';
  import { CarouselIndicators, OnboardingSlide } from '$lib/index';

  let currentSlide = 0;
  let slides = [
    {
      title: 'Learn languages',
      text: 'Every household is different. Some only speak one language, others even as much as three! Learning more than one language has great neurological benefits for anyone at any age. With TuMi Mundo your child can learn up to 3 languages.',
      color: 'hsla(214, 72%, 65%, 1)',
      contrastColor: 'hsla(213, 53%, 52%, 1)',

    },
    {
      title: 'Test the progress',
      text: 'During the learning journal you can measure the improvement of your child. There is an option to share the data with researchers to further improve the method and participate in special researches! You can manage the option to share your data at any given time in the app.',
      color: 'hsla(195, 49%, 48%, 1)',
      contrastColor: 'hsla(196, 47%, 38%, 1)' 
    },
    {
      title: 'See the results',
      text: 'See the results of the tests and watch as your child learns a language with TuMi Mundo. The older your child becomes the further into the method you go, it starts with listening, it ends with being able to have a full conversation.',
      color: 'hsla(174, 94%, 34%, 1)',
      isLast: true,
      buttonLabel: 'Make an account',
      buttonLink: '/sign-up',
      contrastColor: 'hsla(174, 96%, 25%, 1)'
    }
  ];

  onMount(() => {
    const carousel = document.querySelector('.carousel');
    const indicators = document.querySelectorAll('.indicator');
    const buttons = document.querySelectorAll('.carousel-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => scrollCarousel(1));
    });

    indicators.forEach(indicator => {
      indicator.addEventListener('click', function () {
        const targetSlide = Number(this.dataset.slide);
        scrollCarousel(targetSlide - currentSlide);
        currentSlide = targetSlide;
        updateIndicators();
      });
    });

    function scrollCarousel(direction) {
      const scrollAmount = carousel.clientWidth;
      carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      currentSlide = (currentSlide + direction + indicators.length) % indicators.length;
      updateIndicators();
    }

    function updateIndicators() {
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
      });
    }
  });
</script>

<ul class="carousel">
  {#each slides as slide, i}
    <li>
      <OnboardingSlide {...slide}>
        <svelte:fragment slot="indicators">
          <CarouselIndicators slides={slides.length} active={i} />
        </svelte:fragment>
      </OnboardingSlide>
    </li>
  {/each}
</ul>

<style>
  .carousel {
    display: flex;
    scroll-snap-type: x mandatory;
    overflow: auto;
    width: 100%;
  }
  .carousel > li {
    scroll-snap-align: center;
    width: 100vw;
    height: 100dvh;
    flex-shrink: 0;
  }
</style>
