<template>
    <div>
        <h4 class="subtitle is-3 is-light">Proyectos personales</h4>

        <div class="content">
            <p class="description is-justified">
            </p>
        </div>
        
        <div class="columns is-3">
            <ProjectCard 
                title="AD Jobs"
                url="https://github.com/JuanjoSalvador/ad-jobs"
                description="Web application to submit job offers, which are going to be periodically published into Telegram channel."
                :tags="['Python']"
            />
            
            <ProjectCard 
                title="Tanuki"
                url="https://github.com/tanukiapp/tanuki"
                description="Anime weekly schedule for Kitsu.io users. Built using Node and Express for backend and Vue 3 for frontend."
                :tags="['Python', 'Pandas', 'Node.js', 'Vue']"
            />

            <ProjectCard 
                title="Sunset"
                url="https://github.com/JuanjoSalvador/sunset-bsky"
                description="An experimental Bluesky client written with Vue 3 and Nuxt, made mainly for learning purposes."
                :tags="['Nuxt']"
            />
        </div>

        <div class="columns is-3">
            <ProjectCard 
                title="Portfolio"
                url="https://github.com/JuanjoSalvador/sunset-bsky"
                description="This website! Made originally with Jekyll, rewritten using Nuxt just for fun."
                :tags="['Nuxt']"
            />
        </div>

        <h4 class="subtitle is-3 is-light">Contribuciones en proyectos OpenSource</h4>
        <div class="columns">
            <div class="column">
                <span class="repository">
                    <a href="https://github.com/tuskyapp/Tusky">
                        Tusky
                    </a>
                </span>
                <p class="description is-justified">An Android client for the microblogging server Mastodon. Contributed as Spanish translator.</p>
            </div>

            <div class="column">
                <span class="repository">
                    <a href="https://ypsilenna.art/">
                        Ypsilenna.art
                    </a>
                </span>
                <p class="description is-justified">
                    Illustration portfolio. Design and code originally by Kornelia Reza. 
                    I worked on the Jekyll migration of the codebase, and implemented custom plugins.
                </p>
            </div>
            
            <div class="column">
                <span class="repository">
                    <a href="https://github.com/zerasul/blask">
                        <strong>Blask</strong>
                    </a>
                </span>
                <p class="description is-justified">Flask based blogging engine. I made few patches with corrections and new features, such as refactoring the code and fixing security issues.</p>
            </div>
            
            <div class="column">
                <span class="repository">
                    <a href="https://github.com/zerasul/genesis-code">
                        Genesis-Code
                    </a>
                </span>
            <p class="description is-justified">Visual Studio Code Genesis Development Extension. Minor code contributions and Windows testing.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>