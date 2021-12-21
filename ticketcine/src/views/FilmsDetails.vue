<template>
    <div class="films-details">
        <Toten />
        <FilmTrailer />
        <FilmSinopse />
    </div>
</template>

<script>
import Toten from '@/components/FilmsDetails/Toten.vue'
import FilmTrailer from '@/components/FilmsDetails/FilmTrailer.vue'
import FilmSinopse from '@/components/FilmsDetails/FilmSinopse.vue'

export default {
    name: 'FilmsDetails',
    components: {
        Toten,
        FilmTrailer,
        FilmSinopse
    }
}
</script>