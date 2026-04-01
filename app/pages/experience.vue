<script lang="ts" setup>
definePageMeta({
  name_es: 'Sobre mi',
  pageOrder: 2
})
</script>

<template>
  <section class="section">
    <h3 class="title is-3">
      Sobre mi
    </h3>
    <div class="content">
      <p>
        Empecé mi carrera como desarrollador de software en el año 2016, al terminar mis estudios en 
        <strong>Técnico Superior en Desarrollo de Aplicaciones Web</strong> Desde entonces he trabajado
        en diversas empresas y proyectos, con diferentes tecnologías y lenguajes, como <strong>Java</strong>, 
        <strong>Python</strong>, y <strong>JavaScript</strong>.
      </p>
      <p>
        Dada mi curiosidad, y el considerarme un <em>maestro de nada, aprendiz de todo</em>, he pasado por diversos campos
        en mi vida laboral, como desarrollo frontend, con tecnologías como <strong>Angular</strong> o <strong>Vue</strong>,
        desarrollo backend con <strong>Django</strong>, <strong>Flask</strong>, o <strong>Spring</strong>. Alternativamente,
        tengo a mis espaldas dos cursos de especialización de FP, en <strong>ciberseguridad</strong> y en 
        <strong>desarrollo de videojuegos y RV</strong>, aunque lamentablemente no he tenido oportunidad de ejercer en dichos
        campos y solo han servido para saciar una necesidad de conocimiento.
      </p>
    </div>

    <h3 class="title is-4">
      Experiencia laboral reciente
    </h3>
    
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