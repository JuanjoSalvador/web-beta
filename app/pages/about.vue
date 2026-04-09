<script lang="ts" setup>
import aboutRaw from '~/content/about.md?raw'

definePageMeta({
  name_es: 'Sobre mi',
  pageOrder: 2
})
</script>

<template>
  <section class="section">
    <h1 class="title is-3">
      Sobre mi
    </h1>

    <div class="content">
      <MDC :value="aboutRaw" />
    </div>

    <h2 class="title is-4">
      Experiencia laboral reciente
    </h2>
    
    <ExperienceCard
      start-month="Marzo" 
      start-year="2025" 
      end-month="Actualmente" 
      end-year=""
      company-name="iArchiva SL"
      description="Hago cosas con Java"
      :tags="['Java', 'Spring']"
    />

    <ExperienceCard
      start-month="Febrero" 
      start-year="2024" 
      end-month="Septiembre" 
      end-year="2024"
      company-name="Deep Kernel Labs"
      description="Hacia cosas con Python"
      :tags="['Python', 'Docker', 'Pandas']"
    />

    <ExperienceCard
      start-month="Marzo" 
      start-year="2021" 
      end-month="Septiembre" 
      end-year="2023"
      company-name="Cathedral Software"
      description="Hacia cosas con Django"
      :tags="['Python', 'Django', 'Docker', 'Pandas']"
    />

    <!--ExperienceCard
      start-month="Junio" 
      start-year="2020" 
      end-month="Enero" 
      end-year="2021"
      company-name="Freelance"
      description="Hacía aplicaciones con Kotlin"
      :tags="['Kotlin']"
    />

    <ExperienceCard
      start-month="Abril" 
      start-year="2018" 
      end-month="Junio" 
      end-year="2020"
      company-name="ViewNext"
      description="Borraba los logs"
      :tags="['Sistemas']"
    />

    <ExperienceCard
      start-month="Octubre" 
      start-year="2016" 
      end-month="Diciembre" 
      end-year="2017"
      company-name="Freelance"
      description="Hacía aplicaciones web fullstack"
      :tags="['Django', 'Angular']"
    />

    <ExperienceCard
      start-month="Junio" 
      start-year="2016" 
      end-month="Octubre" 
      end-year="2016"
      company-name="Seyte SL"
      description="Hacía aplicaciones móviles con Ionic"
      :tags="['Ionic', 'Angular']"
    /> -->
  </section>
</template>