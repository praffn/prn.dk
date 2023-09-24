import Image from "next/image";
import prnImage from "@/assets/images/prn.jpg";
import prnOgImage from "@/assets/images/resume-prn-og.jpg";
import Alert from "@/components/Alert";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Explore my detailed software engineering resume, highlighting my skills, experience, and contributions. Contact me for professional opportunities and collaborations.",
  openGraph: {
    title: "Resume",
    description:
      "Explore my detailed software engineering resume, highlighting my skills, experience, and contributions. Contact me for professional opportunities and collaborations.",
    images: [prnOgImage.src],
  },
};

export default function Resume() {
  return (
    <div>
      <div className="prose dark:prose-light mx-auto mt-24">
        <h1 className="text-center">Resume</h1>

        <p className="text-center text-sm">Phillip Raffnsøe Nilsson</p>
        <p className="text-center text-xs">
          Last updated on <time dateTime="2023-06-10">June 10, 2023</time>
        </p>
        <div className="mt-8 mb-8 w-32 sm:w-40 md:w-48 mx-auto rounded-full overflow-hidden text-[0px]">
          <Image
            src={prnImage}
            placeholder="blur"
            alt="Portrait picture of Phillip Raffnsøe Nilsson"
          />
        </div>
        <p className="flex justify-center space-x-4 text-sm md:text-xs">
          <a href="mailto:phillip@praffn.dk">phillip@praffn.dk</a>
          <a href="tel:+4542483410">+45 42 48 34 10</a>
        </p>
        <p className="flex justify-center space-x-4 text-sm md:text-xs">
          <a href="https://github.com/praffn" rel="noreferrer">
            Github
          </a>
          <a href="https://linkedin.com/in/praffn" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/praffn" rel="noreferrer">
            Twitter
          </a>
        </p>

        <h2>Profile</h2>
        <p>
          30-year-old full stack software developer with 8 years of experience
          in modern web technologies, fintech, e-commerce solutions and API
          development. I consider myself a programming language polyglot but
          with a strong preference for JavaScript/TypeScript.
        </p>
        <p>
          I hold a bachelor's degree in software development from the IT
          University of Copenhagen and I'm a multimedia designer from The
          Copenhagen School of Design and Technology.
        </p>
        <h3>Backend</h3>
        <p>
          I have several years of experience with API and system integration
          development in different languages and frameworks. My current tool of
          the trade is Laravel, with experience in both Express and ASP.NET.
        </p>
        <p>
          I typically work in completely containerized environments using Docker
          through the entire pipeline; from development to staging and finally
          to production. I strive for completely reproducible builds and
          zero-downtime deployments.
        </p>
        <h3>Frontend</h3>
        <p>
          I have a very deep understanding of accessible and semantic HTML and
          clean, structured CSS combined with advanced, interactive JavaScript
          to create usable and great experiences for both clients and end users.
        </p>
        <p>
          I usually work with SSR frameworks like Nuxt for Vue or Next for React
          (this website is built with Next and Typescript) and have extensive
          experience working with modern JavaScript SPA/SSR/Jamstack development
          and tooling. For styling, I usually work with modular SCSS,
          styled-components or Tailwind.
        </p>
        <p>
          I'm used to working directly with designers in collaborative tools
          like Figma and Sketch and are quite comfortable in Illustrator and
          Photoshop (and to a lesser extent Blender)
        </p>
        <hr />
        <h2>Work Experience</h2>
        <h3>Senior Software Engineer</h3>
        <p>
          January 2022 - Present <br />
          Ageras Group, Copenhagen
        </p>
        <h4>Responsibilities</h4>
        <ul>
          <li>
            Lead developer for the business loan and credit line platform Ageras
            Lending; scoping, planning and driving future development.
          </li>
          <li>
            Developed key components and infrastructure: KYC
            (Know-Your-Customer) flow, scheduled interest accrual, automated
            ledger syncing, automated payment reminders.
          </li>
          <li>
            Collaborated closely with cross-organizational teams across
            different entities withing the company to seamlessly integrate our
            product offering into their respective products
          </li>
          <li>
            Conducted weekly status reports to stakeholders, ensuring effective
            communication and alignment on project progress, deliverables and
            OKRs
          </li>
        </ul>
        <h4>Notable achievements</h4>
        <h3>Full Stack Developer</h3>
        <p>
          April 2019 - December 2021 <br />
          Signifly, Copenhagen
        </p>
        <h4>Responsibilities</h4>
        <ul>
          <li>
            Scoping and speccing complex development projects with multiple
            stakeholders
          </li>
          <li>
            Developing and maintaining full stack websites, web applications and
            e-commerce solutions
          </li>
          <li>
            Creating and maintaining CI/CD pipelines, managing deployments on
            different cloud providers; Netlify, Laravel Forge and own in-house
            Docker Swarm setup
          </li>
          <li>
            Mentoring interns/junior developers in web technologies and general
            programming problem solving
          </li>
        </ul>
        <h4>Notable achievements</h4>
        <ul>
          <li>
            Developed key parts both in the frontend and the backend of{" "}
            <a href="https://maerskcontainersales.com/" rel="noreferrer">
              Maersk Container Sales
            </a>
            , a global platform for buying shipping containers. The entire
            system is event sourced, and the frontend is server-side rendered.
          </li>
          <li>
            Fully lead the development of{" "}
            <a href="https://dea.nu/i-farver/" rel="noreferrer">
              DEA's new website
            </a>{" "}
            and event management solution. A completely statically generated
            website with thousands of pages, deployed in just a few minutes.
          </li>
          <li>
            Lead the development of the new b2c{" "}
            <a href="https://shop.zaptec.com" rel="noreferrer">
              e-commerce website for Zaptec
            </a>
            , a Norwegian tech company making EV chargers. Statically generated
            Jamstack website, hosted on Netlify using Shopify as the headless
            e-commerce system.
          </li>
        </ul>
        <h3>Freelance Software Developer</h3>
        <p>
          August 2016 - Present <br />
          Freelance
        </p>
        <h4>Responsibilities</h4>
        <ul>
          <li>
            Involvement in the entire journey with clients; from initial contact
            to speccing, designing, implementing, testing and maintaining the
            final product
          </li>
          <li>
            Consulting customers on best solutions with respect to both problem
            and budget
          </li>
          <li>
            Clear communication with client and other stakeholders through the
            entire project
          </li>
        </ul>
        <h4>Notable achievements</h4>
        <ul>
          <li>
            Development of campaign site for a new series of commercial door
            entrances for the global door manufacturer Assa Abloy (the campaign
            is now offline). Built in client's CRM HubSpot for better customer
            insights.
          </li>
          <li>
            Campaign website for brand new senior cell phones by Swedish phone
            company Doro (the campaign is now offline). Pure HTML and CSS with
            sprinkles of Javascript for interactivity
          </li>
          <li>
            Website and rental booking system for vacation properties in
            Almuñecar, Spain. React SPA with Express backend.
          </li>
        </ul>
        <h3>Frontend Developer</h3>
        <p>
          June 2015 - August 2016 <br />
          Frankly A/S
        </p>
        <h4>Responsibilities</h4>
        <ul>
          <li>
            Full development of websites for clients from design to final
            product
          </li>
        </ul>
        <h4>Notable achievements</h4>
        <ul>
          <li>
            Lead the frontend development of an MVP of a digital platform for
            travel itinerary planners selling trips and journeys around the
            world. Frontend in Angular and backend in Laravel.
          </li>
        </ul>
        <hr />
        <h2>Education</h2>
        <ul>
          <li>
            <h3>BSc. Software Development</h3>
            <p>
              2016-2019
              <br />
              IT University of Copenhagen
            </p>
            <p>
              Bachelor thesis on agile hybrid-native app development with a
              focus on UX design.
            </p>
            <p>
              Favourite courses: Programming Language Theory and Compiler
              Design, IT Security, Machine Learning and AI
            </p>
          </li>
          <li>
            <h3>Academy Profession Degree in Multimedia Design</h3>
            <p>
              2014-2016
              <br />
              Copenhagen School of Design and Technology
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
