<template>
  <q-page class="flex flex-center light-gradient">
    <q-card class="my-card q-mb-lg" style="width: 50vw">
      <q-card-section>
        <div class="row q-gutter-md">
          <div class="col-auto">
            <q-avatar size="150px" style="flex-shrink: 0">
              <q-img
                src="~assets/me.jpeg"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                style="width: 150px; height: 150px"
              />
            </q-avatar>
          </div>
          <div class="col">
            <div class="text-h6 q-mb-md">About Me</div>
            <p style="flex-grow: 1">
              Welcome to my personal website! I am Jayson Millan, an experienced
              IT professional with a strong background in Software Development,
              Business Intelligence and Data Analytics, Computer Networking, and
              Server Management. I hold a degree in Computer Engineering from
              Ateneo de Davao University.
            </p>

            <p>
              Throughout my career, I have honed my skills and expertise in a
              wide range of areas. I am proficient in various operating systems,
              including Windows, Linux (CentOS, Ubuntu), and possess a deep
              understanding of their administration and management. In terms of
              web development, I have a solid command of Python-Django, PHP,
              MySQL, HTML, CSS, and JavaScript, allowing me to create dynamic
              and interactive web applications. I am adept at building REST APIs
              using Python-FastAPI and JavaScript-ExpressJS, and I have hands-on
              experience with frontend development using jQuery and
              Vue3-Quasar2.
            </p>

            <p>
              My knowledge extends to Docker containers, allowing me to deploy
              applications efficiently and securely. Additionally, I have a
              strong grasp of the Microsoft Azure ecosystem, enabling me to
              leverage its services effectively. I am skilled in Python and
              Linux bash shell scripting, enabling automation and streamlining
              of various processes.
            </p>

            <p>
              When it comes to databases, I have extensive experience working
              with relational database management systems (RDBMS) such as MySQL,
              MS SQL, and Oracle. I am well-versed in version control using Git,
              ensuring smooth collaboration and efficient code management. Data
              visualization is another area where I excel, utilizing tools like
              Tableau, Excel, and PowerBI to present complex data in a visually
              appealing and understandable manner.
            </p>

            <p>
              I am also familiar with Continuous Integration and Continuous
              Deployment (CICD) practices, as well as DevOps operations,
              enabling streamlined development processes and efficient
              deployment of applications. In addition, I have worked with
              MongoDB, Google APIs, Apache web server, and possess a solid
              understanding of computer networks and IP fundamentals.
            </p>

            <p>
              I invite you to explore my website and learn more about my
              professional journey, projects I have worked on, and the skills
              and expertise I bring to the table. If you have any questions or
              would like to discuss potential collaborations, please don't
              hesitate to reach out.
            </p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
});
</script>
