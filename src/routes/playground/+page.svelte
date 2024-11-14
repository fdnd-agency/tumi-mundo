<script>
    import Story from '../../components/story.svelte';

    const stories = [
        { title: 'Story One', summary: 'This is the description of the story. Some titles may be a little longer than usual. We need to build in an line-clamp for that.', image: '/stories/Story-pengiun.png', playtime: '2 min. 5 sec', language: 'English'},
        { title: 'Story Two', summary: 'This is the description of the story.', image: '/stories/Story-trees.png', playtime: '3 min. 6 sec', language: 'Dutch'},
        { title: 'Story Three', summary: 'This is the description of the story.', image: '/stories/Story-turtle.png', playtime: '1 min. 15 sec', language: 'French'},
        { title: 'Story Four', summary: 'This is the description of the story.', image: '/stories/Story-pengiun.png', playtime: '4 min. 53 sec', language: 'German'}
    ];

</script>
<section>
    <Story {stories} />
</section>

<style>
    section{
        background-color: purple;
    }
</style>